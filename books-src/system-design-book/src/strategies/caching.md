# Caching

* HTTP header expiration time

"**Backend storage**", "**cache**"

~~~admonish tip title="Use case"
Good for read-heavy workloads.
~~~

Common caching strategies / consistency strategies:

* Write-Through Cache — write to both backend storage annd cache
* Write-Around Cache — write to backend storage only
* Write-Back Cache — write to cache, and write to backend storage asynchronously
* Read-Through Cache — if in cache, return, else retrieve from db then write to cache then return
* Cache-Aside
* Eventual Consistency

## Expiration policy

How long should data stay in the cache?

## Eviction policy

If there's not enough memory, which data should go first?

* Least Recently Used
* Most Recently Used
* Least Frequently Used
* Random Replacement
* First In, First Out
* Time To Live
