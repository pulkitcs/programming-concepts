// silent and listen;

function checkAnagram(str1: string , str2: string): boolean {

  if(str1.length !== str2.length)
   return false;

  const sortedStr1 = [...str1].sort().join();
  const sortedStr2 = [...str2].sort().join();

  return sortedStr1 === sortedStr2;
};

console.time('smart')
checkAnagram('silent', 'listen');
console.timeEnd('smart');




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