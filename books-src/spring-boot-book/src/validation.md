# Validation

These runtime validations are provided by the `javax` library.

??? `@Validated`, `@Valid`, 

## Field validation

### Pre-defined
    
`@NotEmpty`, `@Email`, `@Positive`

### Custom
    
1. Define annotation.

    ```kotlin
    @Target(
        AnnotationTarget.FIELD,
        AnnotationTarget.VALUE_PARAMETER,
        AnnotationTarget.TYPE,
        AnnotationTarget.TYPE_PARAMETER
    )
    @Retention(AnnotationRetention.RUNTIME)
    @Constraint(validatedBy = [UuidValidator::class])
    annotation class ValidUuidField
    ```

2. Write the class that implements `ConstraintValidator`

    ```kotlin
    class UuidValidator : ConstraintValidator<ValidUUIDField, String> {
        override fun isValid(
            UUID: String,
            context: ConstraintValidatorContext
        ): Boolean {
            return false
        }
    }
    ```


## Class validation

1. Define annotation

    ```kotlin
    @Constraint(validatedBy = [UenValidator::class])
    @Target(AnnotationTarget.FUNCTION, AnnotationTarget.CLASS)
    @Retention(AnnotationRetention.RUNTIME)
    annotation class UenConstraint(
        val message: String = "UEN should not be null for login type CorpPass",
        val groups: Array<KClass<*>> = [],
        val payload: Array<KClass<out Payload>> = [],
    )
    ```

2. Define the validator using `ConstraintValidator`
    
    ```kotlin
    
    ```

3. Usage

    ```kotlin
    @UenConstraint
    data class DuplicateApplicationRequest(
        @JsonDeserialize(using = LoginTypeDeserializer::class)
        @JsonSerialize(using = LoginTypeSerializer::class)
        @field:NotNull(message = "Request body: 'loginType' must not be null")
        val loginType: LoginType?,
    
        @field:NotBlank(message = "Request body: 'uinfin' must not be blank")
        val uinfin: String?,
    
        val uen: String?,
    )
    ```
    
        
