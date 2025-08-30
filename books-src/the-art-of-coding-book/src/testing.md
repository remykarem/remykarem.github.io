# Testing

* Integration test — spin up real resources, but "mock the data", mock whenever impossible
  * Spin up database
  * But mock HTTP servers
* Unit test — Test the smallest pieces of software. Responses from external pieces are mocked. Smallest piece = function, method etc

## What to verify

Verify that message is sent to the queue (unit test) vs. message is present in the queue (integration test)

## Test doubles

* Mock
* Spy — partial mock; lets you invoke real methods, while mocking others
* Stub
