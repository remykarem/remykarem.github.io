# Depth-first

Worst-case: $O(|V| + |E|)$

Used with a **stack**.

- Pre-order
- In-order (left to right)
- Post-order (bottom to top?)
Here: D, F, E, B, C, A

```mermaid
graph TD
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
```

```mermaid
graph TD
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
    style A fill:#a9a9a9,stroke:#333,stroke-width:2px
```

```mermaid
graph TD
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
    style A fill:#a9a9a9,stroke:#333,stroke-width:2px
    style B fill:#a9a9a9,stroke:#333,stroke-width:2px
```

```mermaid
graph TD
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
    style A fill:#a9a9a9,stroke:#333,stroke-width:2px
    style B fill:#a9a9a9,stroke:#333,stroke-width:2px
    style D fill:#f9d71c,stroke:#333,stroke-width:2px
```

```mermaid
graph TD;
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
    style A fill:#a9a9a9,stroke:#333,stroke-width:2px
    style B fill:#a9a9a9,stroke:#333,stroke-width:2px
    style D fill:#f9d71c,stroke:#333,stroke-width:2px
    style B fill:#f9d71c,stroke:#333,stroke-width:2px
```

```mermaid
graph TD;
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
    style A fill:#a9a9a9,stroke:#333,stroke-width:2px
    style B fill:#a9a9a9,stroke:#333,stroke-width:2px
    style D fill:#f9d71c,stroke:#333,stroke-width:2px
    style B fill:#f9d71c,stroke:#333,stroke-width:2px
    style E fill:#f9d71c,stroke:#333,stroke-width:2px
```

```mermaid
graph TD;
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
    style A fill:#a9a9a9,stroke:#333,stroke-width:2px
    style B fill:#a9a9a9,stroke:#333,stroke-width:2px
    style D fill:#f9d71c,stroke:#333,stroke-width:2px
    style B fill:#f9d71c,stroke:#333,stroke-width:2px
    style E fill:#f9d71c,stroke:#333,stroke-width:2px
    style A fill:#f9d71c,stroke:#333,stroke-width:2px
```

<style>
    svg.inactive {
        display: none;
    }
</style>

<button id="backButton">Back</button>
<button id="nextButton">Next</button>
