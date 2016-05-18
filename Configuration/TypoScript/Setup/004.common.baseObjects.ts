# -------------------------------------------------------------
# All basic elements which are in commons between
#	all the pages.
# -------------------------------------------------------------

## ---------------------------------------------------------
# template cObject for the page
## ---------------------------------------------------------

lib.stdContent = FLUIDTEMPLATE
lib.stdContent {
  templateName= TEXT
  templateName.stdWrap {
    cObject = CASE
    cObject {
      key.data = levelfield:-2,backend_layout_next_level,slide
      key.override.field = backend_layout


      //Remember that 1,2, etc are the IDs of the be_layouts records on the database!!!  
      default = TEXT 
			default.value = Default 
			1 = TEXT 
			1.value = Default 
			2 = TEXT 
			2.value = Home 
      //add other values 
    }
    ifEmpty = Error
  }
  
  layoutRootPaths {
    0 = {$plugin.tx_bhsiteconf.view.layoutRootPath}Page/  
  }
  partialRootPaths {
    0 = {$plugin.tx_bhsiteconf.view.partialRootPath}Page/  
  }
  templateRootPaths {
    0 = {$plugin.tx_bhsiteconf.view.templateRootPath}Page/  
  }
  
	extbase.controllerExtensionName = bhsiteconf  

  ##------------------------------------------
  #	Declaring Settings
  ##------------------------------------------
  
  settings{
    pagesInHeaderMenu = {$plugin.tx_bhsiteconf.settings.pagesInHeaderMenu}

    pagesInFooterMenu = {$plugin.tx_bhsiteconf.settings.pagesInFooterMenu}
  }

  ##------------------------------------------
  #	Declaring Variables
  ##------------------------------------------   
  
  variables {
    ##------------------------------------------ 
    # Tests for the presence of content or subpages
    ##------------------------------------------
    
    #Test if there are subpages
    testThereAreSubpages = TEXT
    testThereAreSubpages.value = 1
    testThereAreSubpages.if.isTrue.numRows{
      table = pages
      select.pidInList.data =  field:uid
      select.where = nav_hide = 0       
    }
  }
}

## ---------------------------------------------------------
# template cObject for content grids
## ---------------------------------------------------------

#I set here the common properties:

lib.gridelements.defaultGridSetup { 
  cObject = FLUIDTEMPLATE
  cObject {
    templateRootPaths {
      0 = {$plugin.tx_bhsiteconf.view.templateRootPath}Content/  
    }
  }
}

tt_content.gridelements_pi1{ 
  # uncomment this to wrap the grid as the other elements
  #stdWrap.dataWrap=<div id="c{field:uid}">|</div>
   
  #uncomment this to have the header back again!
  #10 =< lib.stdheader 
}


## ---------------------------------------------------------
# object that writes page level
## ---------------------------------------------------------
lib.pageLevel=TEXT
lib.pageLevel{
      value= level-{level:-1}      
      insertData = 1    
}


lib.fluidContent{
  dataProcessing.99 = TYPO3\CMS\Frontend\DataProcessing\SplitProcessor
  dataProcessing.99{
     if.isTrue.field = layout
     delimiter =,
     removeEmptyEntries = 1
     fieldName = layout     
     as = splitlayout
  }
}
