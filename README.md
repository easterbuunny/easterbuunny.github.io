# Portfolio - Développeur JavaEE & Angular

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

[![CI - Qualité & Sécurité](https://github.com/easterbuunny/easterbuunny.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/easterbuunny/easterbuunny.github.io/actions/workflows/ci.yml)
[![Déploiement Portfolio](https://github.com/easterbuunny/easterbuunny.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/easterbuunny/easterbuunny.github.io/actions/workflows/deploy.yml)


[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=easterbuunny_easterbuunny.github.io&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=easterbuunny_easterbuunny.github.io)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=easterbuunny_easterbuunny.github.io&metric=coverage)](https://sonarcloud.io/summary/new_code?id=easterbuunny_easterbuunny.github.io)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=easterbuunny_easterbuunny.github.io&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=easterbuunny_easterbuunny.github.io)

---

## 🚀 Déploiement

Ce portfolio est déployé automatiquement via GitHub Pages : **[Visiter le Portfolio](https://easterbuunny.github.io/)**

## 🛠️ Architecture DevSecOps

Ce dépôt implémente une architecture CI/CD stricte :
1. **Intégration Continue (CI)** : À chaque Pull Request et push , le code est analysé par **SonarCloud** (Qualité) et **CodeQL** (Sécurité SAST).
2. **Déploiement Continu (CD)** : Lors d'un push sur `main`, l'application Angular est compilée et déployée sur GitHub Pages.


# Profil

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
