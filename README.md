# CES-Theme

Theme for CES WebApplications, based on Twitter Bootstrap.

## Build

### Requirements

* [git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [sharp](https://github.com/lovell/sharp)

### Install dependencies

```bash
# install gulp and bower globally
npm install -g gulp bower

# clone the repository
git clone git@github.com:cloudogu/ces-theme.git
cd ces-theme

# install local dependencies
npm install
bower install
```

### Start development server

```bash
gulp serve
```

### Build dist directory

```bash
gulp
```

## Usage

### npm or bower

```json
"dependencies": {
  "git+ssh://git@github.com/cloudogu/ces-theme.git"
}
```
