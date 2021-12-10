# Releasing the CES-Theme

1. check last version in changelog
1. think up new NEWVERSION using [semantic versioning](https://semver.org/)
1. `git checkout develop && git pull`
1. `git flow release start NEWVERSION`
   * NEWVERSION is e.g. v0.54.0
   * if necessary another `git flow init` is needed
      * set 'production releases' to master
         * `Branch name for production releases: [] master`
      * accept default values for all other specifications
1. set `version` in `package.json`.
1. `git add package.json`
1. `git commit -m "increase version"`.
1. maintain `CHANGELOG.md` (according to [keepachangelog.com](https://keepachangelog.com/en/1.0.0/))
1. `git add CHANGELOG.md && git commit -m "update changelog"`.
1. `gulp`.
1. commit changes to `dist/` directory
1. `git flow release finish -s NEWVERSION`
1. `git checkout NEWVERSION`
1. `git push origin master`
1. `git push origin develop --tags`
1. edit release in github
