# Network Interface Controller

aka Network Interface Card, Network Adapter, hardware port, hardware interface

This is a hardware component that allows a device to connect to a network. An NIC controls the interaction between hardware and wired/optical/wireless medium.

~~~admonish info title="OSI model"
NIC would map to OSI Layer 1.
~~~

A host can have multiple NICs.

**Every NIC has a physical address called MAC address** (Media Access Control) which is a unique serial number. 

~~~admonish note
A typical MAC address is 6 octets long, eg. 00:0a:95:9d:68:16.
~~~

Here are some common NICs:
* Ethernet card
* Wireless network card
* Mobile network adapter
* USB network adapter
* Fiber Optic NIC

~~~admonish tip
In macOS, you can list all NICs and their MAC addresses:

```
networksetup -listallhardwareports
```
~~~

---

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
