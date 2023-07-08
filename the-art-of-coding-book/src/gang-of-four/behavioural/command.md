# Command

Prepare for what needs to be executed, then execute it.

```python
history = History()
history.execute(RenameFileCommand('docs/cv.doc', 'docs/cv-en.doc'))
history.execute(RenameFileCommand('docs/cv1.doc', 'docs/cv-bg.doc'))
history.undo()
history.undo()
```
