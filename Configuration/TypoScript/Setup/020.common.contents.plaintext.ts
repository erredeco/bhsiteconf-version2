tt_content.plaintext = FLUIDTEMPLATE
tt_content.plaintext {
	templateName= Plaintext
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

  dataProcessing {
    10 = BH\bhsiteconf\DataProcessing\FlexFormProcessor
  }
  settings{
    defaultHeaderType = {$styles.content.defaultHeaderType}
  }  
}