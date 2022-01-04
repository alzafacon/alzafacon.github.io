---
hide_table_of_contents: true
---
# Toolbox of Software Developer Tricks, etc.
## Useful Little Things Are Easy To Lose
---
## K8S: How to print Opaque Secrets
```
kubectl get secret <SECRET_NAME> -o jsonpath="{.data.<DATA>}" | base64 --decode
```
