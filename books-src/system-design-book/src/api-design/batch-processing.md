# Batch API, processing

Ensure
* **Size of batch** — There's a min. and max. no. of items to process (see [Dropbox batch copy API](https://www.dropbox.com/developers/documentation/http/documentation#files-copy_batch)
* **Duplicates** — How to handle duplicates in the request?
* **Result mapping** — [Dropbox](https://www.dropbox.com/developers/documentation/http/documentation#files-copy_batch) replies with a status for every message

Batch processing can be useful for:

* **network latency**: You make one call instead of _n_ calls.
* **atomicity**: The all-or-nothing behaviour can help simplify error handling.

Additionally, batch processing can be done **asynchronously** like Dropbox's [/copy_batch API](https://www.dropbox.com/developers/documentation/http/documentation#files-copy_batch). This API may run synchronously or asynchronously. If the latter, the (asynchronous) job ID is returned immediately.

Examples:

* [Elasticsearch Bulk API](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html)
* [Salesforce Bulk API](https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0.htm)
* [Microsoft Graph JSON batching](https://learn.microsoft.com/en-us/graph/json-batching)
