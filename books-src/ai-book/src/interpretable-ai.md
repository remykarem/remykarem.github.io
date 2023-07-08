# Interpretable AI

Explainable AI / Bias in AI

Resources

[https://christophm.github.io/interpretable-ml-book/](https://christophm.github.io/interpretable-ml-book/)

[https://github.com/jphall663/awesome-machine-learning-interpretability](https://github.com/jphall663/awesome-machine-learning-interpretability)

[https://microscope.openai.com/models](https://microscope.openai.com/models)

**Explainability** refers to the understanding, in simple terms, of how exactly a model works under the hood.

**Interpretability** refers to the ability of observing the effect that changes in the (i) input or (ii) parameters will have on predicted outputs

What is?

- Extracting insights to understand
    - Why did the model make such a prediction?
    - How does each feature affect a prediction? What if I did this?

For?

- Trust
- Debugging
- Future data collection
- Feature engineering
- Inform human decision-making

**General**

- Model cards
- explainx.ai

# **Tabular**

## **Feature importance**

- Tree-based models
- LIME
- Permutation importance: shuffle the data within a column
- Partial dependence plots: keep changing value for one variable
- SHAP values (Shapley additive explanations): compare a value with baseline value
- Integrated Gradients
- DeepLift
- Model-Agnostic Linear Competitors (MALC)
- [Captum](https://github.com/pytorch/captum)

## **Constraining nonlinear models**

- Contextual Decomposition Explanation Penalization (CDEP) add a term to the loss function so models can learn how to produce good explanations
- MonoNet

## **Interpretable models**

- Decision trees: 
Information gain & gini impurity. Splits that have the most impact on a prediction are kept closer to the root of the tree
- Linear models
Implicitly interpretable, since they can naturally weight the influence of the weights. Perturbing the inputs or learned parameters has a predetermined effect on the outputs.
- Logistic regression

# **Image**

Using feature visualisation and activation atlases

- Grad-CAM (Class activation map)
    
    Grad-CAM works by (1) finding the final convolutional layer in the network and then (2) examining the gradient information flowing into that layer. Then multiply the signals with the outputs from (1).
    
- [LIME](https://github.com/marcotcr/lime)
- Summit

# **Text**

- exBERT
- [Ecco](https://github.com/jalammar/ecco?utm_source=Deep+Learning+Weekly&utm_campaign=6f762da6bd-EMAIL_CAMPAIGN_2019_04_24_03_18_COPY_01&utm_medium=email&utm_term=0_384567b42d-6f762da6bd-72969297)
- Language Interpretability Tool by Google

Libraries

- ELI5
- pdpbox
- shap
- Uber’s manifold
- What-If
