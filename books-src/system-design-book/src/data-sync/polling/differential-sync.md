# Differential sync

The server provides the data that has changed:

* **Based on updated time in the request**

  aka delta query, change tracking

* **Since the last API call**
  
  ~~~admonish example title="Dropbox's delta API (deprecated)"
  Dropbox exposed a [Delta API](https://dropbox.tech/developers/using-dropboxs-delta-api-lessons-learned-from-site44).
  ~~~

  ~~~admonish note title="Dropbox migrated from differential sync to real-time updates"
  Dropbox migrated from Delta API (V1) to Webhooks (V2)
  ~~~

~~~admonish warning title="Deleting items"
If items can be deleted, a differential sync can become an issue.
~~~

See StackOverflow post on [How to sync data between two detached systems using rest API?](https://softwareengineering.stackexchange.com/a/370378)

## Problems

* If they call us, we cannot validate the request.
