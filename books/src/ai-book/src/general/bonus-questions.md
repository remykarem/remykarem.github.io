# Bonus questions

<Inherits from ML systems design>

[https://medium.com/@ProfessorF/visualizing-the-solution-to-the-monty-hall-problem-bf4a08c8ed8f](https://medium.com/@ProfessorF/visualizing-the-solution-to-the-monty-hall-problem-bf4a08c8ed8f)

Even though there’s a science bit in data science theres still a gap between what is

taught and what is practised.

It is important for us to have practical knowledge to see the gaps in our theoretical understanding.

Sparsity? Consumes more memory

[Hariz Liew posted on LinkedIn](https://www.linkedin.com/posts/activity-6675719025265381376-8lSN/)

- I observed 20 cloudy days. I also observed 5 rainy days. What's the probability of rain given that it is cloudy?
    
    1/4. Can also use Bayes' rule.
    

## **1. Project setup**

## **2. Data collection**

If you had to prioritise improving one of the areas below in your machine learning project, which would have the most impact?

Quality and size of data

A deeper network

Using the latest optimisation algorithm

A more clever loss function

## **3. Exploration**

Why must we continually visualise?

## **4. Preprocessing**

Transforming time data

What do you do with long-tailed

How to split train and test? Stratify

why do we do feature selection?

Why must we transform?

The pros and cons of one-hot encoding

One-hot encoding: LightGBM

It is common to represent categorical features with one-hot encoding, but this approach is suboptimal for tree learners. Particularly for high-cardinality categorical features, a tree built on one-hot features tends to be unbalanced and needs to grow very deep to achieve good accuracy.

One-hot encoding: CatBoost

Do not use one-hot encoding during preprocessing. This affects both the training speed and the resulting quality.

What if I have high cardinality category?

Look at the cardinality. If it’s 80% of the training examples, then this is probably not a feature but indexes the examples.

Why do we bootstrap samples???

## **5. Modelling**

- Why do a forest of weak learners learn well?
- Can loss decomposition be used to compare models?
- When to choose L1 and L2?
- Why is it called logistic regression?
    
    It's because its underlying technique is quite the same as linear regression. And the term logistic is taken from the logit function which is used as the method of classification. A logit function is
    
    $$
    \text{logit}(p) = \log(\text{odds})= \log \frac{p}{1-p}
    $$
    
    which maps values from $(0,1)$ to $(-\infty,\infty)$.
    
    A logistic function is inverse-logit:
    
    $$
    ⁍
    $$
    
    which will map values from $(-\infty,\infty)$ to $(0,1)$, which will be convenient for binary classification tasks.
    
- Why not use linear regression in place of logistic regression?
    
    It is not robust to outliers in the data.
    
- What is the perceptron in MLP? What is an MLP?
    
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26f3a50d-5027-429a-9845-fed35827d64b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26f3a50d-5027-429a-9845-fed35827d64b/Untitled.png)
    
    A perception is a simple binary classification algorithm. It takes in a few inputs, each of which has a weight, and generates an output decision of "0" or "1".
    
    An MLP is a perceptron that teams up with additional perceptrons.
    
- What is decision boundary?
    
    Decision boundary helps to differentiate probabilities into positive and negative class.
    
- Why is cross validation not done on DL models?
    
    Expensive
    
- What is overfitting?
    
    Overfitting = The model approximates the data/observation, which is true model and noise
    
    Good fit = The model approximates true model
    
    Underfitting = The model does not approximate true model
    
- What happens if I have class imbalance for the test set? What should I use?
    
    Use a confusion matrix because it lets you see the overall performance.
    
- Accuracy for train set is higher than test set. Why?
    
    Overfitting. This is due to 
    
    1. different distributions of data between the train and test. 
    2. model is too powerful

## **6. Reporting**

## **7. Production**

- What do you know about A/B testing in the context of streaming?
- What are the differences between L1 and L2 regularization, why don’t people use L0.5 regularization for instance?
- What is the difference between online and batch gradient descent?
- What is the best way to communicate ML results to stakeholders?
- Write the equation for building a classifier using Logistic Regression.
- Given a month’s worth of login data from Netflix such as account_id, device_id, and metadata concerning payments, how would you detect payment fraud?
- How would you design an experiment for a new content recommendation model we’re thinking of rolling out? What metrics would matter?
- Write SQL queries to find a time difference between two events.
- How would you build and test a metric to compare two users’s ranked lists of movie/tv show preferences?
- How would you select a representative sample of search queries from five million?
- Why is Rectified Linear Unit a good activation function?
- If Netflix is looking to expand its presence in Asia, what are some factors that you can use to evaluate the size of the Asia market, and what can Netflix do to capture this market?
- How would we approach to attribution modeling to measure marketing effectiveness?
- How would you determine if the price of a Netflix subscription is truly the deciding factor for a consumer?
