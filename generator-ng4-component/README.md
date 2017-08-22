## Introduction

Ng4 Application Development Framework.

## Prerequisites

Before you start using this development framework and the generator, make sure you have installed all required software and done all the
necessary configuration.

## Installing Yeoman and the Component Generator

First, install [Yeoman](http://yeoman.io):

```sh
npm install -g yo
```

Then the Ng4 Component Generator:

```sh
npm install -g generator-ng4-component
```

##  Generating a new component project

First, move into the folder where you want create your component.

```sh
yo generator-ng4-component
```

```sh
npm install
npm run build
```

Alternatively you can use generator with `install` switch to trigger automatic installation of dependencies via `npm install` script:

```sh
yo generator-ng4-component --install
```

_Optinally you can use `npm run link` script to locally link ADF libraries if necessary._

## npm scripts

| Command | Description |
| --- | --- |
| npm run build | compiles component |
| npm run build:w | compiles component, watches for changes and recompiles if needed |
| npm run test | compiles, runs and watches the karma unit tests (console version) |
| npm run test-browser | compiles, runs and watches the karma unit tests (browser version) |
| num run coverage | runs unit tests, generates and opens code coverage report in browser |
| npm run link | Link ADF components locally by means of `npm link` |
| npm run build.umd |Build the UMD bundle package |

## Running demo

If you have answered `Yes` for the generator question `Do you want a demo project to be generated?` you will get an additional demo project in the `demo` folder.

You will need installing npm dependencies for the generated demo project separately:

```sh
cd demonpm run test
npm install
npm run start
```

_Optinally you can use `npm run link` script to locally link ADF libraries if necessary._

## Contributing to the generator

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make some changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

>To contribute to the existing code base add test cases to cover the new behaviour, and make sure all the existing tests are still green.

To test the generator run:

```sh
npm run test
```

### Debugging generator

```sh
# OS X / Linux
DEBUG=yeoman:generator yo generator-ng4-component

# Windows
set DEBUG=yeoman:generator & yo generator-ng4-component
```

More on [debugging generators](http://yeoman.io/authoring/debugging.html).

## Advanced options

```sh
yo generator-ng4-component --privaate
```

Typically used for internal purposes and adds the following extras to the generated project structure:

- adds license headers to all code files
- configures component `package.json` with additional license checker configurations (devDependencies, scripts, etc.)

