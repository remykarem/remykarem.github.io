# Data structures

Union

Similar to struct

typedef int Counter;

automatic vs. static variables

```c
void myFunc(void) {
	static int num = 0;
	num++;
}
```

```c
int grades[5] = {1,2,3,4,5};
int grades[5] = {[0]=1, [2]=3, [4]=5};
```

```c
struct Person {
	int height;
	int weight;
}
struct Person raimi;
raimi.height = 170;
raimi.weight = 60;
// OR
struct Person raimi = {.height=170, .weight=60};
```

```c
typedef struct {
	int height;
	int weight;
} Person;

Person raimi;
raimi.height = 170;
raimi.weight = 60;
// OR
Person raimi = {.height=170, .weight=60};
```

Linked list

```c
#include <stdio.h>
#include <stdlib.h>

struct Node_t
{
    int data;
    struct Node_t *next;
};

void traverse_all(struct Node_t* head) {
    struct Node_t* node = head;
    while (node != NULL) {
        printf("%d\n", node->data);
        node = node->next;
        if (node != NULL)
            printf("%p\n", node);
    }
}

int main()
{
    // Create data
    struct Node_t* node = (struct Node_t*) malloc(sizeof(struct Node_t));
    if (node == NULL)
        exit(1);
    node->data = 1;

    node->next = (struct Node_t*) malloc(sizeof(struct Node_t));
    if (node->next == NULL)
        exit(1);
    node->next->data = 5;

    node->next->next = (struct Node_t*) malloc(sizeof(struct Node_t));
    if (node->next->next == NULL)
        exit(1);
    node->next->next->data = 7;

    node->next->next->next = NULL;

    // Actions
    traverse_all(node);

    free(node);
    free(node->next);
    free(node->next->next);

    return 0;
}
```
