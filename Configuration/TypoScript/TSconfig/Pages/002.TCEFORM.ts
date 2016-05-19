TCEFORM {
	tt_content {
		//remove h1, default is already h2.
		header_layout {
			removeItems = 1
		}

		layout {
      //remove in general
      removeItems = 0,1,2,3
      disableNoMatchingValueElement = 1
      addItems{
        default = LLL:EXT:frontend/Resources/Private/Language/locallang_tca.xlf:pages.backend_layout.default
      }
      types {
      	//textmedia
      	textmedia {
		      removeItems = 0,1,2,3
		      addItems {
            customstyle1 = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:textmedia.layout.style1
            customstyle2 = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:textmedia.layout.style2
			     }
      	}
      }
		}
	}
}