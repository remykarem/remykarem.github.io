# Security configuration

https://docs.spring.io/spring-security/reference/index.html

The recommended way is the component-based configuration. See blog post from Spring [here](https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter).

The configuration should look something like this:

```kotlin
@Configuration
class SecurityConfiguration {

    @Bean
    fun filterChain1(http: HttpSecurity): SecurityFilterChain {
        http.invoke {
            securityMatcher("/api/**")
            // ..
        }
    }

    @Bean
    fun filterChain2(http: HttpSecurity): SecurityFilterChain {
        http.invoke {
            securityMatcher("/public/**")
            // ..
        }
    }

}
```

```admonish title="First match"
Note that only the first matching security filter chain will be invoked.
```

~~~admonish warning title="Form login default"
By default, login is through a form. You would need to disable that via

```kotlin
http.formLogin().disable()
```
~~~
