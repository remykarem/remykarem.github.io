# Recursion

Making recursive calls is like making use of a stack data structure.

This is because many programming languages are stack-based (citation needed).

## How to think about recursion?

### Managing states

Global states can be managed via side effects. 

Handling of states between function calls:
Local states can be
* returned -- useful when "bubbling up"
* passed in -- useful when following together with the traversal

Apart from passing in nodes, you can also pass other things/nodes. 

### Where do side effects happen?

At every stack? At the leaf?

### Traversal order

This might matter in some trees like BST for efficiency (eg. short circuiting). 

It can also play a part in looking for aggregates like mode, grouping duplicates together etc.
