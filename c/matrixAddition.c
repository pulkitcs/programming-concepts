#include <stdio.h>

#define ARRAY_SIZE 3

int arr1[ARRAY_SIZE][ARRAY_SIZE], arr2[ARRAY_SIZE][ARRAY_SIZE];

int main() {
 printf("Enter Values for matrix 1 \n");

 for(int i = 0; i < ARRAY_SIZE; i++) {
   for(int n= 0; n < ARRAY_SIZE; n++){
     printf("Enter number for row: %d, column: %d \n",i + 1,n + 1);
     scanf("%d", &arr1[i][n]);
   }
 }

 printf("Enter Values for matrix 2 \n");

 for(int i = 0; i < ARRAY_SIZE; i++) {
   for(int n= 0; n < ARRAY_SIZE; n++){
     printf("Enter number for row: %d, column: %d \n",i + 1,n + 1);
     scanf("%d", &arr2[i][n]);
   }
 }

 printf("Adding Matrix A + B \n");

 for(int i = 0; i < ARRAY_SIZE; i++) {
   for(int n= 0; n < ARRAY_SIZE; n++){
     arr1[i][n] =  arr1[i][n] + arr2[i][n];

    if(n == (ARRAY_SIZE - 1)) {
      printf("%d\n", arr1[i][n]);
    } else {
      printf("%d ", arr1[i][n]);
    }
   }
 }

 return 0;
}