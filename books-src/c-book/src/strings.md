# Strings

\0 as last character (null terminated). Null termination is implicit in a string literal.

```c
char C[] = "JOHN";
char C[20] = "JOHN";
char C[] = { 'h', 'i', '\0'};
```

```c
// String gets stored as compile time constant
char *C = “Hello”;
```

Points to note:

- stringA is pointer to a string constant that cannot be modified
- stringA and stringB have ‘\0’ implicitly added at the end

```c
char c;
char string[256];
char sentence[256];

scanf("%c\n", &c);
scanf("%s\n", string);
scanf("%[^\n]%*c", sentence);

printf("%c\n", c);
printf("%s\n", string);
printf("%s\n", sentence);
```

Pointer vs array

```c
int main(int argc, char *argv[])
	for (int i = 1; i < argc; i++)
		printf(“%s\n”, argv[i]);
```
