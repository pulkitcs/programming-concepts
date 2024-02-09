// silent and listen;

function checkAnagram(str1: string , str2: string): boolean {

  if(str1.length !== str2.length)
   return false;

  const sortedStr1 = [...str1].sort().join();
  const sortedStr2 = [...str2].sort().join();

  return sortedStr1 === sortedStr2;
};


console.log(checkAnagram('silent', 'listen'));