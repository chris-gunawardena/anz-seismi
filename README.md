# ANZ seismi
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/chris-gunawardena/anz-seismi?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Build Status](https://travis-ci.org/chris-gunawardena/anz-seismi.svg?branch=master)](https://travis-ci.org/chris-gunawardena/anz-seismi)


###Intro
This is a small project created for ANZ (Delivery Services - UICX) to demonstrate a modern web app development process.

###Design Patterns

Angular uses the MVVC pattern. In this project templates, controllers and styles are separated using  /views /styles and /controllers folders. New views and controllers can be easily created/scaffolded by running `yo angular:controller controller_name` etc
 https://github.com/yeoman/generator-angular#controller

###Reusability
- Yeoman project scafolding together with npm and bower package manager strongly enforces reusability and DRY principles by building on exising open source components.

- 100% of the code is shared between all mobile platforms including iOS, Android and Windows Phone.

- With Bower it's possible to create our own components and add them to public or private package directories to be shared. (eg: bower install ng-range-slider --save)

###Knowledge sharing & Documentation
- Gitter chat room was created and connected to github project for easy Q&A https://gitter.im/chris-gunawardena/anz-seismi
- Github homepage readme markdown is used for documentation.
- Extensive inline comments are used to describe code where possible.
- Screen cpature of how to clone and build project.

###Development Process 
- grunt live reload is used to
- grunt build will create a minified and

###Quality Control
- JS Hint is used to enfoce JS best practices.

###Unit testing and Functional testing

###Running the build
- Install nodeJS http://nodejs.org/
- Install yeoman `npm install -g yo bower grunt-cli`

```
git clone git@github.com:chris-gunawardena/anz-seismi.git
cd anz-seismi
npm install
bower instal
grunt serve
```

###References
######Initial project scaffolding
- http://yeoman.io/
- https://github.com/yeoman/generator-angular

######Package managers
- https://www.npmjs.com
- http://bower.io

######Task runner
- http://gruntjs.com/

######Testing
- http://karma-runner.github.io/0.12/index.html

######Continuous Integration
- https://travis-ci.org/chris-gunawardena/anz-seismi

###### Documentation
- https://gitter.im/
- https://help.github.com/articles/github-flavored-markdown/

######Dependencies (bower.json)
    "angular": "^1.3.0",
    "json3": "^3.3.0",
    "es5-shim": "^4.0.0",
    "bootstrap": "^3.2.0",
    "angular-animate": "^1.3.0",
    "angular-cookies": "^1.3.0",
    "angular-messages": "^1.3.0",
    "angular-resource": "^1.3.0",
    "angular-route": "^1.3.0",
    "angular-sanitize": "^1.3.0",
    "angular-touch": "^1.3.0",
    "ng-range-slider": "~0.1.12"
    
######Dev Dependencies (packages.json)
    "grunt-autoprefixer": "^0.7.3",
    "grunt-concurrent": "^0.5.0",
    "grunt-contrib-clean": "^0.5.0",
    "grunt-contrib-concat": "^0.4.0",
    "grunt-contrib-connect": "^0.7.1",
    "grunt-contrib-copy": "^0.5.0",
    "grunt-contrib-cssmin": "^0.9.0",
    "grunt-contrib-htmlmin": "^0.3.0",
    "grunt-contrib-imagemin": "^0.8.1",
    "grunt-contrib-jshint": "^0.10.0",
    "grunt-contrib-uglify": "^0.4.0",
    "grunt-contrib-watch": "^0.6.1",
    "grunt-filerev": "^0.2.1",
    "grunt-google-cdn": "^0.4.0",
    "grunt-newer": "^0.7.0",
    "grunt-ng-annotate": "^0.4.0",
    "grunt-svgmin": "^0.4.0",
    "grunt-usemin": "^2.1.1",
    "grunt-wiredep": "^1.7.0",
    "jshint-stylish": "^0.2.0",
    "load-grunt-tasks": "^0.4.0",
    "time-grunt": "^0.3.1"






