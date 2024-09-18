# CES-Theme
Theme for CES WebApplications, based on Twitter Bootstrap.

* https://cloudogu.github.io/ces-theme/

## Build
* Install the following:
  - Install [git](https://git-scm.com)
  - Install [Node Version Manager](https://github.com/nvm-sh/nvm)
* You need to use Node 10
  * `nvm install 10 && nvm use 10`
* Then install gulp and bower globally with `npm install -g gulp bower`
* Clone the repository
* Install local dependencies inside the repository, if necessary:
  - On Windows install the following: [Windows-Build-Tools](https://github.com/felixrieseberg/windows-build-tools)
* Build
```
make
```
* Start development server with `make serve` 
* Build with `make`

### Troubleshooting
> * If `gulp` exits with a file not found error try deleting the `node_modules` directory and reinstall the dependencies with `npm install`.
> * If `gulp serve` does not run correctly, and the error is in one of the included node-modules, then a rebuild of the package in question may help
    (`npm rebuild <node-module>`).
>   * possible candidates are node-sass and sharp
> 
## Usage
* npm or bower
```
"dependencies": {
  "ces-theme": "git://github.com/cloudogu/ces-theme.git"
}
```

## Deployment to Github Pages
* Build (see above)
   - This will get you the `dist` folder
* Copy `dist` folder
* Checkout `gh-pages` branch
* Replace everything in it with the new content in the `dist` folder you copied earlier
* Commit
* You are done! Release to Github Pages is executed automatically


---
## What is the Cloudogu EcoSystem?
The Cloudogu EcoSystem is an open platform, which lets you choose how and where your team creates great software. Each service or tool is delivered as a Dogu, a Docker container. Each Dogu can easily be integrated in your environment just by pulling it from our registry.

We have a growing number of ready-to-use Dogus, e.g. SCM-Manager, Jenkins, Nexus Repository, SonarQube, Redmine and many more. Every Dogu can be tailored to your specific needs. Take advantage of a central authentication service, a dynamic navigation, that lets you easily switch between the web UIs and a smart configuration magic, which automatically detects and responds to dependencies between Dogus.

The Cloudogu EcoSystem is open source and it runs either on-premises or in the cloud. The Cloudogu EcoSystem is developed by Cloudogu GmbH under [AGPL-3.0-only](https://spdx.org/licenses/AGPL-3.0-only.html).

## License
Copyright © 2020 - present Cloudogu GmbH
This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, version 3.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License along with this program. If not, see https://www.gnu.org/licenses/.
See [LICENSE](LICENSE) for details.


---
MADE WITH :heart:&nbsp;FOR DEV ADDICTS. [Legal notice / Imprint](https://cloudogu.com/en/imprint/?mtm_campaign=ecosystem&mtm_kwd=imprint&mtm_source=github&mtm_medium=link)

