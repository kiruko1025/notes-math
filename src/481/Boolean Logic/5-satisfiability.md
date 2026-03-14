# Satisfiable
A set of wffs $\Sigma$ is satisfiable if there is a truth assignment that satisfies every member of $\Sigma$.

# Resolution
A resolution step takes two clauses, one containing a literal and the other containing its negation,
and produces a new clause containing all the literals of the two clauses except for the resolved literal and its negation.

!!! example
    From $(A \lor B)$ and $(\neg A \lor C)$, we can resolve on $A$ to get $(B \lor C)$.
    From $(A \lor B)$ and $(\neg B \lor C)$, we can resolve on $B$ to get $(A \lor C)$.
    From $(A \lor B)$ and $(\neg A \lor \neg B)$, we can resolve on $A$ to get $(B \lor \neg B)$, which is a tautology.

# 2 SAT
A 2SAT instance is a 2-cnf: an AND of ORs of one or two literals. A literal is either a variable or its negation.

!!! example
    $(x_1 \lor \neg x_2) \land (\neg x_1 \lor x_3) \land (x_2 \lor x_3)$ is a 2SAT instance.
## Efficient algorithm for 2SAT

1. Construct the implication graph.
2. Find strongly connected components (SCCs).
3. Check for contradictions: if both $x$ and $\neg x$ are in the same SCC, the formula is unsatisfiable.
4. If no contradictions, assign truth values based on the SCCs.

# 3 SAT

!!! example
    $(x_1 \lor \neg x_2 \lor x_4) \land (\neg x_1 \lor x_3 \lor x_5) \land (x_2 \lor x_3 \lor \neg x_4)$ is a 3SAT instance.

## A Randomized algorithms can satisfy $7/8$ of the clauses in polynomial time.
!!! note
    - Any 3-CNF is $7/8$ satisfiable.
    - Any <= 7-clause CNF is satisfiable. 

Assign $x=T, \neg x = F$ or $x=F, \neg x = T$ uniformaly at random.

Random variable: 
$\begin{align}
    X_i &=
    \begin{cases}
        1 & \text{if clause } i \text{ is satisfied} \\
        0 & \text{otherwise}
    \end{cases}
\end{align}$

$$
\begin{align}
    E[X_i] &= 1 \cdot P(X_i = 1) + 0 \cdot P(X_i = 0) = \frac{7}{8}\\
    X &= \sum_{i=1}^{m} X_i = \text{# of satisfied clauses of m clauses}\\
    E[X] &= E[\sum_{i=1}^{m} X_i] = \sum_{i=1}^{m} E[X_i] = \frac{7}{8}m
\end{align}
$$

## Derandomize this algorithm

Assign T or F to variables consistently.

Find $E[\text{# of satisfied clauses} | x_i = T]$ & $E[\text{# of satisfied clauses} | x_i = F]$.

more than one of them must be $\geq 7/8 m$.

Set $x_i= $ T or F for whichever is larger.

Repeat for all variables.