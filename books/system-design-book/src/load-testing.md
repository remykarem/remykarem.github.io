# Load testing

```bash
wrk -t8 -c256 -d30s http://127.0.0.1:8080/
```

For load testing

```python
from locust import HttpLocust, TaskSet, between

def index(l):
    l.client.get("/")

def profile(l):
    l.client.get("/profile")

class UserBehavior(TaskSet):
    tasks = {
        index: 2, 
        profile: 1
    }

    def on_start(self):
        index(self)

    def on_stop(self):
        profile(self)

class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    wait_time = between(5.0, 9.0)
```

[https://www.petefreitag.com/item/689.cfm](https://www.petefreitag.com/item/689.cfm)

```bash
ab -n 100 -c 10 [http://yahoo.com](http://yahoo.com/)
```
