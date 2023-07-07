# JS Scraping Project

This project is a JS scraping application that retrieves data from an API 

We retrieve the following information from the API [https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/?rows=100](https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/?rows=100):
- Nom (Name)
- Domaine (Domain)
- Commune (City)
- Site Web (Website)

## Prerequisites

-     Node.js 14 or later

## Installation

1. Clone the repository:

```bash
    git clone
```

2. Install the dependencies:

```bash
    npm install
```

## Usage

To run the scraping application and retrieve festival data, use the following command:

```bash
    node index.js
```
This will fetch the festival data from the API and display it in the console.
When calling the scrapeFestivals, filter takes into account four parameters: region, domain, department, and usual start month with an example.

## Tests

To run the unit tests, use the following command:

```bash
   npm run test
```

This will execute the test suite and display the test results using Jest.

## Contributors

- Joanne Massillon @joannemas

## Licence

This project is licensed under the MIT License.