# EDA++

## Skewness

Measures symmetry of distribution

```python
df[col].skew()
```

- Skewness = 0: symmetric
- Skewness > 0: longer right tail
- Skewness < 0: longer left tail

## Kurtosis

Measures heaviness of distribution tails. 

**Excess kurtosis** is a metric that compares the kurtosis of a distribution against the kurtosis of a normal distribution (kurtosis=3).

```python
df[col].kurtosis()
```

Excess kurtosis = Kurtosis - 3

- Excess kurtosis close to 0 (normal)
    
    ![Excess kurtosis close to 0](./eda-plus-plus-01.png)
    

- Excess kurtosis >> 0
    
    ![Excess kurtosis more than 0](./eda-plus-plus-02.png)
    

- Excess kurtosis << 0
    
    ![Excess kurtosis smaller than 0](./eda-plus-plus-03.png)
