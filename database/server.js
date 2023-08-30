const { ApolloServer, gql } = require('apollo-server');

// Criar instância do Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciar o servidor
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
