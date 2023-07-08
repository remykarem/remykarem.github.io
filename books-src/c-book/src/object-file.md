# Object file / machine code

**Object file formats**

File formats for executable files, object code, shared libraries, core dumps

- Mach-O (Mach object)
- ELF (Executable and Linkable Format)
- a.out (obsolete)

Any executable file format contains these sections:

1. Standard header: description
2. BSS: storage space of uninitialised globals
3. Code
4. Data / “Text”
    
    __TEXT,__text
    
    executable machine code. Contains main()
    
    __TEXT,__stubs
    
    used in __text. external dependencies
    
    __TEXT,__stub_helper
    
    for dynamic linker (dyld)
    
    __TEXT,__cstring
    
    string literals
    
    Symbols... virtual address 0x100000e10 to 0x100000ff4
    
    addresses...
