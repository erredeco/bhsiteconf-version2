## ---------------------------------------------------------
# backend layout for home page
## ---------------------------------------------------------

mod {
  web_layout {
    BackendLayouts {
      frontend_home {
        title=Layout for home page
        icon = EXT:bhsiteconf/Resources/Public/Icons/GridElements/container.gif
        config {

          backend_layout {
          	colCount = 1
          	rowCount = 2
          	rows {
          		1 {
          			columns {
          				1 {
          					name = Main
          					colPos = 0
          				}
          			}
          		}
          		2 {
          			columns {
          				1 {
          					name = Bottom
          					colPos = 1
          				}
          			}
          		}
          	}
          }        
        
             
        }
      }
    }
  }
}









