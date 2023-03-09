# Supervised learning

Specifically for deep learning:

Given a labelled training dataset

$$
(\boldsymbol{x}_1,y_1), (\boldsymbol{x}_2,y_2), ..., (\boldsymbol{x}_N,y_N),
$$

minimise the objective function

$$
\arg \min_{\boldsymbol{\theta}} \frac{1}{N} \sum_{i=1}^N \mathcal{L}(f(\boldsymbol{x}_i; \boldsymbol{\theta}),y_i) + \lambda \Omega (x_i)
$$

where $\Omega$ is the regularisation term.