# Scenarios

- Only encrypting the HTTP payload ("confidentiality")

  An attacker might not be able to read the data in transit. But they may be able to flip bits without detection. A GET can be changed to PUT by flipping bits, without interfering with the ciphertext.

- Only appending a checksum ("data integrity")

  An attacker can generate a correct sum.
