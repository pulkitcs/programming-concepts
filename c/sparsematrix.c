#include <stdio.h>
#define MAX 5


int main() {
	int rows, cols;
	int matrix[MAX][MAX];
	int nonZero = 0;
	
	printf("Enter the dimentions of the array\n");
	scanf("%d %d", &rows, &cols);
	
	printf("Enter the fields of the matrix\n");
	
	for(int i = 0; i < rows; ++i) {
		for(int n = 0; n < cols; ++n) {
			scanf("%d", &matrix[i][n]);
			if (matrix[i][n] != 0)
				++nonZero;
		}
	}
	
	printf("The 3 tuple presentation is \n");
	
	// Not needed
	//printf("%d %d %d\n", rows, cols, nonZero);
	
	for(int i=0; i<rows; ++i) {
		for(int n = 0; n < cols; ++n) {
			if(matrix[i][n]!=0) {
				printf("%d %d %d\n", (i+1), n+1, matrix[i][n]);
			}
		}
	}
	return 0;
}
