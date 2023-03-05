# Rare event classification / anomaly detection

Severe class imbalance (1% positive)

## **Methods**

### **At the data level**

1. Over-sampling of minority class
    - **Naive random oversampling** (with replacement). The augmented data should be used instead of the original data.
    - **SMOTE** (Synthetic Minority Oversampling Technique). Generate new samples by interpolation. No major benefits (Andreas Muller, empirical data).
    - Overfitting
2. Under-sampling of majority class
    - Naive discarding
    - Prototype generation
    - Prototype selection
        - Controlled techniques
        - Cleaning techniques
3. Over-sampling + cleaning under-sampling that removes extreme outliers in majority class
4. Ensemble of samplers
    - Random forest, each tree given a balanced bootstrap sample
    - etc.

### **At the classifier level**

- Weight balancing in loss function. Take inverse of no. of samples for each class.
- Thresholding / threshold moving / post scaling
- Cost sensitive learning
- One-class classification / one-class random forest
- Focal loss
- Gaussian Mixture Model
- Auto-encoder

### **Adaptive**

- **ADASYN** **sampling** (Adaptive Synthetic). Generate new samples by next to original samples which are wrongly classified using a k-NN classifier.

## **Commonly used metrics**

- NOT ACCURACY (Andreas Muller)
- NOT AUC ROC (Andreas Muller)

## **Libraries**

imbalanced-learn from scikit-contrib

sheet-breaks and machine failure in manufacturing, clicks or purchase in an online industry..

Similar to anomaly detection. In anomaly detection, we learn the pattern of a normal process. Anything that does not follow this pattern is classified as an anomaly. For a binary classification of rare events, we can use a similar approach using autoencoders

Use dense autoencoder or LSTM autoencoder.

## **How to use an Autoencoder rare-event classification?**

- We will divide the data into two parts: positively labeled and negatively labeled.
- The negatively labeled data is treated as normal state of the process. A normal state is when the process is eventless.
- We will ignore the positively labeled data, and train an Autoencoder on only negatively labeled data.
- This Autoencoder has now learned the features of the normal process.
- A well-trained Autoencoder will predict any new data that is coming from the normal state of the process (as it will have the same pattern or distribution).
- Therefore, the reconstruction error will be small.
- However, if we try to reconstruct a data from a rare-event, the Autoencoder will struggle.
- This will make the reconstruction error high during the rare-event.
- We can catch such high reconstruction errors and label them as a rare-event prediction.
- This procedure is similar to anomaly detection methods.
