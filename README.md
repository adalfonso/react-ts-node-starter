# React, TypeScript, Node, and Webpack Starter with HMR

## Installation

```bash
  npm i
```

## Environment

Copy sample env and configure values accordingly

```bash
  cp .env.sample .env
```

## Usage

**Development**

```bash
  npm run start:dev
```

- Build app continuously (HMR enabled) to `/dist/`
- App served @ `http://localhost:3000`
- Run with nodemon

**Production**

```bash
  npm run start
```

- Build app once (HMR disabled) to `/dist/`
- App served @ `http://localhost:3000`
- Uses pm2 to daemonize the application. For further reading please see https://pm2.keymetrics.io/docs/usage/quick-start/

**Running in a container**

- Build the image

```bash
  docker build -t react-starter .
```

- Run the container on port 9000

```bash
  docker run -it -p 9000:3000 -v $(pwd):/user/src/app react-starter
```

---

**All commands**

| Command             | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `npm run start:dev` | Build app (HMR enabled) and serve @ `http://localhost:3000`  |
| `npm run start`     | Build app (HMR disabled) and serve @ `http://localhost:3000` |
| `npm run test`      | Run tests                                                    |
| `npm run lint`      | Run linter                                                   |
