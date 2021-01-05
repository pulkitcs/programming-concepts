#include <stdio.h>
#include <conio.h>

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