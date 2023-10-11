# Process substitution

Use the output of command as a file-like input to another command

`command1 <(command2)`

~~~admonish question title="When will I use this?"
When you don't wanna create a file (required by a command) from the output of some other command. 
~~~

~~~admonish failure title="POSIX-compliance"
Command substitution is not POSIX-compliant.
~~~
