# Toolbox of Software Developer Tricks, etc.
Useful little things are easy to lose

---
## K8S: How to print Opaque Secrets
```
kubectl get secret <SECRET_NAME> -o jsonpath="{.data.<DATA>}" | base64 --decode
```
---
## GitHub: Find repos you own in an Organization

It is impossible on the GitHub website to see a list of repos in an Organization that you own.

Here is a GraphQL query (with query variables) that gets you pretty close. You still have to manually filter repos forked from an Organization repo. The `login` values in the response can help select the org you care about. You can run the query on https://docs.github.com/en/graphql/overview/explorer. Don't forget to sign in.

```
query pagination($first: Int!, $after: String = null) {
    viewer {
        repositories(first: $first, after: $after, affiliations: [ORGANIZATION_MEMBER]) {
            totalCount
            nodes {
                name, url
                owner { login }
            }
            pageInfo {
                startCursor, endCursor
                hasPreviousPage, hasNextPage
            }
        }
    }
}
```

Here is the REST api version:  

```
curl \
  -H "Accept: application/vnd.github.v3+json" \
  -u "$USERNAME:$PERSONAL_ACCESS_TOKEN" \
  https://api.github.com/user/repos?affiliation=organization_member&per_page=100&page=1
```
SOURCE: https://docs.github.com/en/rest/reference/repos#list-repositories-for-the-authenticated-user