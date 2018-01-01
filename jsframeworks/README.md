# Getting Started with .js Frameworks

Referenced from [React vs Angular vs Vue Udemy course](https://www.udemy.com/react-vs-angular-vs-vuejs-by-example/learn/v4/overview)

## React
Create a new project; react-app

```
npm install -g create-react-app
create-react-app react-app
cd react-app
npm start
```

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
