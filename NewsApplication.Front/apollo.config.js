module.exports = {
  client: {
    includes: ['./graphql/**/*.tsx', './graphql/**/*.ts', './graphql/**/*.js', './graphql/**/*.jsx'],
    service: {
      localSchemaFile: './schema.json.graphql',
    },
  },
};
