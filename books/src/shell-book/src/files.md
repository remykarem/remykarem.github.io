# Files

`chmod 0600 <myfile>` sets file permission to

```
  usr grp all
d rwx rwx rwx
-------------
0 110 000 000
0   6   0   0
-------------

Another common file permission is 0644
0 110 100 100
0   6   4   4
```

`chmod +x <script.sh>`

`chmod u+x <file>`

`chmod u+x,g+wr file`

`chown`

`chgrp`

```
drwxrwxrwx (d = is the file a directory?)
u = user (owner)
g = group
o = others
a = all users
+ add
- remove
r = can read
w = can write
x = can execute
```

`ln -s someFolder aFolderThatDoesntExistYet` symbolic link

`mkdir -p` create nested dirs
