# JPA

Java Persistence API

[JSR-338](https://jcp.org/en/jsr/detail?id=338), [JSR-317](https://jcp.org/en/jsr/detail?id=317), [JSR-220](https://jcp.org/en/jsr/detail?id=220)

JPA is a specification for ORM in Java. This specification is defined as a set of interfaces.

Interfaces that are part of the specs:

* **Entities and relationships**
  
  `@Entity`, `@Table`, `@Id`, `@GeneratedValue`, `@Column`, `@ManyToOne`, `@OneToMany`, `@ManyToMany`, `@OneToOne`

* **Querying**

  `@Query`

* **Persistence context**

  `EntityManager`, `EntityManagerFactory`

```admonish note title="Connection pool management"
Connection pool management is typically not directly handled by JPA itself but by the underlying JPA provider.
```
