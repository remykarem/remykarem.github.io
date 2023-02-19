# DBSCAN

Density-based spatial clustering of applications with noise

**#nonparametric** **#nonprobabilistic**

The DBSCAN algorithm views clusters as areas of high density separated by areas of low density.

1. Choose 2 numbers: max_distance, min_points
2. Pick a random datapoint. This is cluster A
3. Criteria for datapoints to be in this cluster:
    1. They are within a distance of max_distance
    2. There are more than min_points datapoints
4. Once run out of points, find another datapoint that has no cluster. This is Cluster B.