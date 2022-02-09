#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct student {
	char name[10];
	int rollNo;
};
	
int main() {
		
	// Method 1, direct
	struct student vbps;
	vbps.rollNo = 23;
	printf("%d\n", vbps.rollNo); 
	
	// Method 2, using Pointers
	struct student* s;
	s = (struct student*)malloc(sizeof(struct student));
	
	// arrow notation required for Pointer
	s->rollNo = 61;
	strcpy(s->name, "Pulkit");
	printf("%d %s\n", s->rollNo, s->name); 
	
	return 0;
}
