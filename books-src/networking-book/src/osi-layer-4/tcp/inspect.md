# Inspect

Capture packets

```sh
tcpdump [tcp|udp]  # socket type
    -i [en0|lo0]   # network interface
    -X             # print hex and ASCII
    host           # hostname
    port 3000      # port number (of destination?)
    -c 10          # capture 10 packets
```
