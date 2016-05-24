tx_gridelements.setup.twocolumnscontainer {
  title = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.twocolumns.title
	description = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.twocolumns.description
  icon = EXT:bhsiteconf/Resources/Public/Icons/GridElements/2-columns.gif
  config{
  	colCount = 2
  	rowCount = 1
  	rows {
  		1 {
  			columns {
  				1 {
  					name = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:layout.column.first
  					colPos = 100
  				}
  				2 {
  					name = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:layout.column.second
  					colPos = 101
  				}
  			}
  		}
  	}
  }  
}