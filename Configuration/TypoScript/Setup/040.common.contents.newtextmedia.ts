tt_content.newtextmedia < tt_content.textmedia
tt_content.newtextmedia {
	templateName= Newtextmedia
  layoutRootPaths {
    0 = EXT:fluid_styled_content/Resources/Private/Layouts/
    1 = {$plugin.tx_bhsiteconf.view.layoutRootPath}Content/  
  }
  partialRootPaths {
    	0 = EXT:fluid_styled_content/Resources/Private/Partials/
      1 = {$plugin.tx_bhsiteconf.view.partialRootPath}Content/  
  }
  templateRootPaths {
      0 = {$plugin.tx_bhsiteconf.view.templateRootPath}Content/  
  }    
	variables {
	}
  settings{
  }  
}