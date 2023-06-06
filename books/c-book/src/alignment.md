# Alignment

```c
float arr[1048576] __attribute__ ((aligned (2048)));
```

such that address is divisible by 2048. usually used by simd instructions.

```c
int *p;
p = (int *)aligned_alloc(2048, 3 * sizeof(*p));
```
