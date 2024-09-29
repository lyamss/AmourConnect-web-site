# Projet AmourConnect - FrontEND - React (NextJS) and Typescript

![Welcome Page](./public/assets/images/welcome_page.png)

<p align="center">
  <img src="./src/app/favicon.ico" width="50" height="50">
</p>

The AmourConnect Client project contains the Web Site.

The client Web Site project is written in TypeScript using React with NextJS.

## Related projects:

- [amourconnect/server](https://github.com/amourconnect/server): The core infrastructure backend (API, database, Docker, etc).

# To start front

*If you have Docker*

*⛔ Start the Database first before (in the folder server_api/DataBase)*

```
docker compose -f .\compose.yaml up -d
```

**Clean the caches if that doesn't work :**

```
docker builder prune --force
```

**Otherwise do this manually if you don't have Docker (Use NodeJS)**

```
npm install -g npm@latest && npm update && npm update --save-dev && npm install && npm run dev
```

**☢️WARNING, you can use npm run build and start, you can only start it in a Unix/Linux OS. (You will need to modify the start port in the package.json)**


## Contribute

Code contributions are welcome! Please commit all pull requests to the "main" branch. Please also commit all your development code to the "dev" branch.

Security audits and feedback are welcome. Please open an issue or email us privately if the report is sensitive. You can read our security policy in the [`SECURITY.md`](SECURITY.md) file.

No grant of rights in AmourConnect's trademarks, service marks, or logos is granted (except as may be necessary to comply with applicable notice requirements).