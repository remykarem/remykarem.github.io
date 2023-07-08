# Decision tree

**#nonparametric** **#nonprobabilistic**

Keep splitting, split based on highest Gini Gain or Information Gain.

> 💡 Gini impurity is a way of measuring if a split is "good". Calculate Gini impurities (1) before split, (2) left branch and (3) right branch. Then weight the impurities of each branch (2) and (3). Then calculate how much impurity is removed by taking (1) minus the weighted (2) and (3).

Try every split:

- Every feature
- Every possible threshold (optimisable)

Stop when:

- All Gini gains are the same
- No Gini gain

Algorithms:

- ID3 (multiway)
    - Brute force
- C4.5 (binary)
    - Brute force
- CART
    - Construct binary trees from using features and thresholds that yield highest information gain

> 👉 Tree-based algorithms don’t require scaling!
