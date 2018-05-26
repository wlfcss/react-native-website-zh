# [facebook-react native 中文文档](https://facebook.github.io/react-native/) &middot;
---
本项目fork于[React Native website](https://github.com/facebook/react-native-website)项目，并与[react-native-docsZh](https://github.com/wlfcss/react-native-docsZh)文档翻译项目进行同步，但移除了`0.5 - 0.52`版本的文档。

您可前往[React-Native-CNDocs](http://rn.wlfcss.com/react-native/)

## 项目向导

### 准备

1. Git
1. Node: 版本要求 >= 6.2.2 (Node v8)
1. Yarn: 请参阅
    [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/)
1. git clone `react-native-website-zh`
1. 依赖安装: 运行 `yarn global add docusaurus-init` 或 `npm install --global docusaurus-init`
1. Prettier: 查阅
    [Prettier website for installation instructions](https://prettier.io/docs/en/install.html)

### 安装

1. `cd react-native-website` 进入项目根目录
1. `cd website` 进入项目打包好的网站部分
1. `yarn` 安装网站的npm依赖关系（或者`npm install`，如果不使用 `yarn`）

### Running locally

1. `yarn start` 启动服务器（或者`npm start`，如果不使用 `yarn`）
1. `open http://localhost:3000/` to open the site in your favorite browser

# Overview

If you're here because you would like to contribute an edit or addition to the
docs, you'll probably want to take a look at the 'docs/' directory.

To edit the internals of how the site is built, you may want to get familiarized
with how the site is built. The React Native website is a static site generated
using [Docusaurus](https://docusaurus.io). The website configuration can be
found in the 'website/' directory. Visit the Docusaurus website to learn more
about all the avaible configuration options.

## Directory Structure

The following is a high level overview of relevant files and folders.

```
react-native-website/
├── docs/
│   ├── assets/
│   ├── accessibility.md
│   └── ...
└── website/
    ├── blog/
    │   ├── assets/
    │   ├── 2015-03-26-react-native-bringing-modern-web-techniques-to-mobile.md
    │   └── ...
    ├── core/
    ├── pages/
    │   └── en/
    │       ├── ...
    │       ├── index.js
    │       └── ...
    ├── static/
    │   ├── css/
    │   ├── img/
    │   └── js/
    ├── versioned_docs/
    │   ├── version-0.5/
    │   └── ...
    ├── versioned_sidebars/
    │   ├── version-0.5-sidebars.json
    │   └── ...
    ├── showcase.json
    ├── sidebars.json
    ├── siteConfig.js
    └── versions.json
```

## Documentation sources

As mentioned above, the 'docs/' folder contains the source files for all of the
docs in the React Native website. In most cases, you will want to edit the files
within this directory. If you're adding a new doc or you need to alter the order
the docs appear in the sidebar, take a look at the 'sidebars.json' file in the
'website/' directory. The sidebars file contains a list of document ids that
should match those defined in the header metadata (aka frontmatter) of the docs
markdown files.

### Versioned docs

The React Native website is versioned as to allow users to go back and see the
API reference docs for any given release. A new version of the website is
generally made whenever there is a new React Native release. When this happens,
any changes made to the 'docs/' and 'website/sidebars.json' files will be copied
over to the corresponding location within 'website/versioned_docs/' and
'website/versioned_sidebars/'.

> Do not edit the auto-generated files within 'versioned_docs/' or
> 'versioned_sidebars/' unless you are sure it is necessary. Edits made to older
> versions will not be propagated to newer versions of the docs.

Docusaurus keeps track of the list of versions for the site in the
'website/versions.json' file. The ordering of the versions in this file should
be in reverse chronological order.

#### Cutting a new version

1.  `cd react-native-website` to go into the project root
1.  `cd website` to go into the website portion of the project
1.  Run `yarn version <version>` where '<version>' is the new version being
    released.

## Website configuration

The main config file for the website can be found at 'website/siteConfig.js'.
This file tells
[Docusaurus how to build the website](http://docusaurus.io/docs/en/site-config.html).
Edits to this file are rarely necessary.

The 'pages/' subdirectory contains the React components that make up the
non-documentation pages of the site, such as the homepage.

The 'showcase.json' file contains the list of users that are highlighted in the
React Native showcase.

## Contributing

### Create a branch

1.  `git checkout master` from any folder in your local `react-native-website`
    repository
1.  `git pull origin master` to ensure you have the latest main code
1.  `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch`
    with a suitable name) to create a branch

### Make the change

1.  Follow the "Running locally" instructions
1.  Save the files and check in the browser. Some changes may require a server restart.
1.  Changes to /docs will only be visible in the latest version of the documentation (master).

`open http://localhost:3000/react-native/versions.html`to see other versions.

### Test the change

1.  If possible, test any visual changes in all latest versions of common
    browsers, on both desktop and mobile.

### Push it

1.  Run `yarn prettier` to ensure your changes are consistent with other files in
    the repo
1.  `git add -A && git commit -m "My message"` (replacing `My message` with a
    commit message, such as `Fixed header logo on Android`) to stage and commit
    your changes
1.  `git push my-fork-name the-name-of-my-branch`
1.  Go to the
    [react-native-website repo](https://github.com/facebook/react-native-website)
    and you should see recently pushed branches.
1.  Follow GitHub's instructions.
1.  If possible, include screenshots of visual changes.

---

## License

React Native is [MIT licensed](./LICENSE).

React Native documentation is [Creative Commons licensed](./LICENSE-docs).
