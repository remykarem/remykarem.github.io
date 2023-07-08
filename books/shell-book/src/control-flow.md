# Control flow

## **If-else**

```bash
if [[ ... ]]
then
	...
elif [[ ... ]]
then
	...
else
	...
fi
```

## **For-loops**

```bash
for (( i=0; i < 20; i++ ));
do echo $i;
done
```

```bash
for f in $(ls *txt);
do
echo $f;
done
```

```bash
for f in a.txt b.txt c.txt;
do
echo $f;
done
```
