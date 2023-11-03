# ATG frontend case

## Introduction

ATG frontend case is a pure React single page. More details regarding required features are available in the [Features](#Features) section below.

### 🏠 [Homepage](https://github.com/4886Talga/atg-harry-kart-master)

## Prerequisites

- TypeScript
- React
- Jest
- Cypress

## Features

User should be able to:

- Select a bet type (`V75`, `V86`, `GS75`) and the most recent result for that bet type should be displayed
  - Following should be displayed: bet type, track name(s), start time
- See information about the selected bet type’s races
  - Following should be displayed: race number, race name, race start time
- See information about the starting horses in the race
  - Following should be displayed: start number, horse name, driver first and last name
- See detailed information about each horse by clicking a horse’s row
  - Following should be presented: trainer first and last name, name of the horse father

## Racing info API

### Products

**GET** https://www.atg.se/services/racinginfo/v1/api/products/{betType}

**Parameters:**
| Name | Examples |
| ------------- | -------------------- |
| betType | `V75`, `V86`, `GS75` |

### Games

**GET** https://www.atg.se/services/racinginfo/v1/api/games/{id}

**Parameters:**
| Name | Examples |
| ------------- | ------------------- |
| id | `V75_2021-02-13_6_5`|

## For Development

### Install

```sh
npm install

```

### Usage

Start the page on [localhost:3000/](http://localhost:3000/).

```sh
npm run start
```

### Testing

This project holds end-to-end-tests that aim to test through the public parts of `ATG frontend case` and unit tests.

| Command               | description                                  |
| --------------------- | -------------------------------------------- |
| `npm run test:unit`   | run all unit tests                           |
| `npm run cypress:dev` | the Cypress Launchpad                        |
| `npm run cypress:run` | run all e2e tests                            |
| `npm run test:e2e`    | starts the application and run all e2e tests |

### Linting

Here we are getting help from ESLint and Prittier to clean(fix) our code.

| Command            | description                               |
| ------------------ | ----------------------------------------- |
| `npm run lint`     | use eslint and prittier to check the code |
| `npm run lint:fix` | cleaning up                               |
