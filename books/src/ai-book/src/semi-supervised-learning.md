# Semi-supervised learning

Specifically for deep learning:

Given a labelled training dataset

$$
(\boldsymbol{x}_1,y_1), (\boldsymbol{x}_2,y_2), ..., (\boldsymbol{x}_N,y_N),
$$

and another unlabelled dataset

$$
\boldsymbol{z}_1, \boldsymbol{z}_2, ..., \boldsymbol{z}_m,
$$

minimise the objective function

$$
\arg \min_{\boldsymbol{\theta}} \frac{1}{N} \sum_{i=1}^N \mathcal{L}(f(\boldsymbol{x}_i; \boldsymbol{\theta}),y_i) + \sum_i^m \mathcal{L'}(\boldsymbol{z_i}, R') + \lambda \Omega (x_i)
$$

where

* \\( \Omega \\) is the regularisation term 
* \\( R' \\) defines the targets for unlabelled data

> Good for small amount of data and large amount of unlabelled data.
