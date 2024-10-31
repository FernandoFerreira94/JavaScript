 ultilizar o babel

1: terminal: npm init -y
2: npm install --save-dev @babel/cli @babel/preset-env @babel/core
3: cria arquivo (.gitignore) dentro dela (node_modules)
4: criar arquivo js (main.js).
5: terminal: npx babel main.js -o bundle.js --presets=@babel/env
6: arquivo package.json = abaixo de teste colar "babel": ("babel ./javascript/main.js -o ./javascript/bundle.js --presets=@babel/env -w") caminho dos aquivos tem que estar certo!
7: terminal: npm run babel


Ultilzar o webpack

1: terminal: npm init -y
2: npm install --save-dev @babel/cli @babel/preset-env @babel/core babel-loader webpack webpack-cli regenerator-runtime core-js@
3: criar  pasta global src / index.js
4: criar pasta global public / assets / js
5: criar arquibo global (webpack.config.js)
6: dentro do arquivo webpack.config.js: 
const path = require("path"); // commonJS
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
};

7: dentro do arquivo package.json: chave script: excluir chave 'test' depois adicioanr chave "webpack": "webpack -w"
8: terminal: npm run webpack
9: pasta public cria index.html