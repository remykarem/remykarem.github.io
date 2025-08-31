# Repository / Model

A Model represents data and the business logic.

It can also communicate with the database.

~~~admonish example title="Spring Boot"
Creating an interface that extends `JpaRepository<Customer, Long>`; Spring generates the implementation for you.
~~~
