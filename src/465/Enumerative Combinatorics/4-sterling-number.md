# Stirling Number of First Kind
The Stirling number of the first kind counts the number of permutations of $n$ elements with exactly $k$ disjoint cycles.

## Signless
The signless Stirling number of the first kind $c(n, k)$ is the number of permutations of $n$ elements with exactly $k$ disjoint cycles. With $c(w)$ denoting the number of cycles in a permutation $w$, we have: 

$$
c(n, k) = \#\{w \in S_n : \text{c}(w) = k\}
$$

## Recurrence

$$
c(n, k) = c(n-1, k-1) + (n-1) c(n-1, k)
$$

!!! proof
    TODO

## Signed
The signed Stirling number of the first kind $s(n, k)$ is defined as:

$$
s(n, k) = (-1)^{n-k} c(n, k)
$$

## Expand Falling Powers to Ordinary Powers

# Stirling Number of Second Kind
The Stirling number of the second kind counts the number of ways to partition a set of $n$ elements into $k$ non-empty subsets.

$$
S(n, k) = \#\{\text{partitions of } [n] \text{ into } k \text{ non-empty subsets}\}
$$

## Recurrence

$$
S(n, k) = k S(n-1, k) + S(n-1, k-1)
$$
!!! proof
    TODO


## Expand Ordinary Powers to Falling Powers

$$
x^n = \sum_{k=0}^{n} S(n, k) k! \binom{x}{k}
$$
!!! proof
    TODO

!!! example
    TODO