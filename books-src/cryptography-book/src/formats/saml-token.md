# SAML token

Security Assertion Markup Language

A token that contains information about a user such as a user's identity, entitlements, or authentication status.

~~~admonish example
```
<saml:Assertion
    ID="_b084492a00816"
    IssueInstant="2023-07-15T13:55:47Z"
    Version="2.0"
    xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
    >
    <saml:Issuer>https://www.example.com/SAML</saml:Issuer>
    <saml:Subject>
        <saml:NameID>user@example.com</saml:NameID>
        <saml:SubjectConfirmation>
            <saml:SubjectConfirmationData
                NotOnOrAfter="2023-07-15T14:00:47Z"
                Recipient="https://sp.example.com/acs"
                />
        </saml:SubjectConfirmation>
    </saml:Subject>
    <saml:Conditions
        NotBefore="2023-07-15T13:50:47Z"
        NotOnOrAfter="2023-07-15T14:00:47Z"
        >
        <saml:AudienceRestriction>
            <saml:Audience>https://sp.example.com/metadata</saml:Audience>
        </saml:AudienceRestriction>
    </saml:Conditions>
    <saml:AuthnStatement
        AuthnInstant="2023-07-15T13:53:22Z"
        SessionIndex="_b084492a00816"
        >
        <saml:AuthnContext>
            <saml:AuthnContextClassRef>
                urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
            </saml:AuthnContextClassRef>
        </saml:AuthnContext>
    </saml:AuthnStatement>
</saml:Assertion>
```
~~~
