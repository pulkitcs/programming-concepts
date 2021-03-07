#include <stdio.h>
#include <string.h>

#define ARRAY_SIZE 100

char names[] = {'p', 'u', 'l', 'k', 'i', 't'};
char myName[ARRAY_SIZE] = "Does this work ";
int nums[] = {1,2,4};

// float = int = long = 4
double count = 123;

main() {
  int c = 0;
  printf("%s\n", names);

  printf("Enter your name:\n");

  //scanf("%s", myName);
  printf("size of %d bytes\n", sizeof(count));

  printf("The last character-%c- \n", myName[strlen(myName)-1]);

  while(myName[c]!= NULL) {
    printf("%-20.*s %20.*s\n", c, myName, strlen(myName) - c, myName);
    ++c;
  }
}