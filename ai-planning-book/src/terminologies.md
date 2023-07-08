# Terminologies

- An **agent** is anything that perceives its environment through sensors/percepts and acting upon the environment through actuators/actions.
    
    agent = architecture (hardware) + program (software)
    
    A **rational agent** is one that does the right thing. 
    
    <aside>
    💡 For each possible percept sequence, a **rational agent** should select an action that is expected to maximize its performance measure, given the evidence provided by the percept sequence and whatever built-in *knowledge* the agent has.
    
    </aside>
    
    An agent program takes in current percept as input from the sensors and returns an action to the actuators. There are 4 kinds of agent programs:
    
    - Simple reflex agent
        
        An agent that acts based on the current situation, ignoring any history
        
    - Model-based agent
        
        An agent that acts based on its view of the world ("model")
        
    - **Goal-based agent**
        
        An agent will act based on goals.
        
        - "Problem-solving agent" (a term for agents that use atomic representations)
        - "Planning agent" (a term for agents that use factored or structured representations)
    - Utility-based agent
        
        An agent that acts based on what will make it happy ("utility") eg. quicker, safer, shorter.
        
    - Learning agent
        
        An agent can start operating in any environment known or unknown, then become more competent. This involves
        
- "Doing the right thing" is quantified by a **performance measure**.
- Environments
    - [fully observable, partially observable]
    - [deterministic, stochastic]
    - [static, dynamic]
    - [env has single agent, env has multiple agents]
    - [episodic, sequential]
    - [discrete, continuous]
- Examples of sensors:
    - ...
- Examples of actuators:
    - ...
