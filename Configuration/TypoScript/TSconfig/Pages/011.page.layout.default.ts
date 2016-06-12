## ---------------------------------------------------------
# backend layout for home page
## ---------------------------------------------------------

mod.web_layout.BackendLayouts.frontend_default {
    title= LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:backend_layout.default.title
    description = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:backend_layout.default.description
    icon = EXT:bhsiteconf/Resources/Public/Icons/GridElements/container.gif
    config {

        backend_layout {
        	colCount = 1
        	rowCount = 2
        	rows {
        		1 {
        			columns {
        				1 {
        					name = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:layout.column.main
        					colPos = 0
        				}
        			}
        		}
        		2 {
        			columns {
        				1 {
        					name = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:layout.column.bottom
        					colPos = 1
        				}
        			}
        		}
        	}
        }        
       
    }
}










