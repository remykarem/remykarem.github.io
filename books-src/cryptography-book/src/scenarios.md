# Scenarios

- Only signing the timestamp when sending HTTP requests

   The attacker can replay the request (within k seconds where k is set by the server and guessed by the attacker) and mutate the payload (instead of the signature), thereby poisoning the system.

- Using ciphertext as a form of authentication

   Ciphertext offers confidentiality and, depending on the encryption, may or may not offer authentication.

   If confidentiality isn't the goal then encryption might not be appropriate.

   Using RSA encryption, it offers little to zero authentication, because we assume a public key is exposed to the world. 

- Only encrypting the HTTP payload ("confidentiality")

  An attacker might not be able to read the data in transit. But they may be able to flip bits without detection. A GET can be changed to PUT by flipping bits, without interfering with the ciphertext.

- Only appending a checksum ("data integrity")

  An attacker can generate a correct sum.
