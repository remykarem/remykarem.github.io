# Caching

* HTTP header expiration time

"**Backend storage**", "**cache**"

Common caching strategies / consistency strategies:

* Write-Through Cache — write to both backend storage annd cache
* Write-Around Cache — write to backend storage only
* Write-Back Cache — write to cache, and write to backend storage asynchronously
* Read-Through Cache — if in cache, return, else retrieve from db then write to cache then return
* Cache-Aside
* Eventual Consistency

Common eviction strategies:

* Least Recently Used
* Most Recently Used
* Least Frequently Used
* Random Replacement
* First In, First Out
* Time To Live
