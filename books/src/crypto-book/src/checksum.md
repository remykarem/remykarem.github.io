# Checksum

The goal of checksum is to verify integrity.

* `shasum`
* `md5`
* `openssl md5`

    ```
    echo -n "hello" | openssl md5
    ```

It's common to check checksums when downloading files from websites. Anaconda uses [MD5](md5.md) to compare checksums. [Here](https://anaconda.org/conda-forge/boto3/files) is an example of the usage of checksum for boto3 package which is an AWS client (click on the (i) icon).

> 💡 Take note of the newlines at the end of files
