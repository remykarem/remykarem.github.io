# Stream processing

- Reservoir sampling
    - The first B items are inserted into the reservoir.
    - Choose one of these items. With probability $B/t$ where $t$ is the current time, replace it with the current item in the stream.

> 💡 This maintains a uniform random sample

- (optional material)
