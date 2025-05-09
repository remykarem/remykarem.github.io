# Slotted page

~~~admonish example title="Postgres"
Postgres uses the slotted page structure for its table and index pages.
~~~

Below is an example of slotted page `Page 7` with 3 slots corresponding to 3 different records.

```txt
Page 7

                0   4   8   12    ...       28
<start of page> +----------------------------------------------------+
                |   <somerecordA>           <somerecordB>            |
                +----------------------------------------------------+
                |           <somerecordC>                            |
                +----------------------------------------------------+
                |                                *                   |
                +----------------------------------------------------+
                |                                                    |
                +----------------------------------------------------+
                |     | <28,16> | <04,20> | <64,28> | 03 | 92 | 4096 |
                +----------------------------------------------------+  <end of page>
                           ^         ^         ^
                           |         |         |
                           slot      slot      slot
```

The numbers tell a story, if we read them backward from the end of the page:

* `4096` - the total page size in bytes
* `92` - offset to start writing into the free space, which starts from `*`
* `3` - total number of slots
* `<64,28>` - the location of a record located `64` bytes from the start of the page. This record is `28` bytes long.
* `<04,20>` - the location of a record located `04` bytes from the start of the page. This record is `20` bytes long.
* `<28,16>` - the location of a record located `28` bytes from the start of the page. This record is `16` bytes long.

The three different records and their corresponding record IDs and slots:

Record        | Record ID | Slot
--------------|-----------|----------
`somerecordA` | `(7,1)`   | `<04,20>`
`somerecordB` | `(7,2)`   | `<28,16>`
`somerecordC` | `(7,0)`   | `<64,28>`

In a slotted page, there are 2 directions where data is written:
1. Records are written downwards (from start to end of page)
2. Slots are written upwards (from end to start of page)
