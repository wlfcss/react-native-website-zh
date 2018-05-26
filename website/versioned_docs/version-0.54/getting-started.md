---
id: version-0.54-getting-started
title: 入门引导
original_id: getting-started
---

<style>
  .toggler li {
    display: inline-block;
    position: relative;
    top: 1px;
    padding: 10px;
    margin: 0px 2px 0px 2px;
    border: 1px solid #05A5D1;
    border-bottom-color: transparent;
    border-radius: 3px 3px 0px 0px;
    color: #05A5D1;
    background-color: transparent;
    font-size: 0.99em;
    cursor: pointer;
  }
  .toggler li:first-child {
    margin-left: 0;
  }
  .toggler li:last-child {
    margin-right: 0;
  }
  .toggler ul {
    width: 100%;
    display: inline-block;
    list-style-type: none;
    margin: 0;
    border-bottom: 1px solid #05A5D1;
    cursor: default;
  }
  @media screen and (max-width: 960px) {
    .toggler li,
    .toggler li:first-child,
    .toggler li:last-child {
      display: block;
      border-bottom-color: #05A5D1;
      border-radius: 3px;
      margin: 2px 0px 2px 0px;
    }
    .toggler ul {
      border-bottom: 0;
    }
  }
  .toggler a {
    display: inline-block;
    padding: 10px 5px;
    margin: 2px;
    border: 1px solid #05A5D1;
    border-radius: 3px;
    text-decoration: none !important;
  }
  .display-guide-quickstart .toggler .button-quickstart,
  .display-guide-native .toggler .button-native,
  .display-os-mac .toggler .button-mac,
  .display-os-linux .toggler .button-linux,
  .display-os-windows .toggler .button-windows,
  .display-platform-ios .toggler .button-ios,
  .display-platform-android .toggler .button-android {
    background-color: #05A5D1;
    color: white;
  }
  block { display: none; }
  .display-guide-quickstart.display-platform-ios.display-os-mac .quickstart.ios.mac,
  .display-guide-quickstart.display-platform-ios.display-os-linux .quickstart.ios.linux,
  .display-guide-quickstart.display-platform-ios.display-os-windows .quickstart.ios.windows,
  .display-guide-quickstart.display-platform-android.display-os-mac .quickstart.android.mac,
  .display-guide-quickstart.display-platform-android.display-os-linux .quickstart.android.linux,
  .display-guide-quickstart.display-platform-android.display-os-windows .quickstart.android.windows,    .display-guide-native.display-platform-ios.display-os-mac .native.ios.mac,
  .display-guide-native.display-platform-ios.display-os-linux .native.ios.linux,
  .display-guide-native.display-platform-ios.display-os-windows .native.ios.windows,
  .display-guide-native.display-platform-android.display-os-mac .native.android.mac,
  .display-guide-native.display-platform-android.display-os-linux .native.android.linux,
  .display-guide-native.display-platform-android.display-os-windows .native.android.windows {
    display: block;
  }
</style>

本文档将帮助您安装并构建您的第一个**React Native 应用程序**。 如果您已经安装了 React Native，则可以跳过本章节进入[Tutorial](tutorial.md)。

<div class="toggler">
  <ul role="tablist" >
    <li id="quickstart" class="button-quickstart" aria-selected="false" role="tab" tabindex="0" aria-controls="quickstarttab" onclick="displayTab('guide', 'quickstart')">
      快速开始
    </li>
    <li id="native" class="button-native" aria-selected="false" role="tab" tabindex="-1" aria-controls="nativetab" onclick="displayTab('guide', 'native')">
      构建本地开发环境
    </li>
  </ul>
</div>

<block class="quickstart mac windows linux ios android" />

[Create React Native App](https://github.com/react-community/create-react-native-app)是构建新的 React Native 应用程序的最简单方法。它允许你启动一个项目，而不需要安装或配置任何工具来构建本地代码 - 不需要安装 Xcode 或 Android Studio（请参阅[注意事项](getting-started.md#caveats)）。

假如你已经安装了 [Node](https://nodejs.org/en/download/)，你可以使用 NPM 工具安装 `create-react-native-app`命令行工具：

```npm
npm install -g create-react-native-app
```

Then run the following commands to create a new React Native project called "AwesomeProject":

接下来运行以下命令来创建一个名为 `AwesomeProject` 的新 React Native 项目：

```npm
create-react-native-app AwesomeProject

cd AwesomeProject
npm start
```

这将为您启动一个开发服务器，并在命令行界面输出一个二维码。

## 运行您的 React Native 应用

在您的 ios 或 android 手机上安装 [Expo](https://expo.io) 客户端，并使其与你的开发服务器处于同一局域网(能互相通信)内，启动 Expo app，扫描命令行终端打印的二维码打开您的项目。

### 修改您的 APP

现在您已经成功运行该应用程序，如果需要修改它。在您选择的文本编辑器中打开 App.js 进行一些修改。保存更改后，手机上的应用程序会自动重新加载。

### 恭喜你

你已经成功运行并修改了你的第一个 React Native APP。

<center><img src="/react-native/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

## 接下来?

* Create React Native App also has a [user guide](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md) you can reference if you have questions specific to the tool.

* 如果你无法使其正常工作，请参看关于`Create React Native App`项目中的[疑难解答](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md#troubleshooting)。

如果您想了解更多关于 React Native 的内容，请继续阅读[教程](tutorial.md)。

### 在模拟器或是虚拟机上运行你的应用程序

`Create React Native App` 使您可以轻松地在物理设备上运行您的 React Native APP，而无需设置开发环境。如果您想在 iOS 模拟器或 Android 虚拟设备上运行应用程序，请参阅有关使用 native 代码构建项目的说明，以了解如何安装 Xcode 以及设置 Android 开发环境。

一旦设置完毕，你就可以通过运行`npm run android`在 Android 虚拟设备上启动你的应用，或者通过运行`npm run ios`（仅限 macOS）在 iOS 模拟器上启动你的应用。

### 注意事项

由于使用`Create React Native App`创建项目时不会生成任何原生代码，因此除了可以在 Expo 客户端应用程序中使用的 React Native API 和组件之外，但无法使用自定义的原生模块。

如果您必须嵌入原生开发代码，那么创建 React Native 应用程序仍然是开始的好方法。在这种情况下，你只需要使用"[eject](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md#ejecting-from-create-react-native-app)"来构建本地项目。如果您使用`eject`，则需要“Building Projects with Native Code”继续处理项目。

`Create React Native App` 将为您的项目配置并使用`EXPO客户端`所支持的最新 React-Native 版本。当 React Native 版本稳定发布后的一周左右，Expo 客户端通常会获得最新的 React Native 版本的支持。 您可以[查看此文档](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md)以了解哪些版本受支持

如果您将 React Native 集成到现有项目中，则您需要跳过`create React Native App`并学习如何设置本地开发环境。 有关为 React Native 配置本机开发环境的说明，请选择上面的“使用本机代码构建项目”。

<block class="native mac windows linux ios android" />

<p>如果您需要在您的项目中构建本地代码，请按下列的说明操作。 例如，如果您要将React Native集成到现有的程序中，又不想使用<a href="getting-started.html" onclick="displayTab('guide', 'quickstart')">Create React Native App`</a>，请仔细阅读本教程</p>

根据你所使用的操作系统、针对的目标平台不同，具体步骤有所不同。如果想同时开发 iOS 和 Android 也没问题，你只需要先选一个平台开始，另一个平台的环境搭建只是稍有不同。

<div class="toggler">
  <span>Development OS:</span>
  <a href="javascript:void(0);" class="button-mac" onclick="displayTab('os', 'mac')">macOS</a>
  <a href="javascript:void(0);" class="button-windows" onclick="displayTab('os', 'windows')">Windows</a>
  <a href="javascript:void(0);" class="button-linux" onclick="displayTab('os', 'linux')">Linux</a>
  <span>Target OS:</span>
  <a href="javascript:void(0);" class="button-ios" onclick="displayTab('platform', 'ios')">iOS</a>
  <a href="javascript:void(0);" class="button-android" onclick="displayTab('platform', 'android')">Android</a>
</div>

<block class="native linux windows ios" />

## Unsupported

<blockquote><p>使用本地开发环境构建IOS程序必须要使用MAC，当然你也可以前往 <a href="getting-started.md" onclick="displayTab('guide', 'quickstart')">快速开始</a> 学习使用 Create React Native App 来代替。</p></blockquote>

<block class="native mac ios" />

## 安装依赖

你需要安装 Node、Watchman,react-native 命令行工具和 xcode。

虽然你可以使用任意编辑器（IDE）来开发你的 App，但你必须要安装 **xcode** 才能完整构建适用于 iOS 的 React Native 应用程序。

<block class="native mac android" />

## 安装依赖

你需要安装 Node、Watchman,react-native 命令行工具以及 JDK 和 Android Studio。

<block class="native linux android" />

## 安装依赖

你需要安装 Node、react-native 命令行工具以及 JDK 和 Android Studio。

<block class="native windows android" />

## 安装依赖

你需要安装 Node、react-native 命令行工具、python2 以及 JDK 和 Android Studio。

<block class="native mac windows linux android" />

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

虽然你可以使用任意编辑器（IDE）来开发你的 App，你最好安装 **Android Studio** 以自动配置安卓的相关依赖包及组件。

<block class="native mac ios android" />

### Node, Watchman

We recommend installing Node and Watchman using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

我们推荐使用 [Homebrew](http://brew.sh/) 来安装 Node 和 Watchman ,在安装好 Homebrew 之后你可以通过下列命令安装：

```
brew install node
brew install watchman
```

如果你已经安装了 Node 环境，请确认其版本 >= 8.0

[Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

[Watchman](https://facebook.github.io/watchman) 是一个由 Facebook 开发的实时监控开发文件变更的工具，我们强烈建议你安装此工具以获得更好的开发体验。

<block class="native linux android" />

### Node

Follow the [installation instructions for your Linux distribution](https://nodejs.org/en/download/package-manager/) to install Node 6 or newer.

<block class='native windows android' />

### Node, Python2, JDK

我们推荐使用[Chocolatey](https://chocolatey.org)来安装 Node 和 Python2,这是一个倍受欢迎的 windows 包管理工具。

React Native 仍然需要安装新版本的[Java SE Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html),当然，你也可以通过 `Chocolatey` 进行安装。

请使用管理员权限运行 windows 命令行(右键点击 CMD 快捷方式选择“使用管理员权限运行”)，再运行以下命令：

```powershell
choco install -y nodejs.install python2 jdk8
```

如果你已经安装了 Node 环境，请确认其版本 >= 8.0，如果你已经安装了 JDK 环境，请确认其版本 >= 8.0

> 当然你也可以在[Node 官方网站](https://nodejs.org/en/download/)上找到其它版本。

<block class="native mac ios android" />

### React Native CLI（命令行工具）

Node 包含了 NPM(包管理器),你可以使用此工具安装 `React Native CLI`

在命令行里运行下列命令进行安装

```
npm install -g react-native-cli
```

> 如果遇到`Cannot find module 'npmlog'`的错误，请尝试直接安装 npm：`curl -0 -L https://npmjs.org/install.sh | sudo sh`。

<block class="native windows linux android" />

### The React Native CLI

Node 包含了 NPM(包管理器),你可以使用此工具安装 `React Native CLI`

在命令行里运行下列命令进行安装

```powershell
npm install -g react-native-cli
```

> 如果遇到`Cannot find module 'npmlog'`的错误，请尝试直接安装 npm：`curl -0 -L https://npmjs.org/install.sh | sudo sh`。

<block class="native mac ios" />

### Xcode

安装 Xcode 的最简单方法是通过 Mac App Store 在线安装。 安装 Xcode 也会安装 iOS 模拟器和构建 iOS 应用程序所必需的各种工具和依赖库。

如果你已经安装了 Xcode,请确保其版本>=8。

#### 命令行工具 Command Line Tools

您还需要安装 Xcode 命令行工具。 打开 Xcode，然后从 Xcode 菜单中选择 **“Preferences ...”**。 转至**Locations panel**选择最新版以安装。

![Xcode Command Line Tools](/react-native/docs/assets/GettingStartedXcodeCommandLineTools.png)

<block class="native mac linux android" />

### Java 开发工具包 Java Development Kit（jdk）

React Native requires a recent version of the Java SE Development Kit (JDK). [Download and install JDK 8 or newer](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) if needed.

React Native 需要最新版本的 Java SE 开发工具包（JDK）。 如果需要，请下载并安装[JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)或更新的版本。

<block class="native mac linux windows android" />

### Android 开发环境

如果您不熟悉 Android 开发，那么请严格按照步骤进行设置。如果您已经熟悉 Android 开发，则只需要增加几项配置即可。但无论哪种情况，请仔细按照以下几个步骤操作。

<block class="native mac windows linux android" />

#### 1. 安装 Android Studio

[下载并安装 Android Studio](https://developer.android.com/studio/index.html)。当安装程序提示您选择安装类型时，请选择“Custom”选项。 确保勾选下列选项：

<block class="native mac windows android" />

* `Android SDK`
* `Android SDK Platform`
* `Performance (Intel ® HAXM)`
* `Android Virtual Device`

<block class="native linux android" />

* `Android SDK`
* `Android SDK Platform`
* `Android Virtual Device`

<block class="native mac windows linux android" />

接下来，点击 "Next" 以完成所有组件的安装。

> 如果组件勾选框为灰色（无法勾选），你也可以选择稍后安装这些组件。（译者注：勾选框为灰色一般是由于未完整下载安装配置安卓基础 SDK，请确保网络连接，中国大陆用户可能需要使用科学上网）

安装完成后，您将看到“欢迎”屏幕，请继续下一步。

#### 2. 安装 Android SDK

Android Studio 默认安装的时最新的 Android SDK。 但是，使用本机代码构建 React Native 应用程序需要 **Android 6.0（Marshmallow）SDK**。 其他的 Android SDK 请通过 Android Studio 中的 SDK Manager 安装。

你可以通过 Android Studio 的启动欢迎屏幕访问 `SDK Manager`：点击 "Configure",选择 "SDK Manager"。

<block class="native mac android" />

![Android Studio Welcome](/react-native/docs/assets/GettingStartedAndroidStudioWelcomeMacOS.png)

<block class="native windows android" />

![Android Studio Welcome](/react-native/docs/assets/GettingStartedAndroidStudioWelcomeWindows.png)

<block class="native mac windows linux android" />

> SDK Manager 也可以通过 Android Studio 的 "Preferences" 选项卡中找到:**Appearance & Behavior** → **System Settings** → **Android SDK**.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the `Android 6.0 (Marshmallow)` entry, then make sure the following items are all checked:

从 SDK Manager 中选择“SDK Platforms”选项卡，然后勾选右下角的“Show Package Details”单选框。 展开 Android 6.0（Marshmallow）条目，确保勾选了下列选项：

* `Google APIs`
* `Android SDK Platform 23`
* `Intel x86 Atom_64 System Image`
* `Google APIs Intel x86 Atom_64 System Image`

<block class="native mac android" />

![Android SDK Manager](/react-native/docs/assets/GettingStartedAndroidSDKManagerMacOS.png)

<block class="native windows android" />

![Android SDK Manager](/react-native/docs/assets/GettingStartedAndroidSDKManagerWindows.png)

<block class="native windows mac linux android" />

接下来，选择 “SDK Tools” 选项卡，勾选右下角的“Show Package Details”单选框，找到并展开 “Android SDK-Tools”,确保选中了`23.0.1`。

<block class="native mac android" />

![Android SDK Manager - 23.0.1 Build Tools](/react-native/docs/assets/GettingStartedAndroidSDKManagerSDKToolsMacOS.png)

<block class="native windows android" />

![Android SDK Manager - 23.0.1 Build Tools](/react-native/docs/assets/GettingStartedAndroidSDKManagerSDKToolsWindows.png)

<block class="native windows mac linux android" />

最后，点击 “Apply” 以下载并安装 Android SDK 和 相关构建工具。

<block class="native mac android" />

![Android SDK Manager - Installs](/react-native/docs/assets/GettingStartedAndroidSDKManagerInstallsMacOS.png)

<block class="native windows android" />

![Android SDK Manager - Installs](/react-native/docs/assets/GettingStartedAndroidSDKManagerInstallsWindows.png)

<block class="native mac windows linux android" />

#### 3. 配置 ANDROID_HOME 环境变量

React Native 工具需要配置环境变量才能正常构建 APP 程序。

<block class="native mac linux android" />

将下列配置加入 `$HOME/.bash_profile` 配置文件:

<block class="native mac android" />

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

<block class="native linux android" />

```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

<block class="native mac linux android" />

> `.bash_profile` 仅仅是 `bash` 的特有配置文件，如果你使用的是其它的 shell，请编辑其对应的配置文件。

使用命令 `source $HOME/.bash_profile` 以加载新的配置文件到 shell 之中，可以使用 `echo $PATH` 来验证 ANDROID_HOME 环境变量是否被成功配置

> 请确认你 Android SDK 的本地路径，你可以从 Android Studio 的 “Preferences” 菜单项中找到并确认： **Appearance & Behavior** → **System Settings** → **Android SDK**。

<block class="native windows android" />

Open the System pane under **System and Security** in the Control Panel, then click on **Change settings...**. Open the **Advanced** tab and click on **Environment Variables...**. Click on **New...** to create a new `ANDROID_HOME` user variable that points to the path to your Android SDK:

![ANDROID_HOME Environment Variable](/react-native/docs/assets/GettingStartedAndroidEnvironmentVariableANDROID_HOME.png)

如果 SDK 已经安装了，默认情况下其安装路径为：

```powershell
c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
```

您可以在 Android Studio “Preferences” 对话框中找到 SDK 的实际位置：**Appearance & Behavior** → **System Settings** → **Android SDK**。

在进行下一步之前，请打开一个新的命令提示窗以确保其加载了新的环境变量。

<block class="native linux android" />

### Watchman (可选)

请根据 [Watchman 安装指南](https://facebook.github.io/watchman/docs/install.html#buildinstall)从源码编译并安装。

> [Watchman](https://facebook.github.io/watchman/docs/install.html)是一个由 Facebook 开发为了监控文件系统是否发生改变的工具，我们强烈建议您安装它以获得更好的性能，但如果您发现该过程过于繁琐，也可以跳过此步骤。

<block class="native mac ios" />

## 构建一个新的应用程序

使用 React Native 命令行工具搭建一个名为 "AwesomeProject" 的新项目：

```
react-native init AwesomeProject
```

如果您想将 React Native 集成到现有的应用程序中，如果您使用“ Create React Native App ”,或者您希望在 react-native 项目中增加对 iOS 的支持（请参考[Platform Specific Code](platform-specific-code.md)），则不必要使用上述命令。

<block class="native mac windows linux android" />

## 构建一个新的应用程序

使用 React Native 命令行工具搭建一个名为 "AwesomeProject" 的新项目：

```
react-native init AwesomeProject
```

如果您想将 React Native 集成到现有的应用程序中，如果您使用“ Create React Native App ”,或者您希望在 react-native 项目中增加对 iOS 的支持（请参考[Platform Specific Code](platform-specific-code.md)），则不必要使用上述命令。

<block class="native mac windows linux android" />

## Android 开发前的准备

你需要一个 Android 设备才能运行您的 React Native Android App。当然这个 Android 设备既可以是一个 **虚拟机** 亦可以是一个 **Android 真机**（译者注：建议开发者使用真机调试）。

但无论你选择哪种方式，您都需要提供设备以运行 Android 应用程序以进行开发。

### 使用物理设备（真机）

如果您有 Android 设备，则可以使用 USB 线与计算机连接，然后按照[说明](running-on-device.md)将其用于开发以代替虚拟机。

### 使用虚拟机

您可以通过在 Android Studio 中打开 “AVD Manager” 来查看可用的 Android 虚拟设备（AVD）列表。 寻找下面的图标：

![Android Studio AVD Manager](/react-native/docs/assets/GettingStartedAndroidStudioAVD.png)

I 如果您刚刚安装了 Android Studio，您可能需要创建一个新的 AVD。 选择 [创建一个新的 AVD](https://developer.android.com/studio/run/managing-avds.html). 选择 "创建虚拟设备", 然后从列表之中选择任意一个设备（手机），再单击“下一步”。

<block class="native windows android" />

![Android Studio AVD Manager](/react-native/docs/assets/GettingStartedCreateAVDWindows.png)

<block class="native mac android" />

![Android Studio AVD Manager](/react-native/docs/assets/GettingStartedCreateAVDMacOS.png)

<block class="native mac windows linux android" />

选择“x86 Images”选项卡，然后查找带有 Android 6.0（Google API）的 Marshmallow API Level 23，x86_64 ABI 系统版本。

<block class="native linux android" />

> 建议您在系统上配置[VM acceleration](https://developer.android.com/studio/run/emulator-acceleration.html#vm-linux) 以提高性能。

<block class="native windows android" />

![Install HAXM](//react-native/docs/assets/GettingStartedCreateAVDx86Windows.png)

> 如果您没有安装 HAXM，请按照[以下说明](https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows) 进行设置，再回到 AVD 管理器。

![AVD List](//react-native/docs/assets/GettingStartedAVDManagerWindows.png)

<block class="native mac android" />

![Install HAXM](//react-native/docs/assets/GettingStartedCreateAVDx86MacOS.png)

> 如果您没有安装 HAXM，请按照[以下说明](https://github.com/intel/haxm/wiki/Installation-Instructions-on-macOS)进行设置，再回到 AVD 管理器。

![AVD List](//react-native/docs/assets/GettingStartedAVDManagerMacOS.png)

<block class="native mac windows linux android" />

点击“Next”，然后选择 “完成” 创建您的 AVD。 此时，您应该能够点击 AVD 旁边的绿色三角形按钮启动它，然后继续下一步。

<block class="native mac ios" />

## 启动 React Native 应用

运行 `react-native run-ios` 在您的 React Native 项目根目录中：

```
cd AwesomeProject
react-native run-ios
```

如果设置没有问题，你将很快看到您的新应用在 ios 模拟器中运行。

![AwesomeProject on iOS](/react-native/docs/assets/GettingStartediOSSuccess.png)

`react-native run-ios` 可以启动你的 APP. 当然你也可以从 Xcode 或 [Nuclide](https://nuclide.io/)中启动.

> If you can't get this to work, see the [Troubleshooting](troubleshooting.md#content) page.

### 在设备上运行

上述命令默认会自动在 iOS 模拟器上运行您的应用程序。 如果您想在 iOS 真机上运行 APP，请按照[此处的说明](running-on-device.md)进行操作。

<block class="native mac windows linux android" />

## 启动 React Native 应用

运行 `react-native run-android` 在您的 React Native 项目根目录中：

```
cd AwesomeProject
react-native run-android
```

如果设置没有问题，你将很快看到您的新应用在 android 模拟器中运行。

<block class="native mac android" />

![AwesomeProject on Android](/react-native/docs/assets/GettingStartedAndroidSuccessMacOS.png)

<block class="native windows android" />

![AwesomeProject on Android](/react-native/docs/assets/GettingStartedAndroidSuccessWindows.png)

<block class="native mac windows linux android" />

`react-native run-android` 可以启动你的 APP. 当然你也可以从 Android Studio 或 [Nuclide](https://nuclide.io/)中启动.

> 如果发生报错，请前往 [Troubleshooting](troubleshooting.md#content) 页面获取帮助.

<block class="native mac ios android" />

### 修改你的应用程序

现在您已经成功运行该应用程序，我们来做一些修改。

<block class="native mac ios" />

* 在编辑器中/IDE 打开 `App.js` 做一些修改。
* 使用 `⌘R` 让您的 IOS 模拟器重新加载本地项目。

<block class="native mac android" />

* 在编辑器中/IDE 打开 `App.js` 做一些修改。
* 按两次 `R` 键或从开发者菜单(`⌘M`)中选择`重新加载(Reload)`以预览您的更改。

<block class="native windows linux android" />

### Modifying your app

现在您已经成功运行该应用程序，我们来做一些修改。

* 在编辑器中/IDE 打开 `App.js` 做一些修改。
* 按两次 `R` 键或从开发者菜单(`Ctrl + M`)中选择`重新加载(Reload)`以预览您的更改。

<block class="native mac ios android" />

### That's it!

恭喜！ 您已成功运行并修改了您的第一个 React Native 应用。

<center><img src="/react-native/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

<block class="native windows linux android" />

### That's it!

恭喜！ 您已成功运行并修改了您的第一个 React Native 应用。

<center><img src="/react-native/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

<block class="native mac ios" />

## Now what?

* 在开发者菜单中打开 [Live Reload](debugging.md#reloading-javascript)。 您保存任何修改时，您的应用程序将会自动重新加载！

* 如果您想将新的 React Native 代码添加到现有原生移动应用程序中，请查看[Integration guide](integration-with-existing-apps.md)指南。

如果您想了解更多关于 React Native 的内容，请继续阅读本[教程](tutorial.md)。

<block class="native windows linux mac android" />

## Now what?

* 在开发者菜单中打开 [Live Reload](debugging.md#reloading-javascript)。 您保存任何修改时，您的应用程序将会自动重新加载！

* 如果您想将新的 React Native 代码添加到现有原生移动应用程序中，请查看[Integration guide](integration-with-existing-apps.md)指南。

如果您想了解更多关于 React Native 的内容，请继续阅读本[教程](tutorial.md)。

<script>
  function displayTab(type, value) {
    var container = document.getElementsByTagName('block')[0].parentNode;
    container.className = 'display-' + type + '-' + value + ' ' +
      container.className.replace(RegExp('display-' + type + '-[a-z]+ ?'), '');
  }
  function convertBlocks() {
    // Convert <div>...<span><block /></span>...</div>
    // Into <div>...<block />...</div>
    var blocks = document.querySelectorAll('block');
    for (var i = 0; i < blocks.length; ++i) {
      var block = blocks[i];
      var span = blocks[i].parentNode;
      var container = span.parentNode;
      container.insertBefore(block, span);
      container.removeChild(span);
    }
    // Convert <div>...<block />content<block />...</div>
    // Into <div>...<block>content</block><block />...</div>
    blocks = document.querySelectorAll('block');
    for (var i = 0; i < blocks.length; ++i) {
      var block = blocks[i];
      while (
        block.nextSibling &&
        block.nextSibling.tagName !== 'BLOCK'
      ) {
        block.appendChild(block.nextSibling);
      }
    }
  }
  function guessPlatformAndOS() {
    if (!document.querySelector('block')) {
      return;
    }
    // If we are coming to the page with a hash in it (i.e. from a search, for example), try to get
    // us as close as possible to the correct platform and dev os using the hashtag and block walk up.
    var foundHash = false;
    if (
      window.location.hash !== '' &&
      window.location.hash !== 'content'
    ) {
      // content is default
      var hashLinks = document.querySelectorAll(
        'a.hash-link'
      );
      for (
        var i = 0;
        i < hashLinks.length && !foundHash;
        ++i
      ) {
        if (hashLinks[i].hash === window.location.hash) {
          var parent = hashLinks[i].parentElement;
          while (parent) {
            if (parent.tagName === 'BLOCK') {
              // Could be more than one target os and dev platform, but just choose some sort of order
              // of priority here.
              // Dev OS
              if (parent.className.indexOf('mac') > -1) {
                displayTab('os', 'mac');
                foundHash = true;
              } else if (
                parent.className.indexOf('linux') > -1
              ) {
                displayTab('os', 'linux');
                foundHash = true;
              } else if (
                parent.className.indexOf('windows') > -1
              ) {
                displayTab('os', 'windows');
                foundHash = true;
              } else {
                break;
              }
              // Target Platform
              if (parent.className.indexOf('ios') > -1) {
                displayTab('platform', 'ios');
                foundHash = true;
              } else if (
                parent.className.indexOf('android') > -1
              ) {
                displayTab('platform', 'android');
                foundHash = true;
              } else {
                break;
              }
              // Guide
              if (parent.className.indexOf('native') > -1) {
                displayTab('guide', 'native');
                foundHash = true;
              } else if (
                parent.className.indexOf('quickstart') > -1
              ) {
                displayTab('guide', 'quickstart');
                foundHash = true;
              } else {
                break;
              }
              break;
            }
            parent = parent.parentElement;
          }
        }
      }
    }
    // Do the default if there is no matching hash
    if (!foundHash) {
      var isMac = navigator.platform === 'MacIntel';
      var isWindows = navigator.platform === 'Win32';
      displayTab('platform', isMac ? 'ios' : 'android');
      displayTab(
        'os',
        isMac ? 'mac' : isWindows ? 'windows' : 'linux'
      );
      displayTab('guide', 'quickstart');
      displayTab('language', 'objc');
    }
  }
  convertBlocks();
  guessPlatformAndOS();
</script>
