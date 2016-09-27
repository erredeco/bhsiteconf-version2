tt_content.plaintext < lib.fluidContent
tt_content.plaintext {
	templateName= Plaintext 
  //the alternative TemplateRootPaths, LayoutRootPaths, PartialRootPaths are already defined as constant in constant.txt.
  //if you need further folders to place them, remember that their position in the array is .10   
	variables {
	}
  settings{
    
  }  
  dataProcessing {
    10 = BH\bhsiteconf\DataProcessing\FlexFormProcessor
  }

}