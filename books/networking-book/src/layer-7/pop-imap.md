# POP, IMAP

Post Office Protocol v3, Internet Message Access Protocol

POP/IMAP protocols are pull protocols used for getting email from an email server.

These protocols use TLS for security.

# **POP**

POP phases

1. User agent connects to POP server on TCP on port 110.
2. User agent authenticates.
3. User retrieves emails and mark emails for deletion.
4. Close the POP3 session. Server makes updates based on users command. Deletes email accordingly. Only inbox.

Emails might not be in sync on multiple devices.

# **IMAP**

(More complex)

- Emails are kept on the server and not deleted.
- All folders are synced.
- Inbox will be in sync on all devices.
  