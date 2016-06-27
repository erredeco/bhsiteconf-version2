# -------------------------------------------------------------
# Remove extra TYPO3 markup
# http://www.busynoggin.com/blog/blog-item/archive/2007/february/article/getting-rid-of-extra-markup-in-typo3/
# -------------------------------------------------------------

# Remove the attribute <p class="bodytext" 
### non sembra più necessario
### lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >

# Remove empty <p> after <hr> (?)
### non sembra più necessario
### lib.parseFunc_RTE.externalBlocks.hr.stripNL = 1


### removes <p> around <hr> & <table> (replicato in css_styled_content.txt(?);forse puoi tirar via)
### non sembra più necessario
### lib.parseFunc_RTE.externalBlocks = ol,ul,,table,address, div, hr, blockquote


