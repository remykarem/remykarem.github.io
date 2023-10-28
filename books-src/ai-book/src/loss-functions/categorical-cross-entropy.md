# Categorical cross entropy

$$ - \log \hat{y}^{(c)} $$

where $c$ is the class such that $y^{(c)}=1$.

$$ - \sum_{i=1}^N \log \hat{y}_i^{(c)} $$

where $c$ is the class such that, for sample $i$, $y_i^{(c)}=1$.

Example for one sample:

$$
    \text {cat\_cross\_entropy}\left(\left[\begin{array}{l}{0} \\ {0} \\ {1} \\ {0}\end{array}\right],
    \left[\begin{array}{l}{0.05} \\ {0.05} \\ {0.80} \\ {0.10}\end{array}\right]\right)=-\log (0.80)
    $$
For this section, $y$ and $\hat{y}$ are vectors where $y$ is one-hot and
    $\hat{y}$ is a vector of probabilities adding up to 1. The superscript with parentheses represent
    the element or class i.e. $y^{(i)}$ refers to the $i$th element (class)
    in vector $y$, defined similarly for $\hat{y}$.