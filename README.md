# Sample Project

The project is organized as a monorepo using [Yarn Workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/). There are multiple project within a single a repository, making code and component sharing easier across packages.

### Quick start

- Install dependencies using `yarn install`.
- Navigate to packages/server/ and run `yarn build` and `yarn start` to start the local dev GraphQL server.
- Navigate to packages/app/ and run `yarn start` to start the local dev Web server (Create React App).

Alternatively you can run either package from project root using `yarn workspace @sample/app start` or `yarn workspace @sample/server build` and `yarn workspace @sample/server start`.

### Project maintenance

To check if dependencies need to be upgraded run `yarn outdated` at project root. Update by running `yarn update` (all deps) or `yarn update outdated_dependency_name@latest` (individual dep).

### Adding a new service

- Pick an existing service and copy it
- Replace all the names and alter business logic accordingly
- Add export to services/index.js
- Add imports to dataSources.js
- Add typedefs and resolvers to schema.js
