#include <stdio.h>

int num;
int counter = 2;

int main() {
  scanf("%d", &num);

  while(counter < (num - 1)) {
    if (num % counter == 0) {
      printf("this is not a prime number");
      return 0;
    }

    ++counter;
  }

  printf("this is a prime number \a");
 return 0; 
}