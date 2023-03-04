# Models

| Year | Model               | Modes  | Architecture     | Params |
| ---- | ------------------- | ------ | ---------------- | ------ |
| 2022 | Mid Journey         |        |                  |        |
| 2021 | Latent Diffusion    |
| 2020 | StyleGAN            | Image  | GAN              |
|      | ViT                 | Image? | Transformer      |        |
| 2018 | EfficientNet        | Image  |
|      | BigGAN              |        | GAN              |        |
| 2017 | ResNeXt-50          | Image  |
|      | Mask R-CNN          | Image  | Object detection |        |
| 2016 | Xception            | Image  |
|      | Inception-v4        | Image  |
|      | Inception-ResNet-V2 | Image  |
|      | DenseNet            | Image  |
| 2015 | Inception-v3        | Image  |
|      | ResNet-50           | Image  |
|      | U-Net               | Image  | Encoder-decoder  |        |
|      | DCGAN               | Image  | GAN              |        |
| 2014 | VGG-16              | Image  |                  | 138M   |
|      | Inception-v1        | Image  |
|      | GAN                 | Image  |                  |        |
| 2012 | AlexNet             | Image  |                  | 60M    |
| 1998 | LeNet-5             | Image  |                  | 60K    |
| ?    | Fast R-CNN          |        | Object detection |        |
| ?    | Faster R-CNN        |        | Object detection |        |
| ?    | CycleGAN            |        | GAN              |        |
| ?    | GauGAN              |        | GAN              |        |
| ?    | YOLO                |        | Object detection |        |

Architectures

- LeNet-5
  - [Conv-Tanh-Pooling]
- AlexNet
  - [Conv-ReLU-Pooling]
  - Dropout
- VGG
  - [Conv-ReLU-Pooling]; more uniform conv
  - Stacking uniform convolutional layers
- Inception-v1
  - [Modular] (concat)
  - 1x1
  - Average-pooling
- Inception-v2
  - Batch norm
- Inception-v3
  - Kernel factorisation
  - (label smoothing)
- ResNet
  - Skip connections (add)
- Xception
  - Depthwise separable
