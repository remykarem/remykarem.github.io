# Cron job

```kotlin
@Component
class WeeklyReportScheduler {

    @Scheduled(cron = "0 0 1 * * MON")
    fun schedule() {
        print("hi")
    }
}
```
