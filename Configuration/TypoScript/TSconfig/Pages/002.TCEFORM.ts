TCEFORM {
	tt_content {
		//remove h1, default is already h2.
		header_layout {
			removeItems = 1
		}

		layout {
	        //remove in general
	        removeItems = 1,2,3
	        disableNoMatchingValueElement = 1
	        types {

	        	//textmedia
	        	textmedia {
				removeItems = 0,1,2,3
				addItems {
					100 = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:textmedia.layout.style1
					110 = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:textmedia.layout.style2
					}

	        	}
	        }
		}
	}
}