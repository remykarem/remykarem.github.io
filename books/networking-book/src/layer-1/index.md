# Layer 1/2 - Physical/Datalink

- Guided
    - Twisted pair copper wire (carry electrical signals)
    - Coaxial cable (carry electrical signals)
    - Fiber optics (carry light)
        - Multimode. Uses LED; works over 10km.
        - Monomode. Uses laser; works over a few km.
- Unguided
    - Terrestrial radio channels (radio waves):
        - 1-2 meters: Bluetooth
        - Up to 100 meters: WiFi
        - Up to kilomteres: 3G, 4G, LTE
    - Free-space optical communication (light)

Metallic media suffer from electrical noise and interference from nearby electrical sources.

---

Transmission and reception of raw bit streams over a physical medium. Conversion of signals.

Physical devices: Network interface card

**What are involved?**

**?**

**Responsibilities**

Receive packet from network layer and deals with providing hop-to-hop communication between entities directly connected by a physical link.

- MAC layer
Responsible for controlling how devices in a network gain access to a medium and permission to transmit data
- Logical link control layer

**Protocols**

- 802.3 Ethernet
- 802.11 Wi-Fi
- Token Ring
- FDDI

Deals with framing (of the signal bits)

**Medium Access Control**

Controls the interaction between hardware and wired/optical/wireless medium. Data link layer addresses used in Ethernet networks are often called MAC addresses
