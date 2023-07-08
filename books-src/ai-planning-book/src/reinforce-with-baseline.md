# REINFORCE with baseline

Baseline function $B(s)$ is to help to reduce variance. This function is used to get the *advantage function*.

> 💡 **Advantage function** is Q(s,a) - V(s). It tells about the extra reward that could be obtained by by taking that particular action. This number can be estimated using TD error.
