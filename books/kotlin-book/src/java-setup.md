# Java setup

## Where are all the javas?

```
mdfind -name 'java' | grep '/bin/java$'
```

The following doesn’t show Brew-installed Java:

```
/usr/libexec/java_home -V
```

Common locations
* `/usr/local/Cellar`
* `/Library/Java/JavaVirtualMachines`
* `~/Library/Java/JavaVirtualMachines`
* `/Applications/IntelliJ IDEA.app/Contents/jbr/Contents/Home`

## JDK and JRE
.jdk files only have JDK, you need JRE

## How does JAVA_HOME work, who uses it

`JAVA_HOME` is used by ./gradlew

If no `JAVA_HOME` is set, the highest JDK available from running `/usr/libexec/java_home` will be used (to be verified).

## How to install CA certs?

Use `keytool`.

For Gradle wrappers, use

```
./gradlew build --refresh-dependencies -Djavax.net.ssl.trustStore=<path-to-the-cacert-file>
```
