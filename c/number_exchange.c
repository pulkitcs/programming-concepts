#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int a, b, sum;
int *c, *d;

int main(int argc, char *argv[]) {
	a = 5;
	b = 10;
	sum = a + b;
	
	//printf("before %d, %d \n", a, b);
		
	b = sum - b;
	a = sum - a;
	
	//printf("after %d, %d \n", a, b);
	//printf("after values %d, %d \n", a, b, c);
	// Stores address localtion
	//*c = a + b;
	
	printf("the sum %d \n", a);
	
	return 0;
}
