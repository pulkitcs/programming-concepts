// silent and listen;

function checkAnagram(str1: string , str2: string): boolean {

  if(str1.length !== str2.length)
   return false;

  const sortedStr1 = [...str1].sort().join();
  const sortedStr2 = [...str2].sort().join();

  return sortedStr1 === sortedStr2;
};

function verifyAnangram(word1: string[], word2: string[]) {
  const word1Seq = [...word1].sort();
  const word2Seq = [...word2].sort();
  let isSame = true;

  for(let i = 0; i < word1Seq.length; i++) {
    if (word1Seq[i] !== word2Seq[i]) {
      return false
    }
  }

  return isSame;
}

// console.time('smart')
// checkAnagram('silent', 'listen');
// console.timeEnd('smart');


const input = ["eat", "ate", "tea", "himanshu", "ear","team", "meat", "mate", "are"];
//[["eat", "ate", "tea"], ["himanshu"], ["team", "meat", "mate"],["are", "ear"]]


function checkAnagrams(input: string[]): string[][] {
  const output: string[][] = [];
  const map: { [key: string]: boolean} = {};
  
   input.forEach((word, index) => {
     const seq = map[index] ? [] : [word];
     map[index] = true;
     
     for(let i = 0; i < input.length; i++) {
       const currentWord = input[i];
       
       if(word.length !== currentWord.length || index === i || map[i]) {
         continue;
       };

       const result = word.split('').every((c) => currentWord.indexOf(c) > -1);

       if(result) {
         seq.push(currentWord);
         map[i] = true;
       }
     }

     seq.length && output.push(seq);
   });

  return output;

};

console.time('lazy');
checkAnagrams(input);
console.timeEnd('lazy');


//const input = ["eat", "ate", "tea", "himanshu", "ear","team", "meat", "mate", "are"];

type compareFn = {
  (word: string, currentWord: string): boolean;
}

function createCompareFn (shouldUseLoop: boolean = false): compareFn {
  if(shouldUseLoop)
    return (word: string, currentWord: string) => word.split('').every((l) => currentWord.indexOf(l) > -1);
  else return (word: string, currentWord: string) => word === [...currentWord].sort().join();
} 

const anagrams = (input: string[], fn: compareFn, shouldUseLoop: boolean): string[][] => {
  const copy = [...input];
  let count = 0;
  const output: string[][] = [];
  
  while(copy.length) {
    const word:string = copy[count];
    const sortedWord: string = [...word].sort().join();
    const seq: string[] = [copy.slice(0, 1)[0]];

    for(let i = 0; i<copy.length; i++) {
      const currentWord:string = copy[i];

       if(i === count ||  currentWord.length !== word.length) {
          continue;
       }

       const result: boolean = fn(shouldUseLoop ? word : sortedWord, currentWord);

       if(result) {
          const elem: string[] = copy.splice(i, 1);
          seq.push(elem[0]);
       }
    }

    output.push(seq);
    if (count <= copy.length - 1) ++count;
  }

  return output;
}

const shouldUseLoop = true;
console.log(anagrams(input, createCompareFn(shouldUseLoop), shouldUseLoop));