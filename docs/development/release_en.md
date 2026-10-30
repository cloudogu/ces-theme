# Releasing the CES-Theme

The built `dist/` folder is part of the repository. Every change in `src/` is committed together with the
rebuilt `dist/` folder (`make`), so `dist/` on `develop` is already up to date when a release starts.

1. Check the `[Unreleased]` section in `CHANGELOG.md` and choose the new version according to
   [semantic versioning](https://semver.org/) (`<version>` in the following steps)
2. `git checkout develop && git pull`
3. `git flow release start <version>`
   * if git flow is not initialized yet, run `git flow init`
      * set the branch for production releases to `master`
         * `Branch name for production releases: [] master`
      * accept the default values for all other settings (the version tag prefix stays empty)
4. Set the version
   1. set `version` in `package.json`
   2. `npm install --package-lock-only` (updates the version in `package-lock.json`)
5. Rename `## [Unreleased]` in `CHANGELOG.md` to the new version and the release date
   (according to [keepachangelog.com](https://keepachangelog.com/en/1.0.0/))
6. `make`
   * `git status` should not show any changes in `dist/`; if it does, commit them with the release
7. `git add package.json package-lock.json CHANGELOG.md dist && git commit -m "Prepare release <version>"`
8. `git flow release finish -s -m "Release <version>" <version>`
   * merges the release into `master` and `develop` and creates the signed release tag
9. `git push origin master develop <version>`
10. Create the release for the tag on GitHub: https://github.com/cloudogu/ces-theme/releases
    * title: the version, description: the changelog section of the version
11. [Update GitHub Pages](#update-github-pages)

# Update GitHub Pages

- Address: https://cloudogu.github.io/ces-theme/
- The page is served from the `gh-pages` branch. It contains the content of the `dist/` folder of the
  release tag and a `.gitignore`.

```bash
npx gulp deploy
```

- publishes `dist/` of the tag matching the `version` in `package.json`
- commits to `gh-pages` and pushes it to `origin` immediately
- fails if the tag does not exist locally
- Check the deployment status and the address above:
  https://github.com/cloudogu/ces-theme/deployments/activity_log?environment=github-pages

# Release WebJar (only used for CAS6)

See [Release WebJar Documentation](Release_WebJar_en.md)
