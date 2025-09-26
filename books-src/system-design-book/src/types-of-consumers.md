# Types of consumers

|                          | Daemon / Always-on                    | Scheduled job        |
|--------------------------|---------------------------------------|----------------------|
| Resource footprint       | High                                  | Low                  |
| Stateful possibilities   | Can maintain caches etc.              | -                    |
| Operational overhead     | High; need monitoring, crash recovery | Low                  |
| Scalability              | Can scale horizontally                | Harder to auto-scale |
| Double-processing pitall | Nope                                  | Yes                  |
