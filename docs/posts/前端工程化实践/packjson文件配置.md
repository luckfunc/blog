### package.json配置，用于区分不同环境
```json
{
    "name": "package-name",
    "version": "1.0.0",
    "main": "./src/index.js",
    "scripts": {
        "start-win": "npm-run-all -p npm run build:web-dev start:web build:ssr-node-dev start:node",
        "start": "npm run build:web-dev&npm run start:web&npm run build:ssr-node-dev&&npm run start:node",
        "start:web": "webpack-dev-server --config=webpack-dev.config.js --env.mock",
        "start:web-qa": "webpack-dev-server --config=webpack-dev.config.js  --env.qa",
        "start:web-pro": "webpack-dev-server --config=webpack-dev.config.js  --env.pro",
        "build:web": "cross-env WEB_ENV=production webpack --config=webpack-build.config.js",
        "build:web-dev": "cross-env WEB_ENV=development webpack --config=webpack-build.config.js",
        "start:node": "cross-env ENV=development node server/index.js",
        "start:node-qa": "cross-env ENV=qa node server/index.js",
        "start:node-pro": "cross-env ENV=pro node server/index.js",
        "build:ssr-node-dev": "webpack NODE_ENV=development --config=webpack-ssr-node.config.js",
        "build:ssr-node": "webpack NODE_ENV=production --config=webpack-ssr-node.config.js",
        "connect:qa-win": "npm-run-all -p npm run build:web-dev start:web-qa build:ssr-node-dev start:node-qa",
        "connect:qa": "npm run build:web-dev&npm run start:web-qa&npm run build:ssr-node-dev&&npm run start:node-qa",
        "connect:pro-win": "npm run build:web-dev&npm-run-all -p build:ssr-node-dev start:web-pro start:node-pro",
        "connect:pro": "npm run build:web-dev&npm run start:web-pro&npm run build:ssr-node-dev&&npm run start:node-pro",
        "lint": "eslint src"
    }
}
```
>在package.json中配置环境变量，并在webpack中根据需要进行不同环境的配置。