# Bernoulli

Say in an experiment (eg. coin toss) you observe *two* outcomes \\( x=\{0,1\} \\).

Set the probability of seeing "1" (usually the positive outcome) to \\( 0.8 \\).

Accordingly, this follows that probability of seeing "0" is \\( 1-0.8=0.2 \\). 

This means that

$$ P(X=1) = 0.8 $$

and

$$ P(X=0) = 0.2 $$

can be rewritten as

$$ 
P(X=x) = 
\begin{cases}
{0.8} & {x=1} \\\\ 
{0.2} & {x=0} 
\end{cases}
$$

which can be rewritten as

$$ P(X=x) = (0.8)^x (0.2)^{1-x} $$

## Definition

$$ P(X=x) = p^x(1-p)^{1-x} $$

where $p$ is the probability of the positive outcome.

* 1 trial
* 2 outcomes
    * 1 of the outcomes ("success") has probability $p$

## Uses

Modelling the outcome of a coin toss.

## Relation to other distributions

* What happens if you have $n$ trials where only the last is a success?
* What happens if you have $n$ trials, $k$ of which are successes?
* What happens if you have $K$ different outcomes?
