#include <stdio.h>
#include <stdlib.h>

void increment(int a) {
	a++;
}

void pointerIncrement(int* a) {
	(*a)++;
}

int main() {
	printf("This does work\n");
	
	// Example 1
	int* p;
	int num = 5;
	p = &num;
	
	printf("%d\n", *p);
	
	// Example 2
	int num1 = 10;
	increment(num1);
	
	// Value does not change
	printf("%d\n", num1);
	
	// Example 2.1
	int num2 = 10;
	
	printf("value before increment = %d \n", num2);
	
	pointerIncrement(&num2);
	
	// Value does change and increments
	printf("value after increment = %d \n", num2);
	
	// Example 3.0
	// Type casting
	float a = (float)1;
	
	printf("%f\n", a);
	
	int mem = 5;
	int* pm;
	
	pm = (int*)malloc(mem*sizeof(int));
	
	for(int ii = 0; ii < mem; ii++)
		pm[ii] = ii;
		
	for(int aa = 0; aa < mem; aa++)
		printf("%d", pm[aa]);
		
	free(pm);
	
	return 0;
}
