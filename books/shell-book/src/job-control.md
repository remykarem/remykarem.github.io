# Job control

`&` Run a job in the background

```bash
> [1] 52747 [1] is the job number, the other is process ID
```

`jobs` ****See all jobs

```bash
> [1] - running sleep 20
> [2] + running sleep 34
```

`> +` indicates the job which will be brought to foreground with `fg`

`fg` Bring a job to the foreground

`Ctrl-Z` ****Send a STOP signal to the foregrounded process

`bg` ****Continue running the job

`kill %4` ****Kill (send a TERM signal) to job #4 (job specification)

> ⚠️ If the parent terminal is killed, the job will also be killed.
