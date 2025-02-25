# Probability Review

In this chapter, we review some basics definitions in Probability. This chapter serves as a refresher on probability definitions.

Based on [Axioms of Probability Theory](https://en.wikipedia.org/wiki/Probability_axioms) let's define a few terms. 

## Fundamentals

---

### Sample Space $S$

- The set of all possible outcomes of a random experiment.
- Examples:
  - Tossing a coin: $ S = \{H, T\} $
  - Rolling a six-sided die: $ S = \{1,2,3,4,5,6\} $

### Event $E$

- A subset of the sample space containing specific outcomes.

- Examples:
  - Rolling an even number: $ E = \{2,4,6\} $

### Probability of an event $P(E)$

```{admonition} Prob of an event
:class: no-title

The relative frequency that a specific outcome (event) would be obtained if a experiment is performed a large number of times.
- $ 0 \leq P(E) \leq 1 $
- $ P(S) = 1 $
- $ P(\emptyset) = 0 $
    
```

Let's understand $P(E)$ a little better with examples:

For a sample space with $k$ possible outcomes, if each outcome $k_i$ is considered to be an event **and if each event $E(k_i)$ is equally likely**, then the probability of each event $P(k_i)$ is given by:

$$
P(k_i) = 1/k
$$

This is also known as **Uniform Probability** and such an experiment is usually termed as an **unbiased experiment**.


However, its important to note that in most experiments, not all events are equally likely. Consider the following examples:

1. Unbiased coin with two events
   - For a coin flip experiment, we have two events, namely, event where heads occurs,  and event where tails occurs after the flip. If both events are equally likely, from the above definition of uniform probability, we calculate that:

    $$ P(Heads) = P(Tails) = 0.5 $$

2. Biased coin with two events
   - However, consider a **biased coin** (may be a bent or deformed coin) where the events of heads and tails are not equally likely. In that case, how do we calculate the probability of an event?
  





```{admonition} Conditional Probability $P(A \mid B)$
:class: note
The probability of an event $ A $ given that another event $ B $ has occurred is denoted as $ P(A \mid B) $ and is defined as:


$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$

provided that $ P(B) > 0 $.

```