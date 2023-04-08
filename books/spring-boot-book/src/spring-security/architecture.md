# Architecture

What happens when you make an authenticated request (basic authentication)?

1. **SecurityFilterChain**: The BasicAuthenticationFilter (which is part of the SecurityFilterChain) gets invoked.

2. **Authentication**: This filter creates a UsernamePasswordAuthenticationToken, which is a type of Authentication.

3. **AuthenticationManager**: This token is passed to AuthenticationManager for the token to be authenticated.

4. **AuthenticationProvider** Within the AuthenticationManager, its ProviderManager is configured to use DaoAuthenticationProvider. This provider uses beans like `PasswordEncoder` and `UserDetailsService` to do the relevant tings.

5. **SecurityContextHolder**: If successful, the token will be placed in the SecurityContextHolder.

[Spring Security without WebSecurityConfigurerAdapter](https://reflectoring.io/spring-security/)
[How Spring Security Filter Chain works](https://stackoverflow.com/questions/41480102/how-spring-security-filter-chain-works)
