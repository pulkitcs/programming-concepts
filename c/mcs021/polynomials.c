#include <stdio.h>
//#include <stdlib.h>

void main() {
    int term1 = 5;
    int term2 = 4;
    int poly1[5][2] = {{1, 2}, {2, 4}, {3, 6}, {1, 8}, {5, 7}};
    int poly2[4][2] = {{5,2}, {6,9}, {3,6}, {5,7}};
    int match, proceed, i, j;

//    printf("Enter the number of terms in the first polynomial, they should be less than 6 \n");
//    scanf("%d", &term1);
//
//    printf("Enter the number of terms in the first polynomial, they should be less than 6 \n");
//    scanf("%d", &term2);
//
//    printf("Enter the coefficient and exponent of each term of the first polynomial \n");
//
//    for(i = 0; i < term1; i++) {
//        scanf("%d %d", &poly1[i][0], &poly1[i][1]);
//    }
//
//    printf("Enter the coefficient and exponent of each term of the second polynomial \n");
//
//    for(i = 0; i < term2; i++) {
//        scanf("%d %d", &poly2[i][0], &poly2[i][1]);
//    }

    printf("The resultant polynomial due to the addition of the input of two polynomials \n");

    //printf("Getting the common elements");

    for(i=0; i < term1; i++) {
        for(j=0; j < term2; j++) {
            if(poly1[i][1] == poly2[j][1]) {
                // common element found;
                // 0 index is coefficient
                // 1 is the exponent
                int sum = poly1[i][0] + poly2[j][0];
                printf("%d %d\n", sum, poly1[i][1]);
            }
        }
    }

    //printf("Getting uncommon elements for poly1 \n");

     for(i=0; i < term1; i++) {
        proceed = 1;
        for(j=0; j < term2; j++) {
            if(proceed == 1) {
                if(poly1[i][1] == poly2[j][1]) {
                    proceed = 0;
                }
            }
        }

        if(proceed == 1) {
         printf("%d %d\n", poly1[i][0], poly1[i][1]);
        }
    }

    //printf("Getting uncommon elements for poly2 \n");

     for(i=0; i < term2; i++) {
        proceed = 1;
        for(j=0; j < term1; j++) {
            if(proceed == 1) {
                if(poly2[i][1] == poly1[j][1]) {
                    proceed = 0;
                }
            }
        }

        if(proceed == 1) {
         printf("%d %d\n", poly2[i][0], poly2[i][1]);
        }
    }


    //getch();
    return;
}
