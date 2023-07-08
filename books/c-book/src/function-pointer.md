# Function pointer

```c
#include <stdio.h>

void func(int a) {
	printf("Hey %d\n", a);
}

int main() {
	void (*fnptr)(int);
	fnptr = &func; // or void (*func)(int);
	(*fnptr)(100);
	return 0;
}
```
