# npm-package-publish-plate

A demo shows building pakcage via Rollup.js and publishing npm package via CircleCI

## Get started

```bash
git tag -a v0.0.1 -m "v0.0.1"
git push --tags
# CI triggers npm publish based on tags
```

```bash
# To correct tags
git tag -d v0.0.1
git push --delete origion 0.0.1
```
