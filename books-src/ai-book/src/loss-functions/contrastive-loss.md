# Contrastive loss

<h3 id="contrastive">Contrastive loss<d-footnote>Siamese network etc.</d-footnote>
</h3>
<p id="batch">$$ \frac{1}{N} \sum_{i=1}^N y_i \hat{d}_i^{2}+(1-y_i)(\max (m-\hat{d}_i), 0)^{2} $$</p>
<p id="single">$$ y \hat{d}^{2}+(1-y)(\max (m-\hat{d}), 0)^{2} $$</p>
<p>which can be written as</p>
<p id="batch">$$ \left\{\begin{array}{ll}
    {\frac{1}{N} \sum_{i=1}^N \hat{d}_i^{2}} & {\text { if similar }} \\
    {\frac{1}{N} \sum_{i=1}^N (\max (m-\hat{d}_i), 0)^{2}} & {\text { if dissimilar }}
    \end{array}\right.$$</p>
<p id="single">$$ \left\{\begin{array}{ll}
    {\hat{d}^{2}} & {\text { if similar }} \\
    {(\max (m-\hat{d}), 0)^{2}} & {\text { if dissimilar }}
    \end{array}\right.$$</p>
<p>which can also be written (for readability purposes) as</p>
<p id="batch">$$ \left\{\begin{array}{ll}
    {\frac{1}{N} \sum_{i=1}^N \hat{d}_i^{2}} & {\text { if similar }} \\
    {\frac{1}{N} \sum_{i=1}^N (m-\hat{d}_i)^{2}} & {\text { if dissimilar \& smaller than margin}} \\
    {0} & {\text { if dissimilar \& bigger than margin}} \end{array}\right. $$</p>
<p id="single">$$ \left\{\begin{array}{ll}
    {\hat{d}^{2}} & {\text { if similar }} \\
    {(m-\hat{d})^{2}} & {\text { if dissimilar \& smaller than margin}} \\
    {0} & {\text { if dissimilar \& bigger than margin}}
    \end{array}\right. $$</p>
<p>where $y$ is a binary value (ground truth) indicating '1' if two
        feature vectors are similar and '0' if they aren't,
        $\hat{d}$ is the distance between these vectors,
        and $m$ is the margin of tolerance.</p>
