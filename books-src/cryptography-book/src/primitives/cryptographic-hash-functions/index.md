# Cryptographic hash functions

This is a **deterministic operation**.

$$
\text{(message)} \rightarrow \text{digest}
$$

These functions should be
* collision-resistant — hash(m1) ≠ hash(m2)
* preimage-resistant — hard to find m given hash(m)

~~~admonish example title="File downloads"
It's common to check checksums when downloading files from websites. Anaconda uses [MD5](md5.md) to compare checksums.

[Here](https://anaconda.org/conda-forge/boto3/files) is an example of the usage of checksum for boto3 package which is an AWS client (click on the (i) icon).
~~~
