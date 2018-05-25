/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + "/siteConfig.js");

const pinnedApps = siteConfig.users.filter(app => {
  return app.pinned;
});

class Button extends React.Component {
  render() {
    return (
      <a
        className="big-button"
        href={this.props.href}
        target={this.props.target}
      >
        {this.props.children}
      </a>
    );
  }
}

class HomeCallToAction extends React.Component {
  render() {
    return (
      <div>
        <Button
          href={siteConfig.baseUrl + "docs/getting-started.html"}
          target="_self"
        >
          入门引导
        </Button>
        <Button href={siteConfig.baseUrl + "docs/tutorial.html"} target="_self">
          基础学习
        </Button>
      </div>
    );
  }
}

class Hero extends React.Component {
  render() {
    return <div className="hero">{this.props.children}</div>;
  }
}

class HeaderHero extends React.Component {
  render() {
    return (
      <Hero>
        <div className="text">React Native</div>
        <div className="minitext">
          使用JavaScript以及React构建原生移动应用
        </div>
        <div className="buttons-unit">
          <HomeCallToAction />
        </div>
      </Hero>
    );
  }
}

class AppList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._renderApp = this._renderApp.bind(this);
  }

  render() {
    return <div>{this.props.apps.map(this._renderApp)}</div>;
  }

  _renderApp(app, i) {
    return (
      <div className="showcase" key={i}>
        <a href={app.infoLink}>{this._renderAppIcon(app)}</a>
      </div>
    );
  }

  _renderAppIcon(app) {
    let imgSource = app.icon;
    if (!app.icon.startsWith("http")) {
      imgSource = siteConfig.baseUrl + "img/showcase/" + app.icon;
    }
    return <img src={imgSource} alt={app.name} />;
  }
}

class Features extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>使用 JavaScript 以及 React 构建原生移动应用</h2>
              <MarkdownBlock>
                React Native 让您仅仅只使用JavaScript来构建移动应用程序。它的设计思想与React保持一致，让您可以通过声明组件以构建丰富的移动应用UI。
              </MarkdownBlock>
            </div>
            <MarkdownBlock>
              {`\`\`\`javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WhyReactNativeIsSoGreat extends Component {
  render() {
    return (
      <View>
        <Text>
          If you like React on the web, you'll like React Native.
        </Text>
        <Text>
          You just use native components like 'View' and 'Text',
          instead of web components like 'div' and 'span'.
        </Text>
      </View>
    );
  }
}
\`\`\``}
            </MarkdownBlock>
          </div>
        </Container>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>React Native 程序是一款真正的移动应用程序</h2>
              <MarkdownBlock>
                使用React Native，您构建的是一个真正的移动应用程序，而不是“移动Web App”，“HTML5 APP”或“混合APP”。这与使用 Objective-C 或 Java 构建的应用程序并无区别。React Native使用与原生iOS和Android应用程序相同的基本UI模块。您只需使用JavaScript和React将这些模块组合在一起即可。
              </MarkdownBlock>
            </div>
            <MarkdownBlock>
              {`\`\`\`javascript
import React, { Component } from 'react';
import { Image, ScrollView, Text } from 'react-native';

class AwkwardScrollingImageWithText extends Component {
  render() {
    return (
      <ScrollView>
        <Image
          source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
          style={{width: 320, height:180}}
        />
        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </Text>
      </ScrollView>
    );
  }
}
\`\`\`
`}
            </MarkdownBlock>
          </div>
        </Container>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>无需在重编译上浪费时间</h2>
              <div>
                <MarkdownBlock>
                  React Native可以让您更快地构建应用程序，无需花费时间重新编译，借助 [HotReloading](http://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html)，可以立即重新加载预览您的应用程序。您甚至可以在保留应用程序状态的同时运行更新的代码。请试一试 - 这是一种神奇的体验。
                </MarkdownBlock>
              </div>
            </div>
            <img src="https://media.giphy.com/media/13WZniThXy0hSE/giphy.gif" />
          </div>
        </Container>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>嵌入您所需要的原生代码</h2>
              <div>
                <MarkdownBlock>
                  React Native 能与使用 Objective-C，Java 或 Swift 编写的原生组件顺利组合。如果您需要优化应用程序的某些方面，则可以简单地使用原生代码替换它。在React Native中构建应用程序的一部分并直接使用原生代码也很容易 - 请参考Facebook的相关APP。
                </MarkdownBlock>
              </div>
            </div>
            <MarkdownBlock>
              {`
\`\`\`javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TheGreatestComponentInTheWorld } from './your-native-code';

class SomethingFast extends Component {
  render() {
    return (
      <View>
        <TheGreatestComponentInTheWorld />
        <Text>
          TheGreatestComponentInTheWorld could use native Objective-C,
          Java, or Swift - the product development process is the same.
        </Text>
      </View>
    );
  }
}
\`\`\`
`}
            </MarkdownBlock>
          </div>
        </Container>
      </div>
    );
  }
}

class MiniShowcase extends React.Component {
  render() {
    return (
      <div className="home-showcase-section">
        <h2>谁在使用React Native？</h2>
        <p>
          成千上万的世界500强企业和优秀的创业公司正在使用React Native构建APP。如果您想了解React Native可以实现什么功能{" "}
          <a href={siteConfig.baseUrl + "showcase.html"}>
            请看看这些应用程序
          </a>！
        </p>
        <div className="logos">
          <AppList apps={pinnedApps} />
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <HeaderHero />
        <Features />
        <MiniShowcase />
        <Hero>
          <HomeCallToAction />
        </Hero>
      </div>
    );
  }
}

module.exports = Index;
