tt_content.header_subheader = FLUIDTEMPLATE
tt_content.header_subheader {
	templateName= HeaderSubHeader
  layoutRootPaths {
    0 = {$plugin.tx_bhsiteconf.view.layoutRootPath}Content/  
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
}