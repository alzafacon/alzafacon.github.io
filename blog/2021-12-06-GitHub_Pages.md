# Custom domain for GitHub Pages

This website is hosted on GitHub pages. The default domain is alzafacon.github.io since the source code is hosted on a repo of the same name. 

I setup a custom domain following the docs: 
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages

<!--truncate-->

Here are some clarifications:

- You must enter the desired custom domain in the repo settings page before creating any DNS entries

- The DNS configuration should be as follows (I used namecheap.com)

```
ALIAS
Host: @
Target: alzafacon.github.io.

CNAME
Host: www
Target: alzafacon.github.io.
```

I also setup alzafacon.com to redirect to fidelcoria.com
```
URL Redirect
Host: @
Destination URL: https://fidelcoria.com
Unmasked
```
