# Release des CES-Themes

1. Letzte Version in im Changelog checken
1. Neue NEWVERSION anhand von [semantic versioning](https://semver.org/) ausdenken
1. `git checkout develop && git pull`
1. `git flow release start NEWVERSION`
   * NEWVERSION ist bspw. v0.54.0
   * ggf. wird noch ein `git flow init` nötig
      * 'production releases' auf master setzen
         * `Branch name for production releases: [] master`
      * default-Werte bei allen anderen Angaben akzeptieren
1. `version` in `package.json` setzen
1. `git add package.json`
1. `git commit -m "Bump version"`
1. `CHANGELOG.md` pflegen (nach [keepachangelog.com](https://keepachangelog.com/en/1.0.0/))
1. `git add CHANGELOG.md && git commit -m "Update changelog"`
1. `gulp`
1. Änderungen im `dist/`-Verzeichnis committen
1. `git flow release finish -s NEWVERSION`
1. `git checkout NEWVERSION`
1. `git push origin master`
1. `git push origin develop --tags`
1. Release in Github bearbeiten