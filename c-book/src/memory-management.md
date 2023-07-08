# Memory management

## Dynamic memory

Boilerplate

```c
#include <stdlib.h>

int main() {

	// Allocate
	int *p;
	p = (int*)malloc(3 * sizeof(*p));

	// If memory cannot be allocated
  if (p == NULL)                     
      exit(1);

	// Deallocate
	free(p);

	return 0;
}
```

Others include `aligned_alloc`.

## **Memory leak**

Improper usage of dynamic memory

```c
int main() {
	int a;
	int *p;
	p = (int*)malloc(sizeof(int));
	*p = 10;
	p = (int*)malloc(sizeof(int));
	*p = 20;
	return;
}
```

"Segmentation fault" means that the program tried to access invalid address in memory. Operating system prevents this, and terminates program immediately.
