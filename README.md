# grunt-kss-styleguide


## Requirements
* NodeJS (for Grunt)
* Grunt
* Bower (not required at the moment but can prove to be useful for something like this)
* Ruby
* Sass

Don't worry, most of the instruction are provided here.

### Install "NodeJS" on your system
You need to go to the following page and download and install the release for your platform 
http://nodejs.org/download/

### Install "Grunt" on your system
Once you have got NodeJs up  and running you can install useful packages with "npm" command from your command line.
Do not be scared, it really is not scary at all.

Open up your terminal and type in the following command
```
npm install -g grunt
```

"-g" flag means that it will be installed and used globally from command line by calling "grunt" command

### Install "Bower" on your system
Open up your terminal and type in the following command
```
npm install -g bower
```
"-g" flag means that it will be installed and used globally from command line by calling "bower" command

### Install "Sass" on your system

http://sass-lang.com/install

You will need to install Ruby first.

####MacOS
Just follow steps to install Sass as Ruby is pre-installed

####Windows
You have to install Ruby first, youy can use following installer: http://rubyinstaller.org/
Once installed, you need to add the installation directory to your system path.
"My Computer > Properties > Advanced System Settings > Environment Variables >"
In my case I added "C:\Ruby200\bin" to "PATH".

If using Cygwin, you might need to add the following to your home .bashrc:
```
alias gem='gem.bat'
```
```
alias rake='rake.bat'
```
```
alias erb='erb.bat'
```
```
alias irb='irb.bat'
```
```
alias rdoc='rdoc.bat'
```
```
alias ri='ri.bat'
```
```
alias rspec='rspec.bat'
```
```
alias cucumber='cucumber.bat'
```
```
alias bundle='bundle.bat'
```


####Linux
Install Ruby via command line with package manager based upon your distro.
Example Ubuntu install:
```
sudo apt-get install ruby-full build-essential
```
```
sudo apt-get install rubygems
```
```
sudo gem install sass
```
```
sass -v
```

Note: If there is an error you probably need to add the following line export PATH=$PATH:/var/lib/gems/1.8/bin  at the end of your ./bashrc append the line in the end
```
nano ./bashrc
```
```
export PATH=$PATH:/var/lib/gems/1.8/bin
```

## Dependencies

Install dependencies with

```
npm i && bower i
```


## Release
Create a release to /public with
```
grunt release
```

##Style guide

For our style guide we are using Knyle Style Sheets (https://github.com/kneath/kss).
The idea is that you code the styleguide inside your CSS comments, and the Style guide is generated when you run the build command.
Not that description allows to use markdown for better formatting.

### Example comment block
/*
Section heading

Description

.additional_class      - modifier class description

Markup: <header><div class="green"></div></header>


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
