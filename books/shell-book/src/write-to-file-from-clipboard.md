# Write to file from clipboard

Some ways you can do it

* Use heredocs.

    ```sh
    cat <<EOF > output.txt
    text context
    text context
    text context
    EOF
    ```

* Use macOS's `pbpaste` and process substitution.

    ```sh
    pbpaste > output.txt
    ```

* Open an editor and paste in the file

    Plain ol' boring way
