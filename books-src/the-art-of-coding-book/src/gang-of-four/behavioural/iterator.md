# Iterator

An iterator pattern performs traversal and gives access to data, but it (though ironically) **does not perform iteration via an incrementing counter**, and using it as an index.

~~~admonish example title="Example: Python"

```python
for num in [1, 2, 3]:
    print(num)
```
~~~

~~~admonish failure title="Counter-example: Java"

```java
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}
```
~~~
