# FrontEnd Challenge, client side

This app render patents results based on instantaneous searched words. Words can be a part of a patent title or a chemical type used on the patent claim. By selecting the search type he wishes to utilize, the user can pick between two options.

For both sorts of searches, a table of results will be displayed, which will include patents title and number. If the user clicks on Patent No, they will be taken to the Google patent page.
If he searches by chemical type, a section will appear that shows how many patents use that chemical type.

To be able to use this search app, user must login first using his Google account.

The results in this app are the result of using an API that was built specifically for this app using ExpressJs. This Backend app is deployed on [Heroku](https://fend-challenge.herokuapp.com/api/v1/patents).

Packages used: axios, react-bootstrap.

## Installation

Clone the repository, change directories, and use YARN to install the dependencies.

```bash
$ git clone https://github.com/khmais93/fend-challenge-client
$ cd fend-challenge-client
$ yarn install
```

## Usage

The project can be run with

- `yarn start`

The project can be viewed in the browser at

- [http://localhost:3000](http://localhost:3000)

## Screenshots

### Home Page

!['Home page'](./docs/images/homePage.png)

### Search by title

!['Patent title'](./docs/images/patentTitle.png)

### Search by chemical type

!['Chemcial type'](./docs/images/chemicalType.png)
