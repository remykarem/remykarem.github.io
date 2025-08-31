# Chain of Responsibility

An input goes through multiple methods in series.

This treats an umbrella request using different specific methods, depending on the method does.

Keywords: series

~~~admonish example title="Spring Boot: FilterChain"
An HTTP request is passed through a series of filters ("filter chain") before rreaching the destination controller.

This is an example of the Chain of Responsibility pattern beacuase it allows the filterrs to be organised in a chain. Each filter has the ability to either handle the request or pass it along.

A common idiom is

```kotlin
chain.doFilter()
```
~~~

~~~admonish example title="Python"
```python
content_filter = ContentFilter([offensive_filter, ads_filter, porno_video_filter])
filtered_content = content_filter.filter(content)
```

```python
class ContentFilter(object):
    def __init__(self, filters=None):
        self._filters = list()
        if filters is not None:
            self._filters += filters

    def filter(self, content):
        for filter in self._filters:
            content = filter(content)
        return content
```
~~~
