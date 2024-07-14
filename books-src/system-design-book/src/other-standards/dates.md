# Dates

## Unix timestamp

aka Unix time, POSIX time, Unix epoch time, POSIX timestamp

No. of seconds^ elapsed since Unix epoch, i.e. 1 Jan 1970 UTC.

^Unix timestamp supports seconds, milliseconds, microseconds and nanoseconds.

## ISO 8601 and [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6)

```admonish note
ISO 8601 and RFC 3339 are separate standards but have overlapping conventions.
```

1.	Date and Time in UTC (Coordinated Universal Time):

    `2024-01-19T15:20:30Z`, `2024-01-19T15:20:30.123Z` (fractional)

2.	Date and Time with an Offset from UTC:

    `2024-01-19T10:20:30-05:00`

3.	Only Date (without any information about time zone):

    `2024-01-19`

4.	Only Time (without any information about time zone):

    `15:20:30Z`, `01:20:30+08:00`

References:
[RFC 3339 vs. ISO 8601](https://ijmacd.github.io/rfc3339-iso8601/)

## Timezone

tz database aka IANA time zone database

Eg. `Asia/Singapore`
