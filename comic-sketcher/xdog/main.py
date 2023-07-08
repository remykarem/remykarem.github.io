import cv2
import numpy as np

cv2.CV_LOAD_IMAGE_COLOR = 0


def canny(img):
	img = cv2.Canny(img, 100, 200)
	return img


def DoG(img, size=(0, 0), k=1.6, sigma=0.5, tau=1):
	"""
	Difference of Gaussians (DoG)
	"""
	img1 = cv2.GaussianBlur(img, size, sigma)
	img2 = cv2.GaussianBlur(img, size, sigma*k)

	img = img1 - tau*img2

	return img


def DoG_threshold(img, sigma=0.5, k=200, tau=0.98, epsilon=0.7):
	"""
	Threshold the DoG image
	"""
	# Get a DoG
	aux = DoG(img, sigma=sigma, k=k, tau=tau)
	print(np.mean(aux))

	# Thresholding for two-tone
	for i in range(aux.shape[0]):
		for j in range(aux.shape[1]):
			if aux[i, j] >= epsilon:
				aux[i, j] = 255 # white!
			else:
				aux[i, j] = 0   # black!
	return aux
 

def XDoG(img, sigma=0.5, k=1.6, tau=0.98, epsilon=0.1, phi=10):
	"""
	Improve thresholding with a tanh
	"""
	# Get a DoG
	aux = DoG(img, sigma=sigma, k=k, tau=tau)/255

	# Thresholding
	for i in range(aux.shape[0]):
		for j in range(aux.shape[1]):
			if aux[i, j] >= epsilon:
				aux[i, j] = 1 # white!
			else:
				aux[i, j] = 1 + np.tanh(phi*(aux[i, j]-epsilon)) # black!
	return aux*255


def XDoG_reparam(img, sigma=0.5, k=1.6, p=0.98, epsilon=0.1, phi=10):
	"""
	XDoG reparametrised

	sigma:
	k: the higher the k, the lesser the noise
	epsilon: luminance (the lower the whiter)
	phi: sharpness of black/white transitions (recommended low for smoothing)
	p: edge sharpening
	"""
	# Get a DoG
	img1 = cv2.GaussianBlur(img, (0, 0), sigma)
	img2 = cv2.GaussianBlur(img, (0, 0), sigma*k)
	aux = np.float32((1+p) * img1 - p * img2)
	aux /= 255
	print(np.mean(aux))

	# Thresholding
	for i in range(aux.shape[0]):
		for j in range(aux.shape[1]):
			if aux[i, j] >= epsilon:
				aux[i, j] = 1
			else:
				aux[i, j] = 1 + np.tanh(phi*(aux[i, j]-epsilon))
	return aux*255



# garygrossi XDoG version
def XDoG_garygrossi(img, sigma=0.5, k=200, tau=0.98, epsilon=0.1, phi=10):
	# Get a DoG
	aux = DoG(img, sigma=sigma, k=k, tau=tau)/255

	# Thresholding
	for i in range(aux.shape[0]):
		for j in range(aux.shape[1]):
			if aux[i, j] > epsilon:
				aux[i, j] = 1
			else:
				aux[i, j] = 1 + np.tanh(phi*(aux[i,j]-epsilon))
	return aux*255


def hatchBlend(img, sigma=1, k=200, p=0.98, epsilon=-0.5, phi=10):
	# XDoGImage = XDoG(image, sigma=1, k=200, tau=0.5, epsilon=-0.5, phi=10)
	XDoGImage = XDoG_reparam(image, sigma=1, k=200, p=0.5, epsilon=-0.5, phi=10)
	hatchTexture = cv2.imread('./imgs/hatch.jpg', cv2.CV_LOAD_IMAGE_COLOR)
	hatchTexture = cv2.resize(hatchTexture, (image.shape[1], image.shape[0]))
	alpha = 0.2  # 0.12
	return (1-alpha)*XDoGImage + alpha*hatchTexture


def FDoG(img):
	return True




if __name__ == '__main__':

	# Open image in grayscale
	# img = cv2.imread('imgs/lena.jpg',cv2.CV_LOAD_IMAGE_GRAYSCALE)
	image_shape = (200,250)
	image = cv2.imread('imgs/example.png', cv2.CV_LOAD_IMAGE_COLOR)
	image = cv2.resize(image, image_shape)

	# Set k = 1.6 as proposed in the paper
	K = 1.6

	variants = {
		"Grayscale": image,
		"Canny": canny(image),
		"DoG 1": DoG(image, k=K, sigma=0.1),
		"DoG 2": DoG(image, k=K, sigma=0.2),
		"DoG 3": DoG(image, k=K, sigma=0.3),
		"DoG 4": DoG(image, k=K, sigma=0.4),
		"DoG 5": DoG(image, k=K, sigma=0.5),
		"DoG 6": DoG(image, k=K, sigma=0.6),
		"DoG 7": DoG(image, k=K, sigma=0.7),
		"DoG 8": DoG(image, k=K, sigma=0.8),
		"DoG 9": DoG(image, k=K, sigma=0.9),
		# "DoG Thresholded tau99 6": DoG_threshold(image, sigma=0.6, k=K, tau=0.99, epsilon=-0.5),
		# "DoG Thresholded tau99 7 -0.5": DoG_threshold(image, sigma=0.7, k=K, tau=0.99, epsilon=-0.5),
		# "DoG Thresholded tau99 7 -0.6": DoG_threshold(image, sigma=0.7, k=K, tau=0.99, epsilon=-0.5),
		# "DoG Thresholded tau99 7 -0.7": DoG_threshold(image, sigma=0.7, k=K, tau=0.99, epsilon=-0.5),
		# "XDoG 1": np.uint8(XDoG_reparam(image, sigma=0.5, k=170, p=0.98, epsilon=0.6, phi=10)),
		# "XDoG 2": np.uint8(XDoG_reparam(image, sigma=0.5, k=170, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 3": np.uint8(XDoG_reparam(image, sigma=0.6, k=170, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 4": np.uint8(XDoG_reparam(image, sigma=0.7, k=170, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 5": np.uint8(XDoG_reparam(image, sigma=0.8, k=170, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 6": np.uint8(XDoG_reparam(image, sigma=0.9, k=170, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 7": np.uint8(XDoG_reparam(image, sigma=0.9, k=180, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 8": np.uint8(XDoG_reparam(image, sigma=0.9, k=190, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 9": np.uint8(XDoG_reparam(image, sigma=0.9, k=200, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 10": np.uint8(XDoG_reparam(image, sigma=0.9, k=210, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 11": np.uint8(XDoG_reparam(image, sigma=0.9, k=220, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 12": np.uint8(XDoG_reparam(image, sigma=0.9, k=160, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 13": np.uint8(XDoG_reparam(image, sigma=0.9, k=150, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 14": np.uint8(XDoG_reparam(image, sigma=0.9, k=140, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 15": np.uint8(XDoG_reparam(image, sigma=0.9, k=130, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 16": np.uint8(XDoG_reparam(image, sigma=0.9, k=120, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 17": np.uint8(XDoG_reparam(image, sigma=0.9, k=100, p=0.95, epsilon=0.6, phi=10)),
		# "XDoG 37": np.uint8(XDoG_reparam(image, sigma=0.9, k=20, p=0.99, epsilon=0.1, phi=2)),
		# "XDoG 38": np.uint8(XDoG_reparam(image, sigma=0.9, k=20, p=0.99, epsilon=0.1, phi=5)),
		# "XDoG 39": np.uint8(XDoG_reparam(image, sigma=0.9, k=20, p=0.99, epsilon=0.1, phi=10)),

		# Fix the epsilon first
		# "XDoG 1": np.uint8(XDoG_reparam(image, sigma=0.1, k=20, p=0.99, epsilon=0.5, phi=10)),
		# "XDoG 2": np.uint8(XDoG_reparam(image, sigma=0.2, k=20, p=0.99, epsilon=0.5, phi=10)),
		# "XDoG 3": np.uint8(XDoG_reparam(image, sigma=0.3, k=20, p=0.99, epsilon=0.5, phi=10)),
		# "XDoG 4": np.uint8(XDoG_reparam(image, sigma=0.4, k=20, p=0.99, epsilon=0.5, phi=10)),
		# "XDoG 5": np.uint8(XDoG_reparam(image, sigma=0.5, k=20, p=0.99, epsilon=0.5, phi=10)),
		# "XDoG 6": np.uint8(XDoG_reparam(image, sigma=0.6, k=20, p=0.99, epsilon=0.5, phi=10)),
		# "XDoG 7": np.uint8(XDoG_reparam(image, sigma=0.7, k=20, p=0.99, epsilon=0.4, phi=10)), # this
		# "XDoG 8": np.uint8(XDoG_reparam(image, sigma=0.8, k=20, p=0.99, epsilon=0.5, phi=10)),
		# "XDoG 9": np.uint8(XDoG_reparam(image, sigma=0.9, k=20, p=0.99, epsilon=0.5, phi=10)),

		# Fix k
		# "XDoG 10": np.uint8(XDoG_reparam(image, sigma=0.7, k=5, p=0.99, epsilon=0.3, phi=5)),
		# "XDoG 11": np.uint8(XDoG_reparam(image, sigma=0.7, k=10, p=0.99, epsilon=0.3, phi=5)),
		# "XDoG 12": np.uint8(XDoG_reparam(image, sigma=0.7, k=20, p=0.99, epsilon=0.3, phi=5)),
		# "XDoG 13": np.uint8(XDoG_reparam(image, sigma=0.7, k=50, p=0.99, epsilon=0.3, phi=5)),
		# "XDoG 14": np.uint8(XDoG_reparam(image, sigma=0.7, k=100, p=0.99, epsilon=0.3, phi=5)),
		# "XDoG 15": np.uint8(XDoG_reparam(image, sigma=0.7, k=150, p=0.99, epsilon=0.3, phi=5)),
		# "XDoG 16": np.uint8(XDoG_reparam(image, sigma=0.7, k=200, p=0.99, epsilon=0.3, phi=5)),





		# "XDoG": np.uint8(XDoG(image, sigma=0.7, k=K, tau=0.99, epsilon=0.04, phi=15)),
		# "XDoG GaryGrossi": np.uint8(XDoG_garygrossi(
		# 	image, sigma=0.5, k=200, tau=0.98, epsilon=0.1, phi=10)),
		# "XDoG Project 2": np.uint8(
		# 	XDoG(image, sigma=1.6, k=K, tau=0.5, epsilon=-1, phi=10)),
		# "XDoG Project 3 - Natural Media": np.uint8(
		# 	XDoG(image, sigma=1, k=K, tau=0.5, epsilon=-0.5, phi=10)),
		# "XDoG Project 4 - Hatch": np.uint8(hatchBlend(image))
	}

	for name, output in variants.items():
		print(f"[INFO] Generating {name}")
		cv2.imshow(name, output)

	cv2.waitKey(0)
