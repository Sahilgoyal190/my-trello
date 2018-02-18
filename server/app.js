const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoConn = require('./mongoConnection')();
const { makeExecutableSchema } = require('graphql-tools');
const {graphiqlExpress, graphqlExpress} = require('apollo-server-express')
const {schema}  = require('./graphql_layer/schema')
const graphqlHTTP = require('express-graphql');
let app = express();

// Configure morgan to log your requests, with a standard date & time format
morgan.token('time', (req, res) => new Date().toISOString());
app.use(cors())
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Initialize the app

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));




// Mount the APIs specific to version

// app.use('/', graphqlHTTP({
//     schema: schema,
//     graphiql: ((process.NODE_ENV !== 'production') ? true : false),
//     /*rootValue: {},
//     context: {},
//     pretty: false,
//     formatError: undefined*/
//   }));
app.use(require('./api/v1'));

module.exports = app;