# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [v0.8.0] - 2024-09-02
- Add new alpaca mascot image to theme

## [v0.7.2] - 2022-10-20
### Changed
- Move `sharp` to dev dependencies (#39)
- Pin `bootstrap-sass` to `3.4.1` because of build issues
  - https://github.com/twbs/bootstrap-sass/issues/1228#issuecomment-1069310370

## [v0.7.1] - 2022-09-19
### Fixed
- Fix accesibility of btn-default (#37)

## [v0.7.0] - 2022-01-19
### Added
- Add css class for disabling elements in dogu list (#35)

## [v0.6.0] - 2022-01-05
### Changed
- Enhance color contrast for success button, success text

### Fixed
- Logo-image in nav-bar has explicit height

## [v0.5.4] - 2021-12-10
### Fixed
- Fix state information box height to be absolute instead of viewport relative (#31)

## [v0.5.3] - 2021-11-11
### Changed
- Translated the new unauthorized page into english (#29)

## [v0.5.2] - 2021-11-08
### Added
- Automatic delivery of the lottie player script for the lottie animations (#27)

## [v0.5.1] - 2021-11-04
### Fixed
- Gulp building process for the new assets of the unauthorized page (#27)

## [v0.5.0] - 2021-11-04
### Added
- New design for the unauthorized error page (401.html) (#27)

## [v0.4.0] - 2021-10-19
### Added
- Droid Sans included (#25)
- SCSS-Partial to include Droid sans in stylesheet

### Changed
- gulp-pipeline to copy newly added fonts to dist-folder (#25)
- styling of warning button (#21)
- blue vector logo, new file with correct colors
- date in footer of readme
- load external javascript via CDN

## [v0.3.0] - 2021-06-30
### Added
- tooltip styling

## [v0.2.2] - 2021-16-06
### Changed
- navbar-inverse hover behaviour (#18)

## [v0.2.1] - 2021-04-06
### Fixed
- update dist folder


## [v0.2.0] - 2021-04-06
### Changed
- update dependencies in package,json
- changed color values of various css elements to enhance accessibility
- recolor of navbar-inverse
- include two Cloudogu-logos in index as #16
- change gulp-file for logos to process svg-images

### Added
- new class for danger alert with brighter background color
- new class for success alert with brighter background color
- new class for displaying inactive table rows
- several new classes to display a collapsiblesr    
- examples for the new classes in `index.html`
- single svg-logo