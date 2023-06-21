# Batch processing

Batch processing can be useful for:

* **network latency**: You make one call instead of _n_ calls.
* **atomicity**: The all-or-nothing behaviour can help simplify error handling. 

Examples:

* [Elasticsearch Bulk API](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html)
* [Salesforce Bulk API](https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0.htm)
* [Microsoft Graph JSON batching](https://learn.microsoft.com/en-us/graph/json-batching)