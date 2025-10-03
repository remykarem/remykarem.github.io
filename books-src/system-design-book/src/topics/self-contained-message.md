# Should messages be self-contained?

How much more "work" should the consumer be doing?

In the self-contained pattern:
* All essential values in the message
* _Minimal_ enrichment to hydrate data

|               | Self-contained                   | Not self-contained   |
|---------------|----------------------------------|----------------------|
| Coupling      | Decoupled; single responsibility | Tight coupling       |
| Latency       | No latency                       | Extra latency        |
| Reliability   | -                                | 1 more failure point |
| Replayability | No db lookups                    | Need to look up db   |
| Message size  | Limited[^limited]                | Small to begin with  |
| Duplication   | Duplicate data[^dup]             | No duplicate         |
| Staleness     | Might be stale when sent[^stale] | Always fresh         |

---

[^limited]: Large payloads to be stored elsewhere

[^dup]: Acceptable if it's small and stable and ephemeral

[^stale]: If ephemeral then it won't be an issue.
