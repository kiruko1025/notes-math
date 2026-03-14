---
title: Counting
---

# Counting

Golden rule: count everything exactly once.

# Addition Principle
If $S = S_1 \sqcup S_2$, then $|S| = |S_1| + |S_2|$.

# Multiplication Principle
If $S = S_1 \times S_2$, then $|S| = |S_1| \cdot |S_2|$.

!!! example
    How many rectangles are in an $m \times n$ grid?

    A rectangle is determined by choosing 2 horizontal lines and 2 vertical lines.
    There are $m+1$ horizontal lines and $n+1$ vertical lines.
    So the number of rectangles is $\binom{m+1}{2} \cdot \binom{n+1}{2}$.

# Counting Permutations
The number of ways to arrange $n$ distinct objects in a sequence is $n!$

!!! proof
    There are $n$ choices for the first position, $n-1$ for the second, ..., 1 for the last.
    By the multiplication principle, the total number of arrangements is $n!$.

# Division Principle

If there is a $k$-to-1 mapping from $S$ to $T$, then $|T| = \frac{|S|}{k}$.

!!! example
    How many diagonals are in a n-gon?
    Each vertices has $n-3$ diagonals (not counting the two adjacent edges and itself).
    We counted each diagonal twice (once from each endpoint).
    So the number of diagonals is $\frac{n(n-3)}{2}$

!!! example
    How many ways are there to seat $n$ people around a round table?
    We can think of this as arranging $n$ people in a line and then joining the ends.
    Each circular arrangement corresponds to $n$ linear arrangements (one for each person at the "front" of the line).
    So the number of circular arrangements is $\frac{n!}{n} = (n-1)!$.

# Subtraction Principle
If $S_1 \subseteq S_2$, then $|S_2 \ S_1| = |S_2| - |S_1|$.

!!! example
    How many ways are there to arrange $n$ people in a line so that two specific people are not next to each other?
    Total arrangements: $n!$
    Arrangements with the two specific people together: treat them as a single unit, so there are $(n-1)!$ arrangements, and they can be arranged in 2 ways within the unit.
    So the number of arrangements where they are not together is $n! - 2(n-1)! = (n-2)(n-1)!$.

# Counting Words
Theorem:
    The number of $k$ letter words from an $n$ letter alphabet is $n^k$.

Theorem:
    A k-element set has $2^k$ subsets.

Theorem:
    For an n-element alphabet, there are $n!/(n-k)!$ k-letter words with no repeated letters.

!!! example:
    A boolean function has $k$ binary inputs and $l$ binary outputs.
    How many such functions are there?
    There are $2^k$ possible inputs.
    Each input can map to $2^l$ possible outputs.
    So there are $(2^l)^{2^k} = 2^{l \cdot 2^k}$ such functions.