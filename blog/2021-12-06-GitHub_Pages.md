---
authors: alzafacon
---

# Custom Apex Domain for GitHub Pages

I'll explain how I setup the DNS records for an apex domain (fidelcoria.com) with a redirect from www.fidelcoria.com to fidelcoria.com.

If you're new to GitHub Pages visit [pages.github.com](https://pages.github.com/) to learn the basics.

<!--truncate-->

## TL;DR

Here are the DNS records. The host values for the DNS records were the tricky part to figure out. 

```
ALIAS
Host: @
Target: alzafacon.github.io.
```
```
CNAME
Host: www
Target: alzafacon.github.io.
```

## The devil is in the details

I find the official documentation to be unclear or confusing in some parts, but I don't blame them. The internet is complicated and the GitHub writers are trying to make the docs helpful even for beginners.

The long and short of it is that the steps (for apex domain with https and www) are in the docs [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain). Unfortunately the DNS instructions are confusing.

Here are the steps I had to follow:

- Enter your desired custom domain in the repo settings page (**before** creating any DNS entries)

   I used fidelcoria.com (without the leading `www.`)

   Doing this will configure a CNAME file on your GitHub Pages branch

- Create an ALIAS record via your DNS provider

  The docs say "`To create an ALIAS or ANAME record, point your apex domain to the default domain for your site`".

  The `apex domain` did not work. Instead I had to use `@`, which is used to represent the "bare domain" in DNS records.
  
  ```
  ALIAS
  Host: @
  Target: alzafacon.github.io.
  ``` 

- Create a CNAME record via your DNS provider
  
  The docs say "`Navigate to your DNS provider and create a CNAME record that points www.example.com to the default domain for your site`"

  `www.fidelcoria.com` did not work. Instead I had to use `www`.
  ```
  CNAME
  Host: www
  Target: alzafacon.github.io.
  ```

DNS changes can take up to 24 hours to propagate. This makes it hard to tell if something is wrong or just needs more time.

I learned the best approach for me was to get informed, decide what I want, make a plan, try it out, observe patiently, then iterate.

## Extra DNS setup

I also setup alzafacon.com to redirect to fidelcoria.com

```
URL Redirect
Host: @
Destination URL: https://fidelcoria.com
Unmasked
```