/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const CWD = process.cwd();
const siteConfig = require(CWD + "/siteConfig.js");
const versions = require(CWD + "/versions.json");

class VersionItem extends React.Component {
  render() {
    const version = this.props.version;
    const versionName = version === "next" ? "Master" : version;

    const isCurrentVersion = this.props.currentVersion === version;
    const isNext = version === "next";
    const isRC = version.indexOf("-RC") !== -1;

    const documentationLink = (
      <a
        href={
          this.props.baseUrl +
          "docs/" +
          (isCurrentVersion ? "" : version + "/") +
          "getting-started.html"
        }
      >
        Documentation
      </a>
    );
    const releaseNotesLink = isNext ? null : (
      <a
        href={
          "https://github.com/facebook/react-native/releases/tag/v" +
          version.replace("-RC", "") +
          ".0" +
          (isRC ? "-rc.0" : "")
        }
      >
        Release Notes
      </a>
    );

    return (
      <tr>
        <th>{versionName}</th>
        <td>{documentationLink}</td>
        <td>{releaseNotesLink}</td>
      </tr>
    );
  }
}

class Versions extends React.Component {
  render() {
    let currentVersion = versions.length > 0 ? versions[0] : null;
    let latestVersions = ["next"].concat(
      versions.filter(version => version.indexOf("-RC") !== -1)
    );
    const stableVersions = versions.filter(
      version => version.indexOf("-RC") === -1
    );

    return (
      <div className="pageContainer">
        <Container className="mainContainer documentContainer postContainer">
          <h1>React Native 文档版本</h1>
          <p>
            React Native作为开源项目每月都将发布新的测试版。
            在每个月初，我们将于GitHub上的主分支上创建一个新的候选测试版。发布的候选版本将进行一个月的测试，以允许社区贡献者通过
            。{" "}
            <a href="github.com/facebook/react-native/issues">
              编写条理清晰，可复现的错误报告
            </a>. 以帮助我们处理bug并
            <a href={siteConfig.baseUrl + "docs/upgrading.html"}>
              验证版本的更新。
            </a>{" "}
            最后，候选的测试版将成为新的稳定版本。
          </p>
          <h2>最新版文档</h2>
          <p>
            如果您要查看将要发生的版本更改并向React
            Native贡献者提供更好的反馈，请尽可能使用最新版本的候选版本。
            发布的候选版本引入的更改到正式上线将至少经过两周的测试。
          </p>
          <table className="versions">
            <tbody>
              {latestVersions.map(function(version) {
                return (
                  <VersionItem
                    key={"version_" + version}
                    version={version}
                    baseUrl={siteConfig.baseUrl}
                    currentVersion={currentVersion}
                  />
                );
              })}
            </tbody>
          </table>
          <h2>稳定版</h2>
          <p>
            无论何时使用 <code>react-native init</code>{" "}
            命令创建新项目，都会自动使用最新的稳定版本。
          </p>
          <table className="versions">
            <tbody>
              {stableVersions.map(function(version) {
                return (
                  <VersionItem
                    key={"version_" + version}
                    version={version}
                    baseUrl={siteConfig.baseUrl}
                    currentVersion={currentVersion}
                  />
                );
              })}
            </tbody>
          </table>
          <p>
            您可以随时回到此页面并通过选择不同的版本号来切换您正在阅读的文档版本。
          </p>
        </Container>
      </div>
    );
  }
}

Versions.defaultProps = {
  language: "en"
};

module.exports = Versions;
