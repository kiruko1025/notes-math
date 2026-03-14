# Multinomial Coefficients
!!! theorem
    For an alphabet with $k$ letters, the number of words with $n_1$ of letter 1, $n_2$ of letter 2, ..., $n_k$ of letter $k$ (where $n_1 + n_2 + ... + n_k = n$) is given by the multinomial coefficient:

    $$
    \frac{n!}{n_1! n_2! ... n_k!}
    $$

!!! corollary
    The number of ways to partition a set of $n$ elements into $k$ subsets of sizes $n_1, n_2, ..., n_k$ is given by the multinomial coefficient (the elements in each subset are not ordered)

!!! proof
    Consider the number of ways to arrange $n$ elements in a sequence. There are $n!$ ways to do this.
    However, within each subset of size $n_i$, the elements can be arranged in $n_i!$ ways, which we do not want to count separately since the order within subsets does not matter.
    Therefore, we divide by the product of the factorials of the sizes of the subsets.

!!! theorem
    $$
    \binom{n}{n_1, n_2, \ldots, n_k} = \frac{n!}{n_1! n_2! ... n_k!} = \binom{n}{n_1} \binom{n-n_1}{n_2} \cdots \binom{n - n_1 - n_2 - ... - n_{k-1}}{n_k}
    $$
!!! proof
    We can choose $n_1$ elements from $n$ in $\binom{n}{n_1}$ ways.
    Then, we have $n - n_1$ elements left, from which we can choose $n_2$ in $\binom{n - n_1}{n_2}$ ways.
    Continuing this process, we eventually choose all subsets.
    By the multiplication principle, we multiply these binomial coefficients together to get the total number of ways to partition the set.

## Multinomial theorem

!!! theorem
    $$
    (x_1 + x_2 + ... + x_k)^n = \sum_{n_1 + n_2 + ... + n_k = n} \binom{n}{n_1, n_2, ..., n_k} x_1^{n_1} x_2^{n_2} ... x_k^{n_k}
    $$


# Binomial Coefficients
!!! theorem
    The number of ways to choose $k$ elements from a set of $n$ elements (where order does not matter) is given by the binomial coefficient:

    $$
    \binom{n}{k} = \frac{n!}{k!(n-k)!}
    $$

It's multinomial coefficient with 2 subsets: $n_1 = k, n_2 = n-k$.

## Binomial Identities
Symmetry:

$$
\binom{n}{k} = \binom{n}{n-k}
$$

Pascal's Identity:

$$
\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}
$$

!!! proof
    Think of choosing a committee of size $k$ from $n$ people.
    Consider one specific person, Alice.
    There are two cases:
    1. Alice is on the committee. Then we need to choose the remaining $k-1$ members from the remaining $n-1$ people, which can be done in $\binom{n-1}{k-1}$ ways.
    2. Alice is not on the committee. Then we need to choose all $k$ members from the remaining $n-1$ people, which can be done in $\binom{n-1}{k}$ ways

Sum of all subsets: 

$$
\sum_{k=0}^{n} \binom{n}{k} = 2^n
$$

Sum of all subsets of even size and odd size:

$$
\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - ... = 0
$$
!!! proof
    Fix a element $x$ in the set of $n$ elements.
    Toggle $x$ in each subset.
    This gives a bijection between even-sized subsets and odd-sized subsets.

Sum of all subsets weighted by size:

$$
\sum_{k=0}^{n} k\binom{n}{k} = n \cdot 2^{n-1}
$$
!!! proof
    We choose a committee of size $k$ from $n$ people and then choose a president from the committee.
    We can do this in two ways:
    1. Choose the committee first: There are $\binom{n}{k}$ ways to choose the committee and $k$ ways to choose the president, for a total of $\sum_{k=0}^{n} k\binom{n}{k}$ ways.
    2. Choose the president first: There are $n$ ways to choose the president and $2^{n-1}$ ways to choose the rest of the committee (each of the remaining $n-1$ people can either be in the committee or not), for a total of $n \cdot 2^{n-1}$ ways.
!!! proof 2
    We can prove this using the binomial theorem. Take the derivative of both sides of the binomial theorem:
    $$
    Taking the derivative with respect to $x$ gives:
    $$
    n(x + y)^{n-1} = \sum_{k=1}^{n} k \binom{n}{k} x^{k-1} y^{n-k}
    $$
    Setting $x = 1$ and $y = 1$ gives:
    $$
    n \cdot 2^{n-1} = \sum_{k=1}^{n} k \binom{n}{k}
    $$

Vandermonde's Identity:

$$
\sum_{k} \binom{n}{k}\binom{m}{l-k} = \binom{n+m}{l}
$$

!!! Corollary
    $$
    \sum_{k=0}^{n} \binom{n}{k}^2 = \binom{2n}{n}
    $$
!!! proof:
    TODO

## Binomial theorem
!!! theorem
    $$
    (x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}
    $$
!!! proof
    When we expand $(x + y)^n$, each term in the expansion is formed by choosing either $x$ or $y$ from each of the $n$ factors.
    To get a term of the form $x^k y^{n-k}$, we must choose $x$ from exactly $k$ of the factors and $y$ from the remaining $n-k$ factors.
    The number of ways to choose which $k$ factors contribute an $x$ is given by the binomial coefficient $\binom{n}{k}$.

# Hockey Stick Identity
!!! theorem
    $$
    \sum_{i=r}^{n} \binom{i}{r} = \binom{n+1}{r+1}
    $$
!!! proof
    TODO

# Composition

Positive integer solution to $x_1 + x_2 + ... + x_k = n$ is $\binom{n-1}{k-1}$.

Weak composition - nonnegative integer solution.

Terminology: "compositions of n into k parts".

## Counting weak compositions
!!! theorem
    The number of weak compositions of $n$ into $k$ parts is $\binom{n+k-1}{k-1}$.
!!! proof
    We can think of this as placing $k-1$ dividers among $n$ stars (representing the units being summed).
    There are a total of $n + k - 1$ positions (the $n$ stars and the $k-1$ dividers).
    We need to choose $k-1$ positions for the dividers, which can be done in $\binom{n+k-1}{k-1}$ ways.


## Counting positive compositions
!!! theorem
    The number of positive compositions of $n$ into $k$ parts is $\binom{n-1}{k-1}$.


# Generalized Binomial theorem

Definition:
    For $\alpha$ a complex number and $k$ a nonnegative integer, define the generalized binomial coefficient:
    $$
    \binom{\alpha}{k} = \frac{\alpha(\alpha-1)(\alpha-2)...(\alpha-k+1)}{k!}
    $$

!!! note "theorem (Newton)"
    For any complex number $\alpha$,
    $$
    (x + y)^{\alpha} = \sum_{k=0}^{\infty} \binom{\alpha}{k} x^k y^{\alpha-k}
    $$
    Holds whenever it make sense.

In particular it holds when:
    1. $\alpha$ is a integer
    2. $x+y$ and $y$ are positive real numbers.
    3. In the ring of formal power series.

!!! proof
    TODO

!!! example
    TODO