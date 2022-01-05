# Release des CES-Themes

1. Letzte Version im Changelog checken
2. Neue NEWVERSION anhand von [semantic versioning](https://semver.org/) ausdenken
3. `git checkout develop && git pull`
4. `git flow release start NEWVERSION`
   * NEWVERSION ist bspw. v0.54.0
   * ggf. wird noch ein `git flow init` nötig
      * 'production releases' auf master setzen
         * `Branch name for production releases: [] master`
      * default-Werte bei allen anderen Angaben akzeptieren
5. `version` in `package.json` setzen
   1. `git add package.json`
   2. `git commit -m "Bump version"`
6. `CHANGELOG.md` pflegen (nach [keepachangelog.com](https://keepachangelog.com/en/1.0.0/))
   1. `git add CHANGELOG.md && git commit -m "Update changelog"`
7. `gulp`
8. Änderungen im `dist/`-Verzeichnis committen
   1. `git add . && git commit -m "Update dist"`
9. `git flow release finish -s NEWVERSION`
10. `git checkout NEWVERSION`
11. `git push origin master`
12. `git push origin develop --tags`
13. Release in Github bearbeiten

# Update Github-Pages 
- Adresse: https://cloudogu.github.io/ces-theme/
- Kopiere den Inhalt des `dist` Ordners
- Checkout `gh-pages` Branch
- Aktualisieren mit dem kopierten Inhalt
- Commit and Push die Änderungen
- Kontrolliere den Deployment-Status und die oben angegebene Adresse: https://github.com/cloudogu/ces-theme/deployments/activity_log?environment=github-pages 

# Release Webjar (only used for CAS6)
  
  siehe [Release WebJar Documentation](Release_WebJar_de.md) 
