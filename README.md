# Pizza Academy [![Build Status](https://travis-ci.org/absolute413/PizzaAcademy-Preview.svg?branch=master)](https://travis-ci.org/absolute413/PizzaAcademy-Preview)




## Setup
Install [Bundler](http://bundler.io/) using ```gem install bundler```.

Depdencies defined in the [Gemfile](Gemfile) can then be installed using ```bundle install```.




## Preview
A live building preview can be started using ```rake site:preview```.

The preview will be avaiable at [http://localhost:4000/](http://localhost:4000/).




## Build
Builds are done automatically on deploy.

A manual build can be done by running ```rake site:build```.




## Deploy
Committing to the [master](tree/master) branch will trigger build using [Travis CI](https://travis-ci.org).

If the build is successfull, it will be deployed to the [gh-pages](tree/gh-pages) branch.

A manual deploy can be done by executing the following commands in order:
* ```rake site:stage```  - fetches the [gh-pages](tree/gh-pages) branch
* ```rake site:build```  - builds the site
* ```rake site:deploy``` - commits all changes and pushes to the [gh-pages](tree/gh-pages) branch.




--
If any of the above commands fail because of bundler version issues, prepend the command with ```bundle exec```.

(e.g. ```bundle exec rake site:build```)
