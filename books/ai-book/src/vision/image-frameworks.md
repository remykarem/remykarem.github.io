# Image frameworks

opencv reads in BGR not rgb

channels_last in Keras

Using scipy.ndimage.imread('img.jpg', mode='RGB'), the resulting array will always have this order: (H, W, D) i.e. (height, width, depth) because of the terminology that numpy uses for ndarrays (axis=0, axis=1, axis=2) or analogously (Y, X, Z) if one would like to visualize in 3 dimensions.

```python
myImage = cv2.imread(“path”)
```

myImage is in the format HEIGHT, WIDTH, CHANNEL

```python
import matplotlib.pyplot as plt
plt.imshow(a)
```

```python
from PIL import Image
img = Image.open("lena.jpg")
```
