# REST Template

## Project structure

`src/index.ts` represents the entry point for the application.

`src/env.ts` loads the environment variables and verifies that all keys are
configured properly. Create a `.env` file to configure the variables.

`src/container.ts` sets up the dependency-injection container.

`src/server.ts` sets up the server application which listens for requests.

Entities can be represented by directories of services. As an example,
`CaseController.ts` and `CaseService.ts` have been configured. Simply add more
services as required.

Refer to [TypeDI
documentation](https://docs.typestack.community/typedi/01-getting-started) for
more information on the dependency-injection framework.

Refer to [routing-controllers
documentation](https://github.com/typestack/routing-controllers#using-di-container)
for more information on the controllers.

## Getting started

We are using [pnpm](https://pnpm.io/) for package management. Simply install with `npm i -g pnpm`.

Then, run `pnpm i` in the project root to install all dependencies.

Copy `.default.env` into a file `.env` and configure as necessary.

Once that's done, run `npm run dev` to launch the development server.

