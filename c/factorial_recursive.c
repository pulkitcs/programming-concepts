#include <stdio.h>

int interate(int currentNumber, int total) {
  return total*=currentNumber;
}

int calculate(int limit, int factorial) {
  factorial = interate(limit, factorial);

  // printf("the values %d %d \n", limit, factorial);

  if (limit > 1) {
    return calculate(--limit, factorial);
  }else {
      return factorial;
  }
}

main() {
  int limit;
  
  printf("Please enter a number ");
  scanf("%d", &limit);
  printf("%d", calculate(limit, 1));
}