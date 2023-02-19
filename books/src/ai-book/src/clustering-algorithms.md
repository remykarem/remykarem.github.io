# Clustering algorithms

“Meaningful collections / meaningful groups”

“How you choose helps you understand more about them”

Uses:

- Market segmentation
- Medical. imaging
- Anomaly detection
- Image segmentation
- Generalisation (less popular together with more popular videos)
- User clustering

Why transform data?

In clustering, you calculate the similarity between two examples by combining all the feature data for those examples into a numeric value. **Combing feature data requires that the data have the same scale.**


## Types

- Centroid-based
    - k-means & k-means++ (for choosing seeds)
    - FAISS ([facebookresearch / faiss](https://github.com/facebookresearch/faiss))
- Density-based
    - DBSCAN
    - OPTICS
- Distribution-based
- Hierarchical
- Unclassified
    - Mean shift

## Metrics

- Davies-Bouldin index
- Silhouette score
- Gini coefficient: measure degree of heterogeneity