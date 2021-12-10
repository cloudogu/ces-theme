![Cloudogu logo](https://cloudogu.com/images/logo.png)
# CES-Theme
https://cloudogu.com

Theme for CES WebApplications, based on Twitter Bootstrap.

* https://cloudogu.github.io/ces-theme/

## Build
* Install the following:
  - Install [git](https://git-scm.com)
  - Install [Node Version Manager](https://github.com/nvm-sh/nvm)
* You need to use Node 8
  * `nvm install 8 && nvm use 8`
* Then install gulp and bower globally with `npm install -g gulp bower`
* Clone the repository
* Install local dependencies inside the repository, if necessary:
  - On Windows install the following: [Windows-Build-Tools](https://github.com/felixrieseberg/windows-build-tools)
* Build
```
npm install
bower install
```
* Start development server with `gulp serve` 
* Build with `gulp`

### Troubleshooting
> * If `gulp` exits with a file not found error try deleting the `node_modules` directory and reinstall the dependencies with `npm install`.
> * If `gulp serve` does not run correctly, and the error is in one of the included node-modules, then a rebuild of the package in question may help
    (`npm rebuild <node-module>`).
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
### What is Cloudogu?
Cloudogu is an open platform, which lets you choose how and where your team creates great software. Each service or tool is delivered as a [Dōgu](https://translate.google.com/?text=D%26%23x014d%3Bgu#ja/en/%E9%81%93%E5%85%B7), a Docker container, that can be easily integrated in your environment just by pulling it from our registry. We have a growing number of ready-to-use Dōgus, e.g. SCM-Manager, Jenkins, Nexus, SonarQube, Redmine and many more. Every Dōgu can be tailored to your specific needs. You can even bring along your own Dōgus! Take advantage of a central authentication service, a dynamic navigation, that lets you easily switch between the web UIs and a smart configuration magic, which automatically detects and responds to dependencies between Dōgus. Cloudogu is open source and it runs either on-premise or in the cloud. Cloudogu is developed by Cloudogu GmbH under [MIT License](https://cloudogu.com/license.html) and it runs either on-premise or in the cloud.

### How to get in touch?
Want to talk to the Cloudogu team? Need help or support? There are several ways to get in touch with us:

* [Website](https://cloudogu.com)
* [Mailing list](https://groups.google.com/forum/#!forum/cloudogu)
* [Email hello@cloudogu.com](mailto:hello@cloudogu.com)

---
&copy; 2016 – 2021 Cloudogu GmbH - MADE WITH :heart: FOR DEV ADDICTS. [Legal notice / Impressum](https://cloudogu.com/imprint.html)
