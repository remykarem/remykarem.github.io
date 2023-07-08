# Multithreading

# Multithreading

<aside>
💡 On macOS, compile with `gcc-9 -Wall myfile.c -fopenmp`

</aside>

```c
#include <stdio.h>
#include <omp.h>
int main()
{
#pragma omp parallel
    {
        printf("Hello\n");     
    }
    return 0;
}
```

```
Hello
Hello
Hello
Hello
Hello
Hello
```

We can specify the no. of threads:

```c
#include <stdio.h>
#include <omp.h>
int main()
{
#pragma omp parallel num_threads(4)
    {
        printf("Hello\n");     
    }
    return 0;
}
```

exit: ⌘↩

```
Hello
Hello
Hello
Hello
```

Or get the no. of threads and thread ID while at it:

```c
#include <stdio.h>
#include <omp.h>
int main()
{
#pragma omp parallel
    {
        int id = omp_get_thread_num();
        int total = omp_get_num_threads();
        printf("Hello it's me from %d of the %d folks.\n",
            id, total);     
    }
    return 0;
}
```

```
Hello it's me from 2 of the 8 folks.
Hello it's me from 0 of the 8 folks.
Hello it's me from 5 of the 8 folks.
Hello it's me from 1 of the 8 folks.
Hello it's me from 4 of the 8 folks.
Hello it's me from 3 of the 8 folks.
Hello it's me from 6 of the 8 folks.
Hello it's me from 7 of the 8 folks.
```

An example where threads 'share' a variable:

```c
#include <stdio.h>
#include <omp.h>
int main()
{
	int sum = 0;
#pragma omp parallel
  {
     int id = omp_get_thread_num();
     sum += 5;
     printf("Thread %d: sum = %d\n", id, sum);     
  }
	
  return 0;
}
```

```
Thread 1: sum = 5
Thread 2: sum = 10
Thread 5: sum = 15
Thread 4: sum = 20
Thread 6: sum = 25
Thread 0: sum = 30
Thread 3: sum = 35
Thread 7: sum = 40
```

Automatic parallelisation of for-loop 😍:

```c
#include <stdio.h>
#include <omp.h>
int main()
{
	int arr[8] = {4, 6, 3, 7, 9, 9, 1, 2};
	int sum = 0;
#pragma omp parallel
	{
		int id = omp_get_thread_num();
		
#pragma omp for
		for (int i = 0; i < 8; ++i)
		{
			printf("Thread %d: arr[%d]=%d\n", id, i, arr[i]);
		}
	}
	return 0;
}
```

```
Thread 3: arr[3]=7
Thread 2: arr[2]=3
Thread 4: arr[4]=9
Thread 1: arr[1]=6
Thread 5: arr[5]=9
Thread 0: arr[0]=4
Thread 7: arr[7]=2
Thread 6: arr[6]=1
```

Let's see what happens if we ask each thread to read 2 elements at a time:

```c
#include <stdio.h>
#include <omp.h>
int main()
{
	int arr[16] = {4, 6, 3, 7, 9, 9, 1, 2,
								 3, 7, 0, 5, 1, 3, 8, 4};
#pragma omp parallel
	{
		int id = omp_get_thread_num();
		
#pragma omp for
		for (int i = 0; i < 16; ++i)
		{
			printf("Thread %d: arr[%d]=%d\n", id, i, arr[i]);
		}
	}
	return 0;
}
```

```
Thread 3: arr[6]=1
Thread 3: arr[7]=2
Thread 1: arr[2]=3
Thread 1: arr[3]=7
Thread 5: arr[10]=0
Thread 5: arr[11]=5
Thread 7: arr[14]=8
Thread 7: arr[15]=4
Thread 6: arr[12]=1
Thread 6: arr[13]=3
Thread 4: arr[8]=3
Thread 4: arr[9]=7
Thread 2: arr[4]=9
Thread 2: arr[5]=9
Thread 0: arr[0]=4
Thread 0: arr[1]=6‌
```

Let's sum this array while we're at it:

```c
#include <stdio.h>
#include <omp.h>
int main()
{
	int arr[16] = {4, 6, 3, 7, 9, 9, 1, 2,
								 3, 7, 0, 5, 1, 3, 8, 4};
	int sum = 0;
#pragma omp parallel
	{
		int id = omp_get_thread_num();
#pragma omp for
		for (int i = 0; i < 16; ++i)
		{
			printf("Thread %d: arr[%d]=%d\n", id, i, arr[i]);
			sum += arr[i];
			printf("Thread %d: sum=%d\n", id, sum);
		}
	}
	return 0;
}
```

```
Thread 0: arr[0]=4
Thread 0: sum=4
Thread 0: arr[1]=6
Thread 0: sum=10
Thread 2: arr[4]=9
Thread 4: arr[8]=3
Thread 2: sum=19
Thread 4: sum=22
Thread 4: arr[9]=7
Thread 1: arr[2]=3
Thread 1: sum=25
Thread 1: arr[3]=7
Thread 1: sum=32
Thread 4: sum=39
Thread 5: arr[10]=0
Thread 5: sum=39
Thread 2: arr[5]=9
Thread 2: sum=48
Thread 7: arr[14]=8
Thread 7: sum=56
Thread 5: arr[11]=5
Thread 3: arr[6]=1
Thread 3: sum=62
Thread 7: arr[15]=4
Thread 5: sum=61
Thread 7: sum=66
Thread 3: arr[7]=2
Thread 3: sum=68
Thread 6: arr[12]=1
Thread 6: sum=69
Thread 6: arr[13]=3
Thread 6: sum=72

```

Some kind of interleaving there naize. This is an example of **embarrassingly parallel**.
