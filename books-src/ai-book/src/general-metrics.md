# AUC

[https://towardsdatascience.com/understanding-auc-roc-curve-68b2303cc9c5](https://towardsdatascience.com/understanding-auc-roc-curve-68b2303cc9c5)

[https://towardsdatascience.com/an-interesting-and-intuitive-view-of-auc-5f6498d87328](https://towardsdatascience.com/an-interesting-and-intuitive-view-of-auc-5f6498d87328)

AUC is a ranking metric. What matters is the score order, not the score value itself.

- How much a model is capable of distinguishing between classes. 
AUC 1 means it has good measure of separability
AUC 0 means it is predicting cats as dogs and dogs as cats. 
AUC 0.5 means it is not capable of distinguishing between classes.

~~~admonish note title="AUC 0.7"
There is a 70% chance that the model will be able to distinguish between positive and negative class.
~~~
