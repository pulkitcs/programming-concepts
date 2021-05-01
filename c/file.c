#include "stdio.h"

int main() {
  FILE *fp;

  fp = fopen("Data.dat", "r");

  if (fp == NULL) {
    printf("This file does not exist");
  }
  
  return 0;
}