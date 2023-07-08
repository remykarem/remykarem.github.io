# ML system design

<!-- toc -->

---

## 0. **Overview**

Intelligence = can process information, and inform future decisions

- AI: Make machines solve problems associated with human intelligence. Anything that can make computers mimic human behaviour
- Machine Learning: Make machines learn (from experience) instead of explicit programming
- Deep Learning: Make machines extract information / patterns using neural networks

From chiphuyen:

1. project setup
2. data pipeline
3. modelling and training
4. serving

[list of mlops tools](https://docs.google.com/spreadsheets/d/1OV0cMh2lmXMU9bK8qv1Kk0oWdc_Odmu2K5sOULS9hHQ/edit#gid=0) by chip huynr

## **1. Project setup / problem framing**

- Motivation
    - What is the current pain point?
- Goals
    - What do you want to achieve with this problem?
- Background information
- Definitions
- End-user experience
    - A walkthrough of how end users are supposed to use the system.
- Performance constraints (speed & accuracy)
    - How good & fast must the prediction be?
        - High-frequency trading requires very fast predictions
        - What’s more important - precision or recall?
        - What’s more costly: FN or FP?
- Evaluation
    - What metrics do you use to evaluate your system during training and inference?
- Project constraints
    - Hardware
    - Working environment
- Developer tools
    - Workflow orchestration
        - Luigi
        - Airflow
    - Experiment management
        - Tensorboard
        - MLFlow
        - Weights & Biases
- Foresight
    - What is the final environment in which the code will be run?
    - Where would you see the model in 5 years?

## **2. Data collection**

- Data sources
    - Open source
    - Data augmentation (CV)
    - Synthetic data (esp. NLP)
- Data collection
    - Data okay? Is the data noisy? Need to go back to client? Limitations? Features you think you can get from client?
    - Questions you might ask the client
    - Interesting things you did not find
    - Potential bias?
- Data storage
    - Database (eg. Postgres)
    - Object store. Stores binary data (eg. S3)
    - Data lake. Aggregates features not obtainable from database like logs
    - Feature store. Stores ML features (eg. FEAST, Michaelangelo)
- Representation
- Challenges
    - Distribution
    - Privacy
    - Biases

## **3. Exploration**

[Data visualisation](https://www.notion.so/Data-visualisation-1db4e8e621844ea2a73a521ff3379393)

- Clustering
- Dimensionality reduction

## **4. Preprocessing**

Feature engineering

Feature transformation

Feature selection

Train-test split

Synthetic data augmentation*

## **5. Modelling**

- Model selection
    - Baselines: random, human, simple heuristic
    - Assumptions and considerations
    - **Transfer learning** 📦
    - **Weight initialisation** 📦
    - **Layers** 📦
- **Improving predictive power**🧪
    - Regularisation
    - **Hyperparameter tuning**🧪, **Hyperparameter tuning** 📦
    - **Ensemble learning**🧪
    - Loss function
    - Correcting datapoints^
- **Improving speed** 📦
- Scaling*
    - Model parallelism
    - Data parallelism
- Model evaluation
    - Cross validation^
    - **Bias and variance**🧪^

## **6. Reporting / documentation**

- **Explainability, interpretability & biasness**🧪
    - Feature importance
- Evaluation metrics
- Inference speed
- Model confidence
- Misuses
- Ablation studies
- Visualisations

## **7. Production & code**

- Data
    - Continual collection
    - Versioning
        - DVC
        - Pachyderm
- Software
    - Correctness of code
- Production environment
- Model
    - Outdated - retrain
    - Biased - need to train with data privacy
    
- Tests
    - [https://eugeneyan.com/writing/testing-ml/](https://eugeneyan.com/writing/testing-ml/)

## **Client speak**

I want 5% more accuracy

- Maybe we can look at a different metric
- What does 5% mean to the business?
- “I want 100% accuracy.”
- “I want to increase accuracy.”

## Resources

Chip Huyen’s Machine Learning Systems Design

Production Level Tech Stack

Google’s Machine Learning Crash Course Problem Framing

Machine Learning in Python: Main developments and technology trends in data science, machine learning, and artificial intelligence

[https://github.com/eugeneyan/applied-ml](https://github.com/eugeneyan/applied-ml)

[https://github.com/ahkarami/Deep-Learning-in-Production](https://github.com/ahkarami/Deep-Learning-in-Production)

[https://course.fullstackdeeplearning.com](https://course.fullstackdeeplearning.com/)

[https://huyenchip.com/machine-learning-systems-design/toc.html](https://huyenchip.com/machine-learning-systems-design/toc.html)

[https://towardsdatascience.com/architecting-a-machine-learning-pipeline-a847f094d1c7](https://towardsdatascience.com/architecting-a-machine-learning-pipeline-a847f094d1c7)

[https://becominghuman.ai/machine-learning-system-design-f2f4018f2f8](https://becominghuman.ai/machine-learning-system-design-f2f4018f2f8)

[https://www.theinsaneapp.com/2021/03/system-design-and-recommendation-algorithms.html?m=1](https://www.theinsaneapp.com/2021/03/system-design-and-recommendation-algorithms.html?m=1)

[https://towardsdatascience.com/how-to-answer-any-machine-learning-system-design-interview-question-a98656bb7ff0](https://towardsdatascience.com/how-to-answer-any-machine-learning-system-design-interview-question-a98656bb7ff0)
