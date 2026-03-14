# Inclusion-Exclusion Principle

For a finite set $S$, let $A_1, A_2, \ldots, A_r$ be subsets of $S$. How many elements are in the union $A_1 \cup A_2 \cup \ldots \cup A_r$? Can't just add unless they are disjoint.

## r=2

!!! Theorem
    For two sets $A$ and $B$,

    $$
    |A \cup B| = |A| + |B| - |A \cap B|.
    $$

## r=3
!!! Theorem
    For three sets $A$, $B$, and $C$,

    $$
    |A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|.
    $$

## General Case
!!! Theorem
    For any finite collection of sets $A_1, A_2, \ldots, A_r$,

    $$
    \left| \bigcup_{i=1}^{r} A_i \right| = \sum_{i=1}^{r} (-1)^{i+1} \left( \sum_{1 \leq i_1 < i_2 < \ldots < i_k \leq r} |A_{i_1} \cap A_{i_2} \cap \ldots \cap A_{i_k}| \right).
    $$

    If $\left A_{i_1}, A_{i_2}, \ldots, A_{i_k} \right$ doesn't depend on the choice of indices, and only depend on $k$, then:

    $$
    \sum_{i=1}^{r }(-1)^{i-1} \binom{r}{i} \left | A_{1} \cap A_{2} \cap \ldots \cap A_{i} \right|.
    $$
    
    
**Proof.** 
 $s \in S$, verify that $s$ is counted same number of times on both sides. 

 1. If $s$ is in none of the $A_i$, then both sides are 0.
 2. If $s$ is in exactly one of the $A_i$, then both count once on LHS. $s$ is not in any intersections, so RHS counts once.
 3. If $s$ in exactly $n$ of the subsets. Then LHS counts once. RHS counts $n$ times in the first sum, $-\binom{n}{2}$ times in the second sum, $+\binom{n}{3}$ times in the third sum, etc. So the total is:
   
   $$
   n-\binom{n}{2}+\binom{n}{3}-\ldots+(-1)^{n-1}\binom{n}{n} = \sum_{i=1}^{n} (-1)^{i-1} \binom{n}{i} = 1
   $$

   We solve this through binomial theorem, just move $\binom{n}{0} = 1$ to the other side.
   
 $\ged$ 


# Applications

## Lattice Path 

Find the number of ways to go from $(0,0)$ to $(6,6)$, avoiding $(2,2)$ or $(3,4)$.

1. Total ways from $(0,0)$ to $(6,6)$: $\binom{12}{6}$.
2. Ways through $(2,2)$: $\left A_1 \right = \binom{4}{2} \binom{8}{4}$.
3. Ways through $(3,4)$: $\left A_2 \right = \binom{7}{3} \binom{5}{4}$.
4. Ways through both: $\left A_3 \right = \binom{4}{2} \binom{3}{1} \binom{5}{3}$.

Using inclusion-exclusion:

$$
\binom{12}{6} - \binom{4}{2} \binom{8}{4} - \binom{7}{3} \binom{5}{4} + \binom{4}{2} \binom{3}{1} \binom{5}{3} = 334
$$

## 0/1 Matrices with no Zero Rows or Columns

How many $m \times n$ 0/1 matrices are there with no zero rows or columns?

1. Total $m \times n$ 0/1 matrices with at least one 1 in every row: $(2^n - 1)^m$.
2. Exactly $i$ columns with all 0s: $|A_i| = (2^{n-i} - 1)^m$.
3. The intersection of $A_i$s: $|A_{i_1} \cap A_{i_2} \cap \ldots \cap A_{i_k}| = (2^{n-k} - 1)^m$.

Total number of matrices with no zero rows or columns:
$$
|S| - |A_1 \cup A_2 \cup \ldots \cup A_n| = \sum_{i=0}^{n} (-1)^i \binom{n}{i} (2^{n-i} - 1)^m
$$

# Euler Phi Function
The Euler phi function $\varphi(n)$ is the number of integers from $1$ to $n$ that are coprime to $n$. If $n = p_1^{k_1} p_2^{k_2} \ldots p_r^{k_r}$, then:
$$
\varphi(n) = n \left( 1 - \frac{1}{p_1} \right) \left( 1 - \frac{1}{p_2} \right) \ldots \left( 1 - \frac{1}{p_r} \right).
$$
    **Proof.** 
Using inclusion exclusion principle $\ged$ 

