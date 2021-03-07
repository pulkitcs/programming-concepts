#include <stdio.h>
#include <conio.h>

// int factorial = 1, counter = 1, num;
// int main() {
//   scanf("%d", &num);

//   while(counter<=num) {
//     factorial = factorial * counter;
//     ++counter;
//   }

//   printf("%d", factorial);

//   return 0;
// }

int t1 = 0;
int t2 = 1;
int nextItem = 0;
int end = 50;

int main() {
  while (nextItem < 50) {
   nextItem = t1+t2;
   t1 = t2;
    t2 = nextItem;

    printf("%d \n",nextItem);
  }

  getch();

  return 0;
}