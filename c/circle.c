#include <stdio.h>

int radius;
const float pi = 3.14;

int main() {
  printf("Enter radius: \n");

  scanf("%d", &radius);

  float circumference = radius*2*pi;
  float area = pi * pi * radius;


  printf("the circumference: %f \n", (float)circumference);
  printf("the area: %f \n", (float)area);

  return 0;
}