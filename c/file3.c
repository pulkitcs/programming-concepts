#include <stdio.h>
#include <conio.h>
#include <process.h>

#define AR_SIZE 80

int main() {
  FILE *fp;
  char datas[AR_SIZE];
  int count = 0;

  fp = fopen("data1.dat", "r");

  if (fp == NULL) 
  {
    printf("Error File Not Found");
    return 0;
  }

  while(!feof(fp)) {
    fgets(datas, AR_SIZE, fp);
    ++count;
  }

  printf("%s", datas);
  printf("\nthe number of lines, %d", count);

  fclose(fp);
  return 0; 
}