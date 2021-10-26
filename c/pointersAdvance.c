#include <stdio.h>
#define Max 5

int main() {
	int arr[Max] = { 0, 4,5,-1, 7};
	int *start, *end;
	
	for (int i = 0; i < (Max / 2); i++) {
		int temp;
		start = &arr[i];
		end = &arr[(Max - 1) - i];
		
		//printf("%d %d\n", *start, *end);
		
		temp = *start;
		*start = *end;
		*end = temp;
		
	}
	
	printf("%d %d %d %d %d", arr[0], arr[1], arr[2], arr[3], arr[4]);
	return 0;
}
