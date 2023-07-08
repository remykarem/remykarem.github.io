# Arrays

- An array is stored in a contiguous block of memory
- Always passed to function by reference

`int vec[5];`

1. Allocate a block of memory that can hold 5 integers
2. Make `vec` point to the first element

`printf("%d", vec[2]);`

1. Look at the location pointed to by vec
2. Step two integers forward
3. Read the value

```c
int *vec = (int *) malloc(sizeof(int) * 3);
vec[0] = 1;
vec[1] = 3;
vec[2] = 9;
printf("%d", *(vec+2));
free(vec);
```
