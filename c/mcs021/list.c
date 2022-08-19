#include <stdio.h>

#define MAX 10

typedef struct {
 int list[MAX];
 int count;
} list;

void create(list *ll);
void insert(list *ll, int start, int number);
void traverse(list *ll);

// Method for writing the create function;
void create(list *ll) {
    int total = 5;
    printf("Enter the values for list \n");

    for(int i = 0; i < total; i++) {
        scanf("%d", &ll->list[i]);
    }

    ll->count = total;
}

// Method for reading values from the list
void traverse(list *ll) {
    printf("Traversing the elements of the list \n");
    for(int i = 0; i < ll->count; i++) {
        printf("%d ", ll->list[i]);
    }

    printf("\n");
}

// Method for inserting value to the list;
void insert(list *ll, int start, int value) {
    if(ll->count == MAX) {
        printf("list is full, please delete values before inserting \n");
        return;
    } else if (start > ll->count) {
        printf("Insert index cannot be more than %d \n", ll->count);
    }else if (start < 0) {
        printf("Insert index cannot be less than 0 \n");
    }

    int navigate = ll->count;

    while(navigate > start) {
        ll->list[navigate] = ll -> list[navigate - 1];
        --navigate;
    }

    ll->list[start] = value;
    ++ll->count;
}

void delete(list *ll, int position) {
    int start = position;
    while (start <= (ll->count - 1)) {
        ll->list[start] = ll->list[start + 1];
        ++start;
    }

    ll->count = ll->count - 1;
}

void main() {
    list l;
    create(&l);

    traverse(&l);

    printf("Enter the position and number \n");

    int number, position;

    scanf("%d %d", &position, &number);
    insert(&l, position, number);

    traverse(&l);

    printf("Delete element in list \n");

    scanf("%d", &position);

    delete(&l, position);

    traverse(&l);
}
