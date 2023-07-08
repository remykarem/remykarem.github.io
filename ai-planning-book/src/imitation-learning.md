# Imitation learning

Use supervised learning to learn a policy using labels provided by an expert ("**teacher** **policy**"). An example is ALVINN, a self-driving car that learns by imitating a human driver.

Algorithms:

- Naive (only the expert)
    
    > ⚠️ **Limitation**
    The distribution of the training set (from the expert policy) is usually a (smaller) subset of the true distribution. This is because expert might have never reached certain states (because of its expertise). If the function approximator encounters this, it wouldn't know what to do because it has never seen this during training.

    > ⚠️ **Limitation**
    Error propagation on structured prediction (for autoregressive problems)
    
- DAgger (Dataset aggregation)
    
    There are $N$ lessons:
    
    - For the first lesson, the teacher is the driver. For subsequent lessons, we are the driver.
    - During the lesson, we collect training samples from the driver (just the state!).
    - After the lesson (where we were the driver), we ask the teacher to tell us what we should have done correctly at every state we were in. We write these in a csv file.
    - Then we learn these training examples.
