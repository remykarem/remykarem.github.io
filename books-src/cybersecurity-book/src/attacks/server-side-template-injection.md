# Server-side template injection

User inputs

```
${SOME_ENV_VAR}
```

and is able to get an output of the env variable (or manages to trigger a side effect that can still evaluate the expression and it gets persisted somewhere)

