---
title: "K8s: How to print Opaque Secrets"
---

```
$ kubectl get secret <SECRET_NAME> -o jsonpath="{.data.<DATA>}" | base64 --decode
```
