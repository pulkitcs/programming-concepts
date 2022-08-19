#include <stdio.h>

void main() {
    int *a[3][3] = {
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

    int *c = 10;

    printf("%d \n", a[2][2]);
    printf("%d", c) ;
}
