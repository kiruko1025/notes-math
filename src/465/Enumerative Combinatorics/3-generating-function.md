# Generatung Functions

!!! definition
    A generating function is a formal power series in which the coefficients correspond to terms in a sequence.
    For a sequence $h_0, h_1, h_2, ...$, the generating function is given by:

    $$
    h(x) = h_0 + h_1 x + h_2 x^2 + h_3 x^3 + ... = \sum_{k=0}^{\infty} h_k x^k
    $$

# Weight Functions
Let $\alpha: A \to \mathbb{Z}_{\geq 0}$ be a weight function on the set $A$.

For each value of $k$, let $h_k$ be the number of elements $a \in A$ such that $\alpha(a) = k$.

The weighted generating function is given by:

$$
h(x) = \sum_{k} h_k x^k = \sum_{a \in A} x^{\alpha(a)}
$$

# Multiplication Principle

!!! theorem
    Let 

    $$
    \begin{align*}
        A &\leftrightarrow B \times C \times D \dots \\
        a &\leftrightarrow (b, c, d, \dots) \\
        \alpha(a) &= \beta(b) + \gamma(c) + \delta(d) + \dots
    \end{align*}
    $$

    Then

    $$
    \sum_{\alpha \in A} x^{\alpha(a)} = \left(\sum_{b \in B} x^{\beta(b)}\right) \left(\sum_{c \in C} x^{\gamma(c)}\right) \left(\sum_{d \in D} x^{\delta(d)}\right) \dots
    $$
    

# Permutation Statistics


## Counting Inversions
!!! theorem
    The generating function for the number of inversions in permutations of $[n]$ is given by:

    $$
    \sum_{\sigma \in S_n} x^{\text{inv}(\sigma)} = (1 + x)(1 + x + x^2)(1 + x + x^2 + x^3) \dots (1 + x + x^2 + ... + x^{n-1}) = \prod_{k=1}^{n} \frac{1 - x^k}{1 - x}
    $$
!!! proof
    TODO
!!! example
    TODO
## Counting Cycles
!!! theorem
    The generating function for the number of cycles in permutations of $[n]$ is given by:

    $$
    \sum_{\sigma \in S_n} x^{\text{cyc}(\sigma)} = x(x + 1)(x + 2) \dots (x + n - 1) = \prod_{k=0}^{n-1} (x + k)
    $$
!!! proof
    TODO

!!! example
    TODO