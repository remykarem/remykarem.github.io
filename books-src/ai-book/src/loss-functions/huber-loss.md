# Huber loss

<p id="batch"> $$ \left
    \{\begin{array}{ll}
    {\frac{1}{2}\sum_{i=1}^{N}(y_i-\hat{y_i})^2} & {\text { if } |y-\hat{y}|\le \alpha} \\
    {\alpha \sum_{i=1}^{N} |y_i-\hat{y_i}| - \frac{1}{2} \alpha^2} & {\text { otherwise }}\end{array}\right. $$</p>
<p id="single"> $$ \left
    \{\begin{array}{ll}
    {\frac{1}{2}(y-\hat{y})^2} & {\text { if } |y-\hat{y}|\le \alpha} \\
    {\alpha |y-\hat{y}| - \frac{1}{2} \alpha^2} & {\text { otherwise }}\end{array}\right. $$</p>
<p>Huber loss is less sensitive to outliers in data than the squared error loss.
    It approaches MAE when $\alpha$ is near 0 and MSE when large.
    The choice of $\alpha$ is important as it determines how much you
    consider as an outlier. A simpler way to look at this loss function is:
    $$ \left
    \{\begin{array}{ll}
    {\text{MSE}} & {\text { if not outlier }} \\
    {\text{MAE}} & {\text { if outlier }}\end{array}\right. $$

