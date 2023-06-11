# Library

### **Create a dynamic library**

At runtime, we’ll delay start up to perform some memory mapping early on in the process start (performed by the dynamic linker) and pay slight costs for trampolining into position independent code.

1. Create a shared object (must be .c!)
    
    **`gcc -shared -fpic add.c subtract.c multiply.c -o libops.dylib`**
    
2. Dynamically link
    
    **`gcc main.c libadd.dylib`**
    
    Create an object file
    
    **`gcc -o add.o -c add.c`**
    
    **`gcc -shared -o libadd.so add.o`**

A library is a file that contains object files and data. They allow for fast compilation times.

- Static library
    - Linked into a compiled executable (code is ‘locked’ in binary)
- Shared library / dynamic library
    - Loaded by executable at runtime. Examples of the file formats are .dylib, .dll and .so files.
