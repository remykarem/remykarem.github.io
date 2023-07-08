# Filters

[https://stackoverflow.com/questions/19825946/how-can-i-add-a-filter-class-in-spring-boot](https://stackoverflow.com/questions/19825946/how-can-i-add-a-filter-class-in-spring-boot)

```admonish note
If the filter has something to do with authorisation and authentication, you might want to use **Spring Security** instead. Citation needed.
```

1. For any request (`@Component`)
    
    ```kotlin
    @Component
    class CustomFilter: Filter {
    
      override fun doFilter()
    
    }
    ```
    
2. For specific request patterns (`@Bean`)
    
    ```kotlin
    class CustomFilter: Filter {
    
      override fun doFilter()
    
    }
    ```
    
    ```kotlin
    @Configuration
    public class SomeAppConfig {
    
    	@Bean
    	fun filterRegistrationBean(): FilterRegistrationBean<CustomURLFilter> {
    		val registrationBean = new FilterRegistrationBean();
    		val customURLFilter = CustomURLFilter();
    		
    		registrationBean.setFilter(customURLFilter);
    		registrationBean.addUrlPatterns("/greeting/*");
    	
    		return registrationBean;
    	}
    }
    ```
    
3. For specific request patterns (`@WebFilter`)
    
    ```kotlin
    @WebFilter(urlPatterns="/*")
    class XSSFilter: Filter {
    
        @Override
        fun doFilter() {}
    }
    ```
    
    MySpringApplication.kt
    
    ```kotlin
    @ServletComponentScan
    class MySpringApplication
    ```
