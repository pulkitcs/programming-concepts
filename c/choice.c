#include <stdio.h>
#include <conio.h>

int a,b,c,d;

int main() {
  choice: {
  printf("enter 1 for add \n");
  printf("enter 2 for substract \n");
  printf("enter 3 for mulitply \n");
  printf("press 0 to exit \n");
  printf("enter your choice \n");

  scanf("%d", &c);

  
  switch (c) {
    case 1: {
      printf("Enter first and second number \n");
      scanf("%d %d", &a, &b);
      d = a +b;
      printf("The result %d\n", d);
      getch();
      goto choice;
      break;
    }
    case 2: {
      printf("Enter first and second number \n");
      scanf("%d %d", &a, &b);
      d = a - b;
      printf("The result %d\n", d);
      getch();
      goto choice;
       break;
    }
     case 3: {
      printf("Enter first and second number \n");
      scanf("%d  %d", &a, &b);
      d = a * b;
      printf("The result %d\n", d);
      getch();
      goto choice;
       break;
    }
     case 0: {
      return 0;
       break;
    }
    default: {
      goto choice;
       break;
    }
  }
  }
  return 0;

}