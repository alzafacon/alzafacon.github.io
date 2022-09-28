# Toolbox of Software Developer Tricks, etc.
Useful little things are easy to lose

---
## JavaScript thread sleep
```
async function sleep(ms) {
  await new Promise(resolve =>
    setTimeout(resolve, ms)
  )
}
```
___
## Ruby Gems: execute specific version from several installed
Multiple versions of a Ruby Gem can be installed for use from the command line. For example to see which versions of bundler you have 

```
gem list bundler
```

To use the version you want put the version number between underscores right after the gem command line name (note this may be different than the gem name).

```
bundle _2.3.4_ install
```
---
## Node: get package.json version
```
$ node -p "require('./package.json').version"
```
---
## Git: Step through commits on a branch
Walk through commits on a branch by jumping back a number of commits from the branch head.
```
git checkout <branch-name>~<number>
git checkout spam_and_eggs~5
git checkout spam_and_eggs~6
```
---
## Git SSH for multiple remote servers
~/.ssh/config:
```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/personal_github

Host github.company.com
  HostName github.company.com
  User git
  IdentityFile ~/.ssh/work_github
```
SOURCE: https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/

---
## macOS: Always show hidden files
`defaults write com.apple.finder AppleShowAllFiles -bool true`
---
## Git debug ignore and excludes
```
git check-ignore -v <FILE_NAME>
```
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
