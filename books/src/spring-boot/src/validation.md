# Validation

??? `@Validated`, `@Valid`, 

- Usual annotations from JavaX
    
    `@NotEmpty`, `@Email`, `@Positive`
    

- Self-defined
    
    Define annotation.
    
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
    
    Write the class that implements `ConstraintValidato`
    
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
    

Example 2:

```kotlin
@Target(ElementType.FIELD)
@Constraint(validatedBy={})
@Retention(RUNTIME)
@Pattern(regexp="^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$")
public @interface UUID {
    String message() default "{invalid.uuid}";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
```
