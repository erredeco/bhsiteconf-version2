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
    page.header.includePagesInMenu = {$plugin.tx_bhsiteconf.settings.page.header.includePagesInMenu}

    page.footer.includePagesInMenu = {$plugin.tx_bhsiteconf.settings.page.footer.includePagesInMenu}
      
  
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

    #test there is content on column 0 (colpos=0)
    testThereIsContent0 = TEXT
    testThereIsContent0.value=1
    testThereIsContent0.if.isTrue.numRows{
     table=tt_content
     select{
        pidInList=this
        where=colPos=0
      } 
    } 
   

    #test there is content on column 1 (colpos=1)
    testThereIsContent1 < .testThereIsContent0
    testThereIsContent1.if.isTrue.numRows.select.where=colPos=1
    
    #test there is content on column 2 (colpos=2)
    testThereIsContent2 < .testThereIsContent0
    testThereIsContent2.if.isTrue.numRows.select.where=colPos=2
  
    #test there is content on column 3 (colpos=3)
    testThereIsContent3 < .testThereIsContent0
    testThereIsContent3.if.isTrue.numRows.select.where=colPos=3 
    
    #add more if u need....






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

  20.10.setup {
    # 1,2, etc are the IDs of the  Gridelements records
    1 < lib.gridelements.defaultGridSetup
    1 {
      cObject.templateName = GridElementDefault
    }

    2 {
      cObject.templateName = GridElementFourColumns
    } 
  }
}


## ---------------------------------------------------------
# object that writes page level
## ---------------------------------------------------------
lib.pageLevel=TEXT
lib.pageLevel{
      value= level-{level:-1}      
      insertData = 1    
}
