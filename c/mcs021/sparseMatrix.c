#include <stdio.h>

int *a[5][5] = {
    {
        1 , 2 ,3
    },
    {
        0 , 1, 0,
    },
    {
        0, 0, 4
    }
};

int rows, cols;

void main() {
    printf("Enter square matrix size, rows and columns \n");
    scanf("%d %d", &rows, &cols);

    printf("Enter matrix values \n");

    for(int r = 0; r < rows; r++) {
        for(int c = 0; c < cols; c++) {
            scanf("%d", &a[r][c]);
        }
    }

    printf("Sparse Matrix is: \n");

      for(int r = 0; r < rows; r++) {
        for(int c = 0; c < cols; c++) {
            if (a[r][c] != 0) {
                printf("%d %d %d \n", r + 1, c + 1, a[r][c]);
            }
        }
      }

}
