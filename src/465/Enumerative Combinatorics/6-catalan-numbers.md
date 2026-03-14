# Catalan Numbers

The Catalan numbers are defined by the formula:

$$
C_n = \frac{1}{n+1} \binom{2n}{n} = \frac{(2n)!}{(n+1)!n!} = \frac{1}{2n+1} \binom{2n+1}{n}
$$

!!! Theorem
    The number of ways to arrange $n+1$ + and $n$ - signs up to rotation is the $n$th Catalan number $C_n$.

!!! Proof
    TODO
## Ballot Sequence
A ballot sequence is a sequence of + and - signs such that in every prefix, the number of + signs is at least the number of - signs.

!!! Theorem
    The number of ballot sequences with $n$ + signs and $n$ - signs is the $n$th Catalan number $C_n$.
    TODO

# Dyck Paths

A Dyck path of length $2n$ is a lattice path from $(0,0)$ to $(2n,0)$ using steps $(1,1)$ (up) and $(1,-1)$ (down) that never goes below the x-axis.

# recurrence relation for Catalan numbers

!!! Theorem
    The Catalan numbers satisfy the recurrence relation:

    $$
    C_0 = 1, \quad C_{n+1} = \sum_{i=0}^{n} C_i C_{n-i} \quad \text{for } n \geq 0.
    $$

**Proof.** 
 $\ged$ 

# Generating Function for Catalan Numbers
The generating function for the Catalan numbers is given by:

$$
C(x) = \sum_{n=0}^{\infty} C_n x^n = \frac{1 - \sqrt{1 - 4x}}{2x}.
$$

**Proof.** 
 $\ged$ 

# Applications of Catalan Numbers

## Triangulation of convex polygons

## Rooted Trees

## Bracketing
!!! Theorem
    The number of syntactically correct bracketings of $n+1$ factors is the $n$th Catalan number $C_n$. (need to specify the order of operation)

*Proof.*

The parse tree for a bracketing of $n+1$ factors is a bijection to a complete binary tree with $n+1$ leaves (or $n$ internal nodes). The number of such binary trees is the $n$th Catalan number $C_n$. $\ged$

Find a bijection between bracketings and ballot sequences? 


# Bijection between Catalan objects