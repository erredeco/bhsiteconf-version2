tx_gridelements.setup.fourcolumnscontainer {
  title = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:gridelements.fourcolumns.title
	description = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:gridelements.fourcolumns.description
  config{
  	colCount = 2
  	rowCount = 2
  	rows {
  		1 {
  			columns {
  				1 {
  					name = Main column
  					colPos = 100
  				}
  				2 {
  					name = Side column
  					colPos = 101
  				}
  			}
  		}
  		2 {
  			columns {
  				1 {
  					name = bottom column
  					colspan = 2
  					colPos = 102
  				}
  			}
  		}
  	}    
  }  
}