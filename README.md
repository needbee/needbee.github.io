need-bee.com
===============

Personal programming blog implemented in Jekyll and hosted on GitHub
Pages.

Building
========

GitHub Pages won't build the SASS, so we need to do that on the client-side and commit it.

- `npm install` -- installs Grunt
- `bower install` -- installs Foundation
- `grunt build` -- builds the SASS

Running the Server
==================

- `grunt watch` -- watches for SASS changes
- `jekyll serve --watch` -- watches for file changes


More Info
=========

- [Foundation SASS](http://foundation.zurb.com/docs/sass.html)