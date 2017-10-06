'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
var _ = require('lodash');

module.exports = class extends Generator {
    prompting() {
        this.log(yosay(
            'Welcome to the epic ' + chalk.red('generator-ng4') + ' generator!'
        ));

        const prompts = [{
            name: 'projectName',
            message: 'What\'s the name of your component?',
            validate: function (str) {
                return str.length > 0;
            }
        },
            {
                name: 'componentPrefix',
                message: 'What\'s the name of your component prefix?',
                validate: function (str) {
                    return str.length > 0;
                }
            }];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    writing() {
        this.props.projectNameCamelCase = _.chain(this.props.projectName).camelCase().upperFirst();
        let normalCopy = [
            "_.angular-cli.json",
            "_.editorconfig",
            "_.gitignore",
            "_gulpfile.js",
            "_karma.conf.js",
            "_package.json",
            "_protractor.conf.js",
            "_tsconfig.json",
            "_tslint.json",

            "src/_favicon.ico",
            "src/_index.html",
            "src/_main.ts",
            "src/_polyfills.ts",
            "src/_styles.scss",
            "src/_test.ts",
            "src/_tsconfig.app.json",
            "src/_tsconfig.spec.json",
            "src/_typings.d.ts",

            "src/demo/_app.component.scss",
            "src/demo/_app.component.spec.ts",
            "src/demo/_app.component.ts",
            "src/demo/_app.module.ts",
            "src/demo/_app.component.html",

            "src/environments/_environment.prod.ts",
            "src/environments/_environment.ts",

            "src/app/_index.ts"
        ];
        normalCopy.forEach(i => {
            this.fs.copyTpl(
                this.templatePath(i),
                this.destinationPath(i.replace("_", "")),
                this.props
            );
        });
        let i18nAssets = [
            "src/assets/i18n/_ar.json",
            "src/assets/i18n/_en.json"
        ];
        i18nAssets.forEach(i => {
            var path = i.replace("i18n", this.props.projectName + "/i18n");
            this.fs.copy(
                this.templatePath(i),
                this.destinationPath(path.replace("_", ""))
            );
        });
        this.fs.copyTpl(
            this.templatePath("src/app/_ng4-bpm.module.ts"),
            this.destinationPath("src/app/" + this.props.projectName + ".module.ts"),
            this.props
        );
        let components = [
            "src/app/ng4-bpm/_ng4-bpm.component.ts",
            "src/app/ng4-bpm/_ng4-bpm.component.spec.ts",
            "src/app/ng4-bpm/_ng4-bpm.component.scss",
            "src/app/ng4-bpm/_ng4-bpm.component.html",
            "src/app/ng4-bpm/_config.ts",
        ];
        components.forEach(i => {
            var path = i
                .replace("ng4-bpm.component", this.props.projectName + ".component")
                .replace("ng4-bpm", this.props.projectName);
            this.fs.copyTpl(
                this.templatePath(i),
                this.destinationPath(path.replace("_", "")),
                this.props
            );
        })
    }

    install() {
        this.installDependencies();
    }

};
