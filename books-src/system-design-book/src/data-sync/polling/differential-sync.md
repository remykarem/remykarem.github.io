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

See StackOverflow [post](https://softwareengineering.stackexchange.com/a/370378)
