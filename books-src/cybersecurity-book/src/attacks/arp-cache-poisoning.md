# ARP cache poisoning

ARP cache poisoning works in the following way:

1. Victim requests for the MAC address of the machine with IP address `a.b.c.d`. 
2. Attacker sends a spoofed reply that maps IP address `a.b.c.d` to the attacker’s MAC address.
3. Victim’s ARP cache is updated (”poisoned”) with this information. Future communications between the victim and IP address `a.b.c.d` will be between the victim and the attacker.
