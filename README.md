# LAB - 02

## Basic Express Server

### Author: Hayden Cleaver

- [tests report](https://github.com/HaydenCleaver/server-deployment-practice/actions)
- [heroku-dev](https://dashboard.heroku.com/apps/hayden-server-deploy-dev)
- [heroku-main](https://hayden-server-deploy-prod.herokuapp.com/)
### Setup

#### `.env` requirements

- `PORT` - 3001

#### Running the app

- `npm start`
- Endpoint: `/`
  - Returns 'Home Path'
- Endpoint: `/person?name=NAME`
  - Returns 'NAME'

#### Tests

- Unit Tests: `npm run test`

#### UML

(Created with [lucid-chart](https://www.lucidchart.com/blog/types-of-UML-diagrams))

![UML Diagram](UML.png)
