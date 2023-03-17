# Feature selection

Benefits?

- Reduces overfitting. This allows the model to focus on important features of the data.
- Improves the model’s predictions
- Reduces computation time
- Makes the model more explainable and interpretable

## **Filter methods**

These methods apply a statistical measure to assign a scoring to each feature. The methods are often univariate and consider the feature independently, or with regard to the dependent variable.

- Chi-squared test (between 2 categorical variables)
    - Measures dependence between stochastic variables
    - Weeds out features that are most likely to be independent of class and therefore irrelevant for classification
- ANOVA / F-test (between a categorical and numerical variable)
    - Estimates the degree of linear dependency between two random variables.
- Pearson’s correlation
    - Measures the similarity between two features. Pick the features that have the highest correlation with the response variable.
- Variance thresholding
    - The lower the variance, the less information is contained in the feature, the less value it has in predicting the response variable.

## **Wrapper methods**

These methods compute models with a certain subset of features, and evaluate the importance of each feature.

- Recursive feature elimination
- Forward selection
- Backward selection
- Stepwise selection

## **Embedded methods**

These methods learn which features best contribute to the accuracy of the model while while the model is being created.

- Lasso and ridge regression
- Decision tree
    - The most important features are near the root of the tree
    - Sklearn’s implementation: feature importance is a function of no. of samples, no. of samples on left, no. of samples on the right, and their respective impurities
