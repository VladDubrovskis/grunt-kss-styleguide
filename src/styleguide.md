# grunt-kss-styleguide
A basic setup for Grunt + Sass + KSS for automated styleguide generation

##Style guide

For our style guide we are using Knyle Style Sheets (https://github.com/kneath/kss).
The idea is that you code the styleguide inside your CSS comments, and the Style guide is generated when you run the build command.
Not that description allows to use markdown for better formatting.

### Example comment block
/*
Section heading

Description

.additional_class      - modifier class description

Markup: <header><div class="{$modifiers}"></div></header>


Styleguide 1
*/

"Styleguide 1" is used in order to create an index, so for example the next element in section could be:
```
Styleguide 1.1
```
or if it is a new section, it would be:
```
Styleguide 2
```

### More info on KSS
* http://warpspire.com/kss/syntax/
* https://github.com/kneath/kss

