# Collections


`asSequence`  generator, lazy evaluate, `generateSequence`, `sequenceOf`, `sequence`, `yield`, `yieldAll`. use terminal operations like `toList()` or `sum()` to evaluate.


> ⚠️ Sequence performs all the processing steps **one-by-one**!


> ⚠️ Some overhead!


- Array
    
    Egs: Array, IntArray, CharArray, DoubleArray
    
    - Data in arrays are stored in a sequential manner
    - Size is determined
    - fixed size elements
    - Cannot reassign (invariant)
- List
    
    Read-only
    
    - `List`
    Default implementation: ArrayList
    - `ArrayList`
    Resizable array
    
    M**utable**
    
    - `MutableList`
- Set
    
    Read-only
    
    - `Set`
    Default implementation: LinkedHashSet
    - `HashSet`
    Less memory, order not preserved
    - `LinkedHashSet`
    preserves order of elements insertion
    
    M**utable**
    
    - `MutableSet`
- Map
    
    Read-only
    
    - `Map`
    Default implementation: LinkedHashMap
    - `HashMap`
    Less memory, order not preserved
    - `LinkedHashMap`
    preserves order of elements insertion
    
    M**utable**
    
    - `MutableMap`
