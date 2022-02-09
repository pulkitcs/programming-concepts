#include <stdio.h>

int main() {
	int *x, a[10];
	
	x = a;
	//x[5] = 100;
	
	*(x+7) = 100;
	
	for(int i=0; i < 10; i++) {
		printf("%d %d\n", i,  a[i]);
	}
	return 0;
}
