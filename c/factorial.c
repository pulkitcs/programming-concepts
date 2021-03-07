#include <stdio.h>

/*
void calculate(int limit) {
  int factorial = 1;

  for (int i = 1; i <= limit; i++) {
    printf("%d\n",factorial*=i);
  }

  printf("%d", factorial);
}

int main() {
  int limit = 5;

  calculate(limit);
  return 0;
}
*/

int factorial = 1, counter = 1, num;
int main() {
  scanf("%d", &num);

  while(counter<=num) {
    factorial = factorial * counter;
    ++counter;
  }

  printf("%d", factorial);

  return 0;
}
