# Dates

## Unix timestamp

No. of seconds elapsed since Unix epoch, i.e. 1 Jan 1970 UTC.

## POSIX timestamp

No. of seconds elapsed since Unix epoch, i.e. 1 Jan 1970 UTC, ignoring leap seconds (?).

## [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3)

* `Tue, 1 Jul 2003 10:52:37 +0200`

## [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and ISO 8601

1.	Date and Time in UTC (Coordinated Universal Time):

    `2024-01-19T15:20:30Z`

2.	Date and Time with an Offset from UTC:

    `2024-01-19T10:20:30-05:00`

3.	Fractional Seconds:

    `2024-01-19T15:20:30.123Z`

4.	Only Date:

    `2024-01-19`

5.	Only Time:

    `15:20:30Z`, `01:20:30+08:00`

## ISO 8601 only

* `15:20:30`

```admonish note
RFC 3339 includes a subset of ISO 8601 and contains some of its own standards.
```

References:
[RFC 3339 vs. ISO 8601](https://ijmacd.github.io/rfc3339-iso8601/)
