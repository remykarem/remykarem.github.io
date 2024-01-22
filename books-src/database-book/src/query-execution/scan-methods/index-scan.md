# Index scan

Use an index to find rows that match the query's condition.

1. Traverse the index structure to find the location of rows in the actual table.
2. Fetch the row(s) from the actual table
3. Return the row(s)
