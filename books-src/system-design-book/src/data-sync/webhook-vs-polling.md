# Webhook vs. polling

|                        | Webhook         | Polling / REST API |
|------------------------|-----------------|--------------------|
| Resource               | Fewer resources | A lot of resources |
| Near real-time updates | Yes             | No                 |
| Loss of events         | Events are retried and usually persisted thereafter | Client might miss them due to incorrect request or missed call; persistence is overridden etc. |

References:
* [GitHub: Choosing webhooks or the REST API](https://docs.github.com/en/webhooks/about-webhooks#choosing-webhooks-or-the-rest-api)

