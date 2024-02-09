# Linking

Link → `.exe`

The linker combines object files and _libraries_ into an executable or library.

The linker resolves references to external symbols (eg. variables or functions) defined in other objects or libraries.

The `/lib` folder contains these libraries.

To specify the folder,

```sh
export LDFLAGS="-L/somedirectory/lib"
```

## Example to manually link

1. Create library
    
    `adding.cpp`
    
    ```cpp
    int main(int a, int b) {
    	return a + b;
    }
    ```
    
    `adding.hpp`
    
    ```cpp
    int main(int, int);
    ```
    
    → adding.cpp
    
    → adding.hpp
    
2. Create objects for library
    
    ```
    clang++ -c adding.cpp
    ``` 
    
    → adding.o
    
3. Archive object file
    
    ```
    ar rvs libadding.a adding.o
    ``` 
    
    → libadding.a
    
4. Create object file for main program
    
    `main.cpp`:
    
    ```cpp
    #include <iostream>
    #include "adding.h"
    
    int main() {
    	cout << add(8, 7);
    	return 0;
    }
    ```
    
    → main.cpp
    
5. Compile main program

    ```
    clang++ -o main.o -c main.cpp
    ``` 
    
    → main.o
    
6. Statically link
    
    ```
    clang++ -o main main.o -L. -ladding
    ```  
    
    → main
