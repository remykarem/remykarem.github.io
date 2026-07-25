# Taint analysis

source -> sanitizer -> sink

vulnerabilities happen when tainted data flows 
* from a data source
* to a sink
without proper sanitisation/validation in between.

Eg:
* XSS: user input (source) -> dangerouslySetInnetHtml (sink)
* Command injection: user input (source) -> exec() (sink)
