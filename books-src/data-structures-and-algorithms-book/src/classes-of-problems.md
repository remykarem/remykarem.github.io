# Classes of problems

Decision problem: a problem with a yes or no answer.

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
