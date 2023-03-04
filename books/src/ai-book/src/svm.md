# SVM

Support Vector Machine

**What is SVM?**

SVM is a supervised learning algorithm that maximises the margin between classes by finding the best decision boundary that separates the data into its classes. The datapoints which are at the margin are called **support vectors**.


“Large-margin classifier”

- Linear separable
- Nonlinear separable
    - **Soft Margin**
    Two types of misclassifications are tolerated by SVM under soft margin:
        - The dot is on the wrong side of the decision boundary but on the correct side/ on the margin (shown in left)
        - The dot is on the wrong side of the decision boundary and on the wrong side of the margin (shown in right)
    - **Kernel Tricks**
        - What Kernel Trick does is it utilises existing features, applies some transformations, and creates new features.
        - Think of the polynomial kernel as a transformer/processor to generate new features by applying the polynomial combination of all the existing features.
        - Think of the Radial Basis Function kernel as a transformer/processor to generate new features by measuring the distance between all other dots to a specific dot/dots — centres.
