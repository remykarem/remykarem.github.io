# Differential sync
  
## By updated time

Polling

aka delta query, change tracking

## Since last call

Requires polling
  
~~~admonish example title="Dropbox's delta API (deprecated)"
Dropbox exposed a [Delta API](https://dropbox.tech/developers/using-dropboxs-delta-api-lessons-learned-from-site44).
~~~

## Real-time updates

~~~admonish tip title="Dropbox migrated from differential sync to real-time updates"
Dropbox migrated from Delta API (V1) to Webhooks (V2)
~~~
