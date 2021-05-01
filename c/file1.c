#include <stdio.h>

FILE *fp1;
FILE *fp2;
char ch;

int main() {

  if ((fp1 = fopen("data1.dat", "r")) == NULL ) {
    printf("The file1 does not exist anymore");

    fclose(fp1);
    fclose(fp2);

    return 0;
  }

  if ((fp2 = fopen("data2.dat", "w")) == NULL ) {
    printf("Unable to write file");

    fclose(fp1);
    fclose(fp2);

    return 0;
  }

  while(!feof(fp1)) {
    ch = getc(fp1);
    putc(ch, fp2);
  }

  fclose(fp1);
  fclose(fp2);
  return 0;
}