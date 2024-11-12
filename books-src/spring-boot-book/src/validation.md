# Validation

These runtime validations are provided by the `javax` library.

??? `@Validated`, `@Valid`, 

The validation is designed to be declarative, hence the use of annotation to validate.

## Field validation

### Pre-defined
    
Examples: `@NotEmpty`, `@Email`, `@Positive`, `@NotBlank`

Usage:

```kotlin
data class SomeClass(
    @field:NotBlank
    val name: String
)
```

### Custom

This uses the `ConstraintValidator` interface.
    
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
    class UenValidator : ConstraintValidator<UenConstraint, ApplicationRequest> {
        override fun isValid(
            request: ApplicationRequest,
            cxt: ConstraintValidatorContext?,
        ): Boolean {
            if (request.loginType != LoginType.CORPPASS) {
                return true
            }
    
            if (request.uen == null) {
                return false
            }
    
            return request.uen.isNotBlank()
        }
    }
    ```

3. Usage

    ```kotlin
    @UenConstraint
    data class ApplicationRequest(
        val loginType: LoginType?,
        val uinfin: String?,
        val uen: String?,
    )
    ```

---

Reference:

[Spring Java Bean Validation](https://docs.spring.io/spring-framework/reference/core/validation/beanvalidation.html)
