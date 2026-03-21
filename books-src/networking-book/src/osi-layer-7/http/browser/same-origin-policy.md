# Same-origin policy

A **browser** security policy that restricts on-page scripts from accessing or posting data to resources ("resource sharing") from a different origin other than the current page's origin ("cross-origin").

<aside>
💡 Note that resources like third-party libraries and images etc. are fine because **they are linked from the document source**.

</aside>

One method of accessing cross-origin resources is CORS.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/267d8765-6379-44fc-b800-33ef4268fcc9/Untitled.png)

- Code

    ```bash
    st=>start: Start
    
    simpleRequest0=>operation: GET
    /endpoint
    simpleRequest=>operation: GET
    /endpoint
    simpleRequest2=>operation: GET
    /endpoint
    preflightedRequest=>operation: OPTIONS
    /endpoint
    corsReject=>operation: CORS reject
    noop=>operation: .
    
    sameOrigin=>condition: Same origin?
    embedding=>condition: Cross-origin 
    embedding?
    <img> <video>
    write=>condition: Cross-origin 
    write?
    isSimpleVerb=>condition: GET/POST/
    HEAD?
    isSimpleContentType=>condition: application/
       x-www-form-urlencoded
    multipart/form-data
    text/plain?
    hasNoExtraHeaders=>condition: No extra headers?
    optionsOk=>condition: Check response
    access-control-
    allow-[methods,
    origin,credentials]
    
    st->sameOrigin
    sameOrigin(yes)->simpleRequest0
    sameOrigin(no)->embedding
    embedding(yes)->simpleRequest
    embedding(no)->write
    write(yes)->isSimpleVerb
    write(no)->corsReject
    isSimpleVerb(yes)->isSimpleContentType
    isSimpleContentType(yes)->hasNoExtraHeaders
    
    isSimpleVerb(no@no; preflighted)->preflightedRequest
    isSimpleContentType(no@no; preflighted)->preflightedRequest
    hasNoExtraHeaders(no@no; preflighted)->preflightedRequest
    
    preflightedRequest->optionsOk
    optionsOk(yes@ok)->simpleRequest2
    optionsOk(no@violated)->corsReject
    
    hasNoExtraHeaders(yes@yes; simple)->noop->simpleRequest2
    ```

