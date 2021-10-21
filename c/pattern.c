#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int length;
int n;

int calc(int rowCol) {
    return rowCol < n ? n - rowCol : 2*n - (length - 1) - (n - rowCol);
}

int main() 
{
    scanf("%d", &n);
    // Complete the code to print the pattern.
    
    //define
    length = 2*n - 1;
    
    // Loop for column
    for (int row = 0; row < length; row++) {
        // Loop for row
        for(int col = 0; col < length; col++) {
            int num = calc(col) >= calc(row) ? calc(col) : calc(row);
            
            col == length - 1 ? printf("%d\n", num) : printf("%d ", num);
        }
    }
}
