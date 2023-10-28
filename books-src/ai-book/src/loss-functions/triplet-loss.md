# Triplet loss

<h3 id="triplet">Triplet loss</h3>
<p id="single">$$
    \max (\left\|f^{(anchor)}-f^{(positive)}\right\|_2^{2}-\left\|f^{(anchor)}-f^{(negative)}\right\|_2^{2}+m,
    0)
    $$</p>
<p id="batch">$$
    \frac{1}{N} \sum_{i=1}^N \max
    (\left\|f_i^{(anchor)}-f_i^{(positive)}\right\|_2^{2}-\left\|f_i^{(anchor)}-f_i^{(negative)}\right\|_2^{2}+m,
    0)
    $$</p>
<p>where $f$ is a feature vector and $m$ is the margin of tolerance.</p>
