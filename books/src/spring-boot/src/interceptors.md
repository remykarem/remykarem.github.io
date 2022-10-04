# Interceptors

1. Using Spring’s `RestTemplate`
    
    ```kotlin
    @Configuration
    class RestClientConfig(
      private val headerModifierInterceptor: HeaderModifierInterceptor
    ) {
    
    		@Bean
        fun restTemplate(converter: MappingJackson2HttpMessageConverter): RestTemplate {
            val requestFactory =
                ClientHttpRequestFactoryBuilder.buildClientHttpRequestFactory(restTemplateProperties)
            val restTemplate = RestTemplate(requestFactory)
            val messageConverters = restTemplate.messageConverters
            messageConverters.removeIf { it is MappingJackson2HttpMessageConverter }
            messageConverters.add(converter)
            restTemplate.interceptors.apply {
                add(taskDefinitionInterceptor)
                add(individualProfileInterceptor)
                add(companyProfileInterceptor)
            }
            return restTemplate
        }
    }
    ```
    
2. Implement `HandlerInterceptorAdapter`
