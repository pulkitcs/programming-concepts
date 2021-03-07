#include <stdio.h>

int convertToHex(int number) {
  int divided  = number / 16;
  int remainder =  number % 16;
  int values[2] = {divided, remainder};

  return values;
}

char binding(int number) {
  char alphabets[26] = { 
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z' 
  };

  return alphabets[number - 10];
}

int main() {
  int num[]={};
  int decimalNumber = 12202;
  



  return 0;
}
