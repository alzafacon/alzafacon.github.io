# Python Quine

A quine is a computer program which takes no input and produces a copy of its own source code as its only output.

I first read about this kind of program in an ACM article but I can't remember which one.

Here is my solution

```python
print('print({}.format({}))'.format('print({}.format({}))'))
```
