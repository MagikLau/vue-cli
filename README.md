# vue-cli

## 1. Env
### 1.1. Dev Env

```sh
> systeminfo
Microsoft Windows 10 Pro (10.0.17134)
> node -v
v8.11.3
```

### 1.2. Deploy Env

```sh
$ lsb_release -a

No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 16.04.1 LTS
Release:	16.04
Codename:	xenial

$ node -v
v10.4.1

```

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

![snapshot01](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot01.png)

#### 3.1.2. Create Project

Find your workspace, the workspace of IDE is better. `mkdir` is not needed, vue ui can help u with that.

找到自己的工作目录，推荐在IDE的workspace目录下，不需要单独新建文件夹，vue ui工具会帮忙建项目文件夹

![snapshot02](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot02.png)

##### 3.1.2.1. Detail 详情

![snapshot03](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot03.png)

##### 3.1.2.2. PreSets 预设

![snapshot04](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot04.png)

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

![snapshot05](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot05.png)

According to your choices in Plugins, configure your configurations

根据在功能中的选择，需要进行相应的配置

Css Pre-processors : Less, well this is *less*

And finish it.

#### SameTime

![snapshot06](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot06.png)

Vue-Cli is processing at whole time

### 3.2. Share Project on GitHub

![snapshot07](https://github.com/LauItachi/vue-cli/blob/master/README_assets/snapshot07.png)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
