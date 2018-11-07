# vue-cli

> https://github.com/LauItachi/vue-cli

## 1. Env
### 1.1. Dev Env

```sh
> systeminfo
Microsoft Windows 10 Pro (10.0.17134)
....
> node -v
v10.13.0
```
- IDE: WebStorm (Education ver)
- MySQL: 云数据库 TencentDB - 关系型数据库 - MySQL

### 1.2. OverView

- FrontEnd: Vue
  * SinglePage: Vue Router
  * Communication Client: Socket.io - Client
  * UI: ElementUI
- BackEnd: Express
  * Communication Server: Socket.io - Server
  * DataStorage: MySQL
  
## 2. Install Vuejs
```sh
$ npm install -g @vue/cli
## Ubuntu needs sudo
..... # Installing
$ vue --version
3.0.5
```
ps: If you have the previous vue-cli (1.x or 2.x) package installed globally, you need to uninstall it first with `npm uninstall vue-cli -g`

If the version is 3.x, u can go Vue UI successfully

## 3. Vue UI
```sh
$ vue ui
🚀  Starting GUI...
🌠  Ready on http://localhost:8000
```

### 3.1. Usage

#### 3.1.1. Project Management

![snapshot01](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot01.png?raw=true)

#### 3.1.2. Create Project

Find your workspace, the workspace of IDE is better. `mkdir` is not needed, vue ui can help u with that.

找到自己的工作目录，推荐在IDE的workspace目录下，不需要单独新建文件夹，vue ui工具会帮忙建项目文件夹

![snapshot02](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot02.png?raw=true)

##### 3.1.2.1. Detail 详情

![snapshot03](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot03.png?raw=true)

##### 3.1.2.2. PreSets 预设

![snapshot04](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot04.png?raw=true)

Recommended manual configuration at the beginning, some settings are not necessary at that time.

一开始推荐手动，有一些配置在入手的时候没必要加

##### 3.1.2.3. Functions(Plugins?) 功能

- [x] **Babel**: a JavaScript compiler
- [ ] TypeScript: Not recommended
- [ ] PWA: Progressive Web App, not now
- [x] **Router**: yeah we need it
- [ ] Vuex: state management pattern + library, well not yet
- [x] **CSS Pre-processors**: yeah let's try this
- [ ] Linter: Format Checker, recommended for Non-formator or strict-formater
- [ ] Unit Testing: not yet
- [ ] E2E: not yet 

##### 3.1.2.4. Configurations 配置

![snapshot05](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot05.png?raw=true)

According to your choices in Plugins, configure your configurations

根据在功能中的选择，需要进行相应的配置

Css Pre-processors : Less, well this is *less*

And finish it.

#### SameTime

![snapshot06](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot06.png?raw=true)

Vue-Cli is processing at whole time

### 3.2. Share Project on GitHub

![snapshot07](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot07.png?raw=true)

### 3.3. Common Operation

- Project setup: `npm install`
- Compiles and hot-reloads for development: `npm run serve`
- Compiles and minifies for production: `npm run build`
- Run your tests: `npm run test`
- Lints and fixes files: `npm run lint`

## 4. Vue-Router
**单页应用的核心**
https://router.vuejs.org/guide/

当前通过vue-ui创建的项目已经配置了vue-router，可以查看App.vue中的router-link标签，分别对应Home和About的页面或组件

## 5. WebSocket / Socket.io
[Basic Chat Web App using Express.js, Vue.js & Socket.io](https://medium.com/@jaouad_45834/basic-chat-web-app-using-express-js-vue-js-socket-io-429588e841f0)

(用WebSocket被吐槽……推荐用Socket.io)

## 6. Stucture

![snapshot08](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot08.png?raw=true)

### 6.1 src
```sh
src:.
│  App.vue
│  main.js
│  router.js
│
├─assets
│      logo.png
│
├─plugins
│      element.js
│
├─components
│      Footer.vue
│      Header.vue
│      NavMenu.vue
│
└─views
       Content.vue
       Index.vue
       Login.vue
```

### 6.2 UI

Recommend UI:
- [element-ui](http://element-cn.eleme.io)
- semantic-ui
- muse-ui
- iviewui
- echarts

Use ElementUI to handle Layout & Container

### 6.3 MySQL

That's a simple demo in my code:
> server/util/mysql_util.js 

Export sql_util for methods(init, query).


