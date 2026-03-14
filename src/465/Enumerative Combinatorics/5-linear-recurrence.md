# Linear Recurrence Relations
!!! example
    Solve $h_n = 5h_{n-1} - 6h_{n-2}$ with initial conditions $h_0 = 1$, $h_1 = 2$.

    Define a generating function:

    $$
    H(x) = \sum_{n=0}^{\infty} h_n x^n
    $$

    Substitute the recurrence relation:

    $$
    H(x) = h_0 + h_1 x + \sum_{n=2}^{\infty} (5h_{n-1} - 6h_{n-2}) x^n
    $$

    Simplify:

    $$
    H(x) = 1 + 2x + 5x(H(x) - 1) - 6x^2 H(x)
    $$

    Rearrange to isolate $H(x)$:

    $$
    H(x) = \frac{1-7x}{1 - 5x + 6x^2}
    $$

    Factor the denominator and perform partial fraction decomposition:

    $$
    H(x) = \frac{1-7x}{(1-2x)(1-3x)} = \frac{5}{1-2x} - \frac{4}{1-3x} = 5(1+2x+2^2x^2+\ldots) - 4(1+3x+3^2x^2+\ldots)
    $$

    Extract coefficients to find the closed form:

    $$
    h_n = 5 \cdot 2^n - 4 \cdot 3^n
    $$

## General Case
We want to solve linear recurrence relations with constant coefficients of the form:

$$
h_n + a_1 h_{n-1} + a_2 h_{n-2} + \ldots + a_k h_{n-k} = 0
$$

- $k$ is the order of the recurrence.
- $a_1, a_2, \ldots, a_k$ are constant coefficients.
- $a_k \neq 0$ WLOG
- $k$ initial values $h_0, h_1, \ldots, h_{k-1}$ are given.
- $n$ takes values of $k, k+1, k+2, \ldots$

## Characteristic Equation
For recurrence relation:

$$
h_n + a_1 h_{n-1} + a_2 h_{n-2} + \ldots + a_k h_{n-k} = 0
$$

the characteristic equation is obtained by substituting $h_n = q^n$:

$$
q^n + a_1 q^{n-1} + a_2 q^{n-2} + \ldots + a_k q^{n-k} = 0
$$

This simplifies to the polynomial equation:

$$
q^k + a_1 q^{k-1} + a_2 q^{k-2} + \ldots + a_k = 0
$$

## General Solution 
!!! theorem
    If the characteristic equation has distinct roots $q_1, q_2, \ldots, q_k$, then the general solution of the recurrence relation is given by:

    $$
    h_n = \sum_{i=1}^{k} c_i q_i^n
    $$

    where $c_1, c_2, \ldots, c_k$ are constants determined by the initial conditions.

## Formula for fibonacci numbers
The Fibonacci sequence is defined by the recurrence relation:
$$
F_n = F_{n-1} + F_{n-2}
$$
with initial conditions $F_0 = 0$ and $F_1 = 1$.

# Linear Recurrence Relations with Repeated Roots
If the characteristic equation has repeated roots, the general solution takes a different form.

For the characteristic equation:

$$
\sum_{i=0}^{k}} a_i q^i = 0
$$

Let $q_0 \neq 0$ be a root of multiplicity $m$ of the characteristic equation. Both $h_n=q_0^n$ and $h_n=n q_0^n$ are solutions to the homogeneous equation.

Then the general solution of the recurrence relation includes terms of the form:

$$
h_n = nq_0^n, n^2 q_0^n, \ldots, n^{m-1} q_0^n
$$

## Process
1. Find the characteristic equation.
2. Find the roots and their multiplicities.
3. For a root $q_i$ of multiplicity $m_i$, include terms $n^j q_i^n$ for $j=0, 1, \ldots, m_i-1$ in the general solution.
4. Combine all terms from all roots to form the general solution.
5. Use the initial conditions to solve for the constants in the general solution.
6. Write the final closed-form expression for $h_n$.


# Non-Homogeneous Linear Recurrence Relations
We want to solve linear recurrence relations with constant coefficients of the form:

$$
h_n + a_1 h_{n-1} + a_2 h_{n-2} + \ldots + a_k h_{n-k} = b_n
$$

Where $b_n$ is a fixed non-zero sequence of constants.

## General Solution
1. Find a particular solution $h_n^{(p)}$ to the non-homogeneous recurrence relation.
   
2. Add the general solution of the corresponding homogeneous recurrence relation $h_n^{(h)}$ to obtain the general solution of the non-homogeneous recurrence relation:
   
$$
h_n = h_n^{(h)} + h_n^{(p)}
$$