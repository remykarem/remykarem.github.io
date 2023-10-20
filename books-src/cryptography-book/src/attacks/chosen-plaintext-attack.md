# Chosen Plaintext Attack

The attacker chooses arbitrary plaintexts and obtain the corresponding ciphertexts. 

The goal is to deduce some aspect of the key itself, or the the encryption scheme.

~~~admonish question title="Wouldn't there only be 1 plaintext that can result in the ciphertext?"
The goal isn't about finding the plaintexts that map to the ciphertext.

It's about uncovering patterns across ciphertexts when:
* encrypting the same plaintext repeatedly
* encrypting similar plaintexts
etc.
~~~
