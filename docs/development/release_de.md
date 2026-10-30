# Release des CES-Themes

Der gebaute `dist/`-Ordner ist Teil des Repositorys. Jede Änderung in `src/` wird zusammen mit dem neu gebauten
`dist/`-Ordner (`make`) committet, daher ist `dist/` auf `develop` zu Beginn eines Releases bereits aktuell.

1. Abschnitt `[Unreleased]` in `CHANGELOG.md` prüfen und neue Version anhand von
   [semantic versioning](https://semver.org/) festlegen (`<version>` in den folgenden Schritten)
2. `git checkout develop && git pull`
3. `git flow release start <version>`
   * falls git flow noch nicht initialisiert ist, `git flow init` ausführen
      * Branch für 'production releases' auf `master` setzen
         * `Branch name for production releases: [] master`
      * default-Werte bei allen anderen Angaben akzeptieren (der Prefix für Versions-Tags bleibt leer)
4. Version setzen
   1. `version` in `package.json` setzen
   2. `npm install --package-lock-only` (aktualisiert die Version in `package-lock.json`)
5. `## [Unreleased]` in `CHANGELOG.md` in die neue Version mit Release-Datum umbenennen
   (nach [keepachangelog.com](https://keepachangelog.com/en/1.0.0/))
6. `make`
   * `git status` sollte keine Änderungen in `dist/` zeigen; falls doch, diese mit dem Release committen
7. `git add package.json package-lock.json CHANGELOG.md dist && git commit -m "Prepare release <version>"`
8. `git flow release finish -s -m "Release <version>" <version>`
   * merged das Release in `master` und `develop` und erstellt den signierten Release-Tag
9. `git push origin master develop <version>`
10. Release zum Tag in GitHub erstellen: https://github.com/cloudogu/ces-theme/releases
    * Titel: die Version, Beschreibung: der Changelog-Abschnitt der Version
11. [GitHub-Pages aktualisieren](#github-pages-aktualisieren)

# GitHub-Pages aktualisieren

- Adresse: https://cloudogu.github.io/ces-theme/
- Die Seite wird aus dem Branch `gh-pages` ausgeliefert. Er enthält den Inhalt des `dist/`-Ordners des
  Release-Tags und eine `.gitignore`.

```bash
npx gulp deploy
```

- veröffentlicht `dist/` des Tags, der zur `version` in `package.json` passt
- committet in `gh-pages` und pusht direkt nach `origin`
- bricht ab, wenn der Tag lokal nicht existiert
- Deployment-Status und die oben angegebene Adresse kontrollieren:
  https://github.com/cloudogu/ces-theme/deployments/activity_log?environment=github-pages

# Release WebJar (nur für CAS6 genutzt)

Siehe [Release WebJar Documentation](Release_WebJar_de.md)
