# Scenarios

- Only signing the timestamp when sending HTTP requests

   **Authenticity** — weak authenticity as the request can be replayed within _k_ seconds (where _k_ is set by the server and guessed by the attacker)

   **Integrity** of the payload cannot be guaranteed. Attacker has the ability to mutate the underlying state of the application

- Using ciphertext as a form of authentication

   Ciphertext offers confidentiality and, depending on the encryption, may or may not offer authentication.

   If confidentiality isn't the goal then encryption might not be appropriate.

   Using RSA encryption, it offers little to zero authentication, because we assume a public key is exposed to the world. 

- Only encrypting the HTTP payload ("confidentiality")

  An attacker might not be able to read the data in transit. But they may be able to flip bits without detection. A GET can be changed to PUT by flipping bits, without interfering with the ciphertext.

- Only appending a checksum ("data integrity")

  An attacker can generate a correct sum.
