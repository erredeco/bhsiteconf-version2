tt_content.gridelements_pi1.20.10.setup.ffaccordion_element {

  wrap.cObject = COA
  wrap.cObject{
    10=TEXT
    10.value= <li class="accordion-item 
    
    
    20=TEXT
    20.value= is-active
		20.if {
			value = 1
			equals.field = flexform_active
		}    
    20.noTrimWrap = | ||      
    
		30 = TEXT
		30.value = " data-accordion-item>|</li>       
  }

	columns.0 {
	renderObj = < tt_content
    wrap= <div class="accordion-content" data-tab-content>|</div>
  }

	innerWrap.cObject = TEXT
  innerWrap.cObject.field = header
  innerWrap.cObject.wrap = <a class="accordion-title">|</a>

}

tt_content.gridelements_pi1.20.10.setup.ffaccordion_container {
	# Wrap container  
  outerWrap.cObject = COA
  outerWrap.cObject{
    10=TEXT
    10.value = <ul class="accordion" data-accordion
    
    20=TEXT
    20.value=data-multi-expand="true"
		20.if {
			value = 1
			equals.field = flexform_allowmultiexpand
		}    
    20.noTrimWrap = | ||
 
    30=TEXT
    30.value=data-allow-all-closed="true"
		30.if {
			value = 1
			equals.field = flexform_allowallclosed
		}    
    30.noTrimWrap = | ||    
    
		40 = TEXT
		40.value = >|</ul>    

  }  

	# Direct rendering of the collapsible elements, prevents "csc-default"-wrap
	columns.0 {
		renderObj < tt_content.gridelements_pi1
	}

}