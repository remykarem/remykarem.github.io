# Train-test split

Data Leakage

- Target leakage: some predictors are not available at inference time
- Train-test contamination

**Random**

**Okay when**

- Data doesn’t change much over time

**Not when**

- Data with burstiness (data arriving in intermittent bursts).
- Time series data. Train data will include a “sneak preview” to the test data.
