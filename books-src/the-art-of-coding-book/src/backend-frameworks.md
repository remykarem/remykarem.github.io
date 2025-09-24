# Backend frameworks

|                  | Spring Boot             | Rocket          | FastAPI   |
|------------------|-------------------------|-----------------|-----------|
| Route mapping    | RestController          | -               | APIRouter |
| Validation       | Hibernate, javax        | Inbuilt?        | Pydantic  |
| Serialisation    | Jackson                 | Serde           | Pydantic  |
| Environments     | Profile                 | State something | -         |
| REST client      | RestTemplate, OpenFeign | reqwest         | request   |
| Configurations   | Properties              | Stateconfig??   | Pydantic  |
| Testing          | JUnit5, Mockito         | ???             |           |
| Security         | Spring Security         | ???             |           |
| Monitoring       | Actuator                |                 |           |
| ORM              | Hibernate, JPA          | Diesel          | Pydantic  |
| Docs             | Swagger                 | Swagger         | Swagger   |
| Server           | Tomcat, Jetty           | ???             | Uvicorn   |
| Exceptions       | ControllerAdvice        |                 |           |
| Object lifecycle | DI, MVC                 |                 |           |
| Logging          | Logback                 |                 |           |
| Template engine  | ThymeLeaf               | ???             | Jinja2    |