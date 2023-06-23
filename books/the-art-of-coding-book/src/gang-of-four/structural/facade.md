# Facade

Hides low-level details.

Here, the low-level detail is Tyre.

```python
class Car(object):

    def __init__(self):
        self._tank = Tank(70)
        self._tyres = [Tyre('fl'),
                       Tyre('front_right'),
                       Tyre('rear_left'),
                       Tyre('rear_right')]

    def tyres_pressure(self):
        return [tyre.pressure for tyre in self._tyres]

    def fuel_level(self):
        return self._tank.level
```
