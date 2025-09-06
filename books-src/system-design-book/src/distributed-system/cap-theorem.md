# CAP theorem

from Brewer, formalised by Gilbert and Lynch[^cap]

The CAP theorem states that any distributed store can provide _at most 2_ of the following guarantees[^capwiki]:

* Consistency — Every read receives the most recent write or an error.
 
    ~~~admonish note title="Disambiguation with ACID"
    This definition _differs_ from consistency in ACID.
    ~~~

* Availability — every request received by a non-failing node in the system must result in a response.

* Partition tolerance — The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.

References:
* [Let's Consign CAP to the Cabinet of Curiosities](https://brooker.co.za/blog/2024/07/25/cap-again.html) by Marc Brooker

---

[^cap]: [Brewer's Conjecture and the Feasability of Consistency, Availability and Partition-Tolerant Web Services](https://users.ece.cmu.edu/~adrian/731-sp04/readings/GL-cap.pdf)
[^capwiki]: [Wikipedia: CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem)