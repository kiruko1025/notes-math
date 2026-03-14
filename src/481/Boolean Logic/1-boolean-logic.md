---
title: Boolean Logic
---

# Boolean Logic

## Well-formed Formula (wff)

Wffs are defined recursively:
1. Any atomic proposition is a wff.
2. If P and Q are wffs, then ¬P (not P), (P ∧ Q) (P and Q), (P ∨ Q) (P or Q), and (P → Q) (P implies Q) are also wffs.
3. Nothing else is a wff.

**Induction Principle**:
    If $S$ is a set  a set of wffs containing all the sentence symbols and closed under all five formula-building operations, then S is the set of all wffs.


## Syntax
The context free grammar of Boolean wffs is defined recursively:

$$
\begin{aligned}
\mathrm{wff} &::= P \mid \neg \mathrm{wff} \mid (\mathrm{wff} \land \mathrm{wff}) \mid (\mathrm{wff} \lor \mathrm{wff}) \mid (\mathrm{wff} \to \mathrm{wff}) \mid (\mathrm{wff} \leftrightarrow \mathrm{wff}) \\
             &::= \text{letter} \mid \top \mid \bot
\end{aligned}
$$


The grammar is **unambiguous**, which means there is only one way to form a wff from simpler wffs.


Prefix:
    the initial sub sequence. 


## Semantics
A truth assignment is a function $v$ that assigns a truth value (T or F) to each atomic proposition.

We can extend $v$ to $\bar{v}$, which assigns truth values to all wffs with recursive definitions:

It must satisfy:
- $\bar{v}(P) = T$ if $\bar{v}(P) = T$
- $\bar{v}(P\rightarrow Q) = T$ if $\bar{v}(P) = F$ or $\bar{v}(Q) = T$

Same for other symbols:
$\neg$ (negation)
$\land$ (and)
$\lor$ (or)
$\rightarrow$ (implies)
$\leftrightarrow$ (if and only if)

We can make all five symbols using only $\neg$ and $\lor$, or only $\neg$ and $\land$.
But not only $\lor$ and $\land$. Since they are both monotonic.
Monotonic Function:
    Changing a variable from F to T cannot change the value of the function from T to F.

## Parsing
A parsing tree is a tree that shows how a wff is built from atomic propositions using logical connectives.

**Theorem**:
    For any truth assignment $v$ for a set S there is a unique function $\bar{v} : S \to \{F, T \}$ meeting the aforementioned conditions 0–5. (the parsing tree is unique)

!!! note "proof"

How to form a parsing tree:
    TODO