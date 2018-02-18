
const { makeExecutableSchema } = require('graphql-tools');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
const { getAllBoards, getBoardByID,updateBoard } = require('../api/v1/boards/boards.controller')


// The GraphQL schema in string form
const typeDefs = `
type board { 
    id: Int!,
    project_name: String!,
    description: String,
    backlog: Int,
    doing: Int,
    done: Int,
    lists: [List]
}

type List {
    name: String!,
    description: String,
    taskList : [Task]
}

type Task {
    name: String!,
    description: String!,
    dueDate: String!,
    status: String!
}

type Query {
    boards: [board], 
    board (id: Int): board,
  }


`;

// The resolvers
const resolvers = {
    Query: {
        boards: () => {
            return new Promise(resolve => {
                getAllBoards(function (err, results) {
                    resolve(results)
                })
            })

        },
        board : (root,args) =>{
            return new Promise(resolve => {
                getBoardByID(args.id, function (err, results) {
                    resolve(results)
                })
            })
        }
    },
    // Mutation: {
    //     updateBoard: (root, args) => {
    //         return new Promise(resolve => {
    //             console.log(args);
    //         })
    //       },
    //  }

};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


module.exports = {
    schema
}