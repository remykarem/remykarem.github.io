# Pure functions

Two characteristics of a pure function:

- **Deterministic**

    Given a fixed set of inputs, the outputs will _always_ be the same.

- **No side effects**

    Calling the function does not change the state of the program _outside the function_. This includes writing to the console, reading or writing files, modifying the database. (Fierce...)

    ~~~admonish question title="Is it also 'bad' if it's a private function?"
    Probably, because other parts of the class might accidentally use the wrong function, resulting in unintended side effects.
    ~~~
