#include <stdio.h>
#include <conio.h>

int main() {
	int *width;
	width = (int*)malloc(sizeof(int));
	*width = 35;
	
	printf("data stored in %d \n", *width);
	printf("address of width is %p \n", &width);
	printf("address stored at width %p \n", width);
	
	return 0;
}
