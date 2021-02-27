# Next.js + Docker + TypeScript + lint

Starter TypeScript template for [Learn Next.js](https://nextjs.org/learn) with Docker and linting. Using Docker setup from [https://dev.to/chrsgrrtt/dockerising-a-next-js-project-1ck5](https://dev.to/chrsgrrtt/dockerising-a-next-js-project-1ck5).

# Install

Run docker-compose to spin up the services:

```
docker-compose build
```

# Installing new dependencies

New dependencies can be installed using the `npm` service, which will install the dependencies on the volume shared with `dev` service:

```
docker-compose run npm i -s moment
```

# VS Code settings

If you need `node_modules` on the host to enable formatting and linting in VS Code, you will need to also install the dependencies on the host:

```
npm install
```

In VS Code, `Ctrl + Shift + P` > `Preferences: Open Settings (JSON)`; add these items:

```json
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"eslint.validate": ["typescript", "typescriptreact"],
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

# Run dev

Run the `dev` service:

```
docker-compose up dev
```

Next.js runs at [http://localhost:3000](http://localhost:3000).
