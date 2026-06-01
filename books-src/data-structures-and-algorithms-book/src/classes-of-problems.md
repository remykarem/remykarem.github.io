# Classes of problems

Decision problem: a problem with a yes or no answer.

---

|  | Time complexity | Verification complexity | Example |
| --- | --- | --- | --- |
| P problems | Polynomial^ | Polynomial |  |
| NP problems | ? | Polynomial | Sudoku |

polynomial = can be done by computer

## Definitions

A problem is “complete” for a *class* if it is the **hardest** possible member of that class, it represents the entire class.

- Polynomial

In the context of P and NP, both problems are **decision problems**. 

## Analogy

**Problem** = how to open a locked room

**solution** = key

**solving** (time complexity) = find/create the key. if key need many people to work on it still okay (polynomial). if key need like a company or what then 

**verifying** (verify complexity) = ensure the key can open the room

- involves carrying the key to the room (maybe it’s a big key). if weight of key is m kg, and i need k people to carry, it’s linear. if i need k^2 people it’s polynomial

## NP-complete problems

A problem X (in NP) is NP-complete if every problem in NP **reduces** to X.

the reducability property is probably owed to two problems being *mathematically* linked.

~~~admonish tip title=”Analogy”

Imagine a building with 100 locked rooms. 

Problem = how can I open a locked room

Solution = key

Solving = finding the key to this room

Verifying = try to open the door using the key

There are 100 problems.

Now, I can try to solve all the 100 problems.

But if I can open a *special* room (which has keys to some other rooms), then solving the problem of that room itself is an NP-complete problem.

Now, there can be several of these special rooms, then

NP-complete problem = how can I open a special locked room

solving an NP-complete problem = Finding its key

~~~

~~~admonish tip title=“Mental model”

Identifying a problem as similar to another (already solved problem) has its benefits in real life. You might have already solved it. 

Two problems can be the same problem in disguised because one can be **reduced** to another. 

~~~

## NP-hard

- Might be outside NP
- Every NP

~~~admonish

There is a special room that might be **outside the building**. That has keys to some rooms. 

NP-hard problem = how can i open this room

Solving = find the key. Might be hard cos key could be anywhere

Verify = try the key

~~~

## P = NP

Is solving always as easy as verifying?

If trying a key is fast, is finding also as fast?

---

Problems:
* Solvable in polynomial time
* Not solvable in polynomial time

# **P**

**polynomial time**

Class of problems that can be solved by an algorithm in polynomial time

# **NP**

**nondeterministic polynomial time**

If I have unlimited compute power, I am capable of solving any problem in at most polynomial time.

Their solutions can be verified within polynomial time. “Easy to check but hard to crack.”

- **NP-complete problems**
    
    A subset of problems $X$ in NP for which it is possible to reduce any other NP problem $Y$ to $X$ in polynomial time.
    
    i.e. if we know how to solve $X$ quickly, then we can solve $Y$.
    
    A class of computational problems where an effifecint algorithm solution has yet to be found
    

# **NP-hard**

There exists no polynomial time algorithm to verify a solution to such problems. Eg. chess

| Problem | Verifiable in P time | Solvable in P time |
| --- | --- | --- |
| P | ✅ | ✅ |
| NP | ✅ | * |
| NP-Complete | ✅ | Unknown |
| NP-Hard | ^ | Unknown |

* if P, then ✅

^ if NP-Complete, then ✅
