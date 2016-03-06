# bhsiteconf
This extension is the provider for all the frontend configuration in TYPO3 CMS enviroment;
it depends on vhs 
                                                                      
##Installation instructions 
####Install Ruby
               
gem install sass (1)

gem install compass (1)

####Install Grunt and Bower:  
npm install -g grunt-cli bower (1)


##copy from git

##Running instructions

npm install (1)

## available commands with grunt:

### grunt initialize
- updates all dependencies from grunt and bower
- copies the initial files from LocalSource to Source
- copies the scss/settings/_settings.scss files from foundation to source

### grunt update
- updates all dependencies from grunt and bower
- copies the scss/settings/_settings.scss files from foundation to source

Please note that this file OVERWRITES YOUR SETTINGS! BE CAREFUL!

### grunt backup
- makes a backup copy of Source

### grunt cleaner
- deletes Source and Bower dirs

### grunt build
- builds all assets

### grunt (default)
- build all assets
- watch 

