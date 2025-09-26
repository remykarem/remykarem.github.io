# Types of consumers

|                          | Daemon / Always-on                    | Scheduled job        |
|--------------------------|---------------------------------------|----------------------|
| Resource footprint       | High                                  | Low                  |
| Stateful possibilities   | Can maintain caches etc.              | -                    |
| Operational overhead     | High; need monitoring, crash recovery | Low                  |
| Scalability              | Can scale horizontally                | Harder to auto-scale |
| Double-processing pitall | Nope                                  | Yes                  |

* Always-on consumers: Kafka/SQS daemons, HTTP servers (API endpoints, webhooks)
* Scheduled consumers: Cron/batch jobs
* Ephemeral consumers: Lambdas
