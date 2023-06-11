# Build

![Compilation process](https://www3.ntu.edu.sg/home/ehchua/programming/cpp/images/GCC_CompilationProcess.png)

# Build tools

- CMake + Makefile
    
    `CMakeLists.txt`
    
    ```cpp
    cmake_minimum_required(VERSION 3.1.0)
    
    project(hello)
    
    add_executable(hello helloworld.cpp)
    ```
    
    `helloworld.cpp`
    
    ```cpp
    #include<iostream>
     
    int main(int argc, char *argv[]){
       std::cout << "Hello World!" << std::endl;
       return 0;
    }
    ```
    
    ```bash
    $ cmake .
    $ make
    $ ./hello
    ```
    
- Makefile
- Gradle

# Compilers

- Clang
    
    Uses LLVM compiler infrastructure
    
    ```
    clang main.c
    	-o          path to output
    	-E          preprocess
    	-S          preprocess + compile
    	-c          preprocess + compile + assemble
    ```
    
- GCC (GNU Compiler Collection)
    
    ```
    gcc main.c
    	-o          path to output
    	-E          preprocess
    	-S          preprocess + compile
    	-c          preprocess + compile + assemble
    	
    	-I<dir>     include path. default is **/usr/local/include**
    	-L<dir>     directory to search for libraries
    	-l<hello>   search for libhello.dylib in /usr/local/lib or /usr/local/include ?
    
    	-W<warning> enable specified warning eg. -Wall
    	-D<name>    macro for preprocessor
    	-f<flag>
    	-O1
    	-O2
    	-O3
    	-g          debugging
    	-v          verbose
    	-framework  Accelerate (macOS)
      -m<option>  x86 options. see [here](https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html). eg -mavx2, ...
    ```
    
    Flags
    
    `C_INCLUDE_PATH`
    
    `CPPFLAGS` for C/C++ preprocessor eg. CPPFLAGS="-I..."
    
    `CFLAGS` for C compiler eg. CFLAGS=""
    
    `CXXFLAGS` for C++ compiler eg. CXXFLAGS=
    
    `LDFLAGS` for linker eg. LDFLAGS="-L..."
    
    `cpp -v` to list the default include-paths
