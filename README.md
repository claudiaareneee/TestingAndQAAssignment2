# QA Continuous Integration Assignment

[![Build Status](https://travis-ci.com/claudiaareneee/TestingAndQAAssignment2.svg?branch=master)](https://travis-ci.com/claudiaareneee/TestingAndQAAssignment2) [![Coverage Status](https://coveralls.io/repos/github/claudiaareneee/TestingAndQAAssignment2/badge.svg?branch=master)](https://coveralls.io/github/claudiaareneee/TestingAndQAAssignment2?branch=master)
[Staging Environment](https://obscure-headland-29999.herokuapp.com/) · [Production Environment](https://powerful-ravine-59414.herokuapp.com/)

## Objective

Develop testing and deployment plans that enable continuous deployment of an existing software system that is extended for web access. Create automated acceptance tests (end-to-end testing) and integration (regression) tests.

## Prerequisites

This code was written in JavaScript and NodeJS. NodeJS provides a framework for allowing JavaScript Code to be used for backend and server-side development. To run this application, NodeJS must be installed. It can be installed from the [NodeJS download page](https://nodejs.org/en/) (The recommended download was used for this project). This will install both NodeJS and the Node Package Manager (```npm```), which is required to run Node commands in the terminal.

## Setup

### Download the Code

This code can be directly downloaded by navigating to the link above or running the following commands in a terminal.
To use git to download the code, open a terminal in a desired location. Run the following commands to clone the repository:

```bash
git clone https://github.com/claudiaareneee/TestingAndQAAssignment2.git
cd TestingAndQAAssignment2
```

### Install dependencies

NodeJS applications often have required dependencies. These dependencies are often stored in the ```package.json``` file in the root of the project. In order to install the dependencies necessary for this project, run the following command:

```bash
npm install
```

### Execution

To run this program on a localhost server, run the following command in the terminal. This will create a localhost server at [localhost:3000](http://localhost:3000/).  

```bash
npm start
```

To run the unit tests for this application locally, run the following command:

```bash
npm test
```

If this fails at first, try running ```npm install -g testcafe``` in the terminal. npm test should run after TestCafe is installed globally.

## Tool Description and Heroku Platform Usage

This application utilizes many tools and services including GitHub, Heroku, Travis CI, Coveralls, and Sider in the development pipeline. Each of these play an important role in the testing and quality assurance of the application. The role of each of these tools in the pipeline can be found in the Example Pipeline Output and Pipeline description sections.

### GitHub

The purpose of using GitHub in this application is not only to house the code base but also to integrate with the other tools in the pipeline to create continuous integration. It provides a way to store changes to the code base, separate changes based on feature, create both a development and production environment, and talk with Travis CI and Heroku. GitHub provides many tools and services which can overwhelm unfamiliar users. Understanding the way repositories, branches, and commits work also has a learning curve. For those familiar with GitHub and have a vague understanding of how it’s services and tools work, using it is easy, but newer or unfamiliar users may have to spend more time researching and following tutorials to get the gist of what tools to use and how to use them. Setting up a GitHub repository is simple. Initially, all the user needs is a name for their repo. They can then upload their code manually or by using git terminal commands. Because GitHub has so many tools and services that it can integrate with, it is highly recommended for use in providing quality assurance. In the pipeline, GitHub serves as the instigator that calls tools and services to provide testing and quality assurance. It calls Travis CI and initiates new builds on Heroku.

### Heroku

The purpose of using Heroku in this application is host the websites for this application and aid in automatic deployment to a staging environment and manual deployment to a production environment. This product replaces the Google Cloud Platform in the pipeline. It provides interactions with GitHub. Whenever a push is made to the staging or master branch of GitHub, Heroku rebuilds the application creating automatic deployment. This is designed so that an accepted pull request from the staging branch to the master branch will rebuild the production environment of this application. In order for this pull request to be accepted, it has to first pass the tests provided by other tools in the pipeline. Heroku is overwhelming at first because it has many different settings and options for setting up an application. Once the initial learning curve has concluded, using Heroku is easy with some caveats. For instance, even experienced Heroku users can struggle to get Heroku to build their applications successfully. To setup Heroku, create a new [pipeline](https://dashboard.heroku.com/pipelines/new) and connect it with a GitHub repository. Create an app for both the staging and production branches and connect those with branches on the GitHub repository. Edit both of these apps to add automatic deployment. After that, the setup is complete and any change on GitHub to these branches will be reflected on Heroku. For a helpful resource to adding automatic deployment to Heroku, click [here](https://devcenter.heroku.com/articles/github-integration). Heroku is highly recommended for this project because it integrates seamlessly with GitHub and provides automatic deployment and pipeline configurations easily. Additionally, the setup process is not too intensive. In the pipeline, Heroku is the last service called. A new build on Heroku is called when accepting a pull request on GitHub after the tests called by Travis CI pass.</br>

There are a couple challenges to using Heroku as a platform. Initially, the setup process can be overwhelming for unfamiliar users. Heroku has different settings and the user can be unsure of which settings are best suited for their application. Additionally, Heroku servers can be difficult to setup. The build breaking issue that is often encountered is that the port number is incorrect. The correct port for Heroku servers is located in the process environments variable. Specifying a specific port number instead of using the process environment variable will break the Heroku app. However, Heroku’s benefits outweigh these challenges. Once a user has made it past the initial learning curve and properly configures their server, a user can build and launch their applications quickly. These servers are free, and they connect easily with GitHub.

### Travis CI

The purpose of using Travis CI in this application is to integrate with the other tools in the pipeline to create continuous integration including GitHub, Coveralls, and Sider. It provides a framework to calling necessary testing activities including running unit tests, coverage tests, and quality assurance. It connects with GitHub through GitHub Marketplace and provides GitHub with the information of whether or not the tests passed or failed. Users on GitHub can use this information to determine whether or not to accept a pull request. Travis CI is relatively simple to use, but it requires knowledge and research on how to setup the configuration file. To setup Travis CI, a GitHub user can navigate to [Travis CI](https://github.com/marketplace/travis-ci) on GitHub Marketplace. The user can follow the instructions provided by GitHub Marketplace to link their GitHub account with Travis. The next step is to create a ```.travis.yml``` configuration file. This file is used to describe languages, tools and services to be implemented, and other configuration parameters. The exact setup changes based on the needs of the user. Travis CI has been valuable in this process, and it integrates with many tools. For this reason, Travis CI is highly recommended to help test and provide quality assurance in applications. The only downside is that Travis CI costs money when developing with a private repository. For any open source repository, Travis CI is an impressive tool. In the pipeline, Travis CI is called by GitHub whenever a pull request or push is made. Travis CI then performs unit testing and end-to-end testing and initiates reports from Coveralls and Sider. It reports whether or not these tasks and tests were successful to GitHub.

### Coveralls

The purpose of using Coveralls in this application is to analyze the effectiveness of the unit tests written for this application. It provides a report detailing the code coverage of the unit tests. Screen shots and analysis of the code coverage report can be seen at the end of this report. In the pipeline, it is called by Travis CI after running the unit tests. Travis CI relays its report to GitHub. Users on Coveralls can use this information to determine whether or not to accept a pull request or to further develop unit testing. Coveralls is relatively simple to use, but it requires research on how to integrate it with Travis CI. To setup Coveralls, a GitHub user can navigate to [Coveralls](https://github.com/marketplace/coveralls) on GitHub Marketplace. The user can follow the instructions provided by GitHub Marketplace to link their GitHub account with Coveralls. The next step is to update ```.travis.yml``` configuration file and install coveralls for Node. Coveralls is recommended for this project if the user can get over the initial setup hurtle. After overcoming the struggles of setting up Coveralls to work with Travis and Node, it provided an elegant report for test coverage. In the pipeline, Coveralls is called by Travis CI. After it performs its tests and coverage analysis, it reports this information to GitHub.

### Sider

The purpose of using Sider in this application is to analyze the code quality and conformance to best practices and standards for developers. In addition to spell checking, Sider automated code review provides analysis on the casing of variables and linting errors. In the pipeline, it is called by Travis CI after running the unit tests. Travis CI relays its report to GitHub. Users can use this information to determine whether or not to accept a pull request or modifying code to pass the code review. Sider is easy to use, and setting Sider up with Travis CI only required a couple of button clicks. To setup [Sider](https://github.com/marketplace/sider), a GitHub user can navigate to Coveralls on GitHub Marketplace. The user can follow the instructions provided by GitHub Marketplace to link their GitHub account with Sider. Sider is extremely straight forward and can be setup in 10 minutes. For this reason, Sider is recommended for automated code review. The only issue encountered was that Sider sometimes flaged valid code with errors. In the pipeline, Sider is called by Travis CI. After it performs its tests, it reports to GitHub.

### TestCafe

The purpose of using TestCafe in this application is to perform automated end-to-end tests. TestCafe provides a framework to initialize browser-based testing. It can open Chrome or Firefox browsers as well as click buttons, input text, hover, and input files. In the pipeline, it is called by Travis CI immediately after running the unit tests. Travis CI relays its report to GitHub. Users can use this information to determine whether or not to accept a pull request or modifying code to pass the code review. Compared with other end-to-end testing frameworks like Selenium, TestCafe is simple. It does not require an intense setup process other than configuring Travis and adding more scripts in the ```package.json``` file. To setup TestCafe, follow the steps [here](https://devexpress.github.io/testcafe/documentation/getting-started/). After following these steps, TestCafe needs to be integrated with Travis CI. This process involves modifying the ```.travis.yml``` file and editing the testing script in the ```package.json``` file. This product is highly recommended because of the ease of setup. In comparison to other end-to-end testing frameworks, TestCafe is really simple and easy to get up and running. In the pipeline, TestCafe is run by Travis CI following the unit testing. Travis CI is responsible for reporting the success or failure of the end-to-end tests to GitHub.

## License

The code is open source and available under the [MIT License](LICENSE).
