# Consistency

**Every read request (across all nodes) returns the most recent write** ("immediate consistency")

Otherwise, the system will show different things.

In SQL databases, databases can achieve immediate consistency.

In NoSQL databases, achieving this is challenging due to delays and failures in communication between database nodes.
