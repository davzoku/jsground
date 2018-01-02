# Getting Started with .js Frameworks

Referenced from [React vs Angular vs Vue Udemy course](https://www.udemy.com/react-vs-angular-vs-vuejs-by-example/learn/v4/overview)

This folder covers simple setup to get started on popular JS frameworks.

Using frameworks, we will create a landing page + FAQ page using:
+ [Bulma CSS Framework](https://bulma.io/)
+ SASS Preprocessor


## React
Create a new project; react-app

```
npm install -g create-react-app
create-react-app react-app
cd react-app
npm start
```

To setup Bulma
```
npm install bulma --save
```

To setup sass is less straightforward in React

Change the following in `package.json`

```
   "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",
```
to :

```
  "scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts build",
    "build": "npm-run-all build-css build-js",
    "test": "react-scripts test --env=jsdom",
```

Then run npm

```
npm install --save node-sass-chokidar
npm install --save npm-run-all
npm start
```
*Read [create-react-app's README for more details](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)*

Install routing

```
npm install react-router-dom --save
```

### Stateful vs Stateless Components
> A react state-full component usually has the class syntax and extends the react component base class. This gives you access to the react life cycle methods such as render, componentDidMount, etc.

>On the other hand, a stateless functional component, is nothing more than a function which returns jsx. You are not in the react life cycle and have no access to the component base class methods.

### [--save vs --save-dev](https://stackoverflow.com/questions/22891211/what-is-the-difference-between-save-and-save-dev)

+ `--save` is used to save the package required for the application to run.  It will be installed together with the package whenever someone runs `npm install` package.

+ `--save-dev` is used to save the package for development purpose. Example: unit tests, minification.  It won't be installed when someone installs your package. It's typically only installed if someone clones your source repository and runs `npm install` in it.


## Angular
Create a new project; angular-app

```
npm install -g @angular/cli
ng new angular-app --routing --style=sass
npm start
```

## Vue
Create a new project; vue-app

```
npm install -g vue-cli
npm init webpack vue-app
y,n,n,n
cd vue-app
npm install
npm start
```

Install Bulma CSS Framework as dependency

```
npm install bulma --save
```

Install sass as development dependency

```
npm install node-sass sass-loader style-loader --save-dev
```

+ Uses Bulma's new navbar instead of the deprecated nav. 

Use axios to pull mock FAQs

```
npm install axios --save
```

## Ember
Create a new project; ember-app

```
npm install -g ember-cli
ember new ember-app
cd ember-app
sudo ember serve
```

* note: admin rights required for ember serve in windows. 
To use sudo in powershell/cmd, use [scoop](https://github.com/lukesampson/scoop) *

## Meteor with Blaze
Create a new project; meteor-blaze-app

```
choco install meteor
meteor create meteor-blaze-app
cd meteor-blaze-app
meteor
```

## Aurelia

Create a new project; aurelia-app

```
npm install -g aurelia-cli
au new aurelia-app
```

Choose setup config; Enter `1` for default ESNext

To start app; `--watch` flag to refresh upon new changes.

```
au run --watch
```


