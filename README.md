# Pizza Academy [![Build Status](https://travis-ci.org/absolute413/PizzaAcademy-Preview.svg?branch=master)](https://travis-ci.org/absolute413/PizzaAcademy-Preview)


### Setup
All dependencies are defined in the [Gemfile](Gemfile), which can be installed by running ```gem install bundler```, followed by ```bundle install```.
The currently built website can be pulled into the ```_site``` folder by executing ```rake site:stage```.

### Preview
An automatically building preview can be started by executing ```rake site:preview```, and viewed at [http://localhost:4000/](http://localhost:4000/).

### Build
Builds are done automatically on deploy.
A manual build can be done by running ```rake site:build```.

### Deploy
Commit to GitHub on the [master](tree/master) branch.
This will trigger a build using [Travis CI](https://travis-ci.org).
If the site is built successfully, it will be deployed to the [gh-pages](tree/gh-pages) branch.
A deploy can be done manually by running ```rake site:deploy```.


--
**If any of the above commands fail because of bundler version issues, prepend the command with ```bundle exec```.
(e.g. ```bundle exec rake site:build```)**
