# -------------------------------------------------------------
# Remove extra TYPO3 markup
# http://www.busynoggin.com/blog/blog-item/archive/2007/february/article/getting-rid-of-extra-markup-in-typo3/
# -------------------------------------------------------------

# Remove the attribute <p class="bodytext"
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >

# Remove empty <p> after <hr> (?)
lib.parseFunc_RTE.externalBlocks.hr.stripNL = 1

### removes empty <p> before/after the elements
### li is necessary because otherwise it remove every


lib.parseFunc_RTE.externalBlocks := addToList(li)
lib.parseFunc_RTE.externalBlocks{
        li.stripNL=1
        li.stdWrap.parseFunc = < lib.parseFunc
}

### removes <p> around <hr> & <table> (replicato in css_styled_content.txt(?);forse puoi tirar via)
### lib.parseFunc_RTE.externalBlocks = ol,ul,,table,address, div, hr, blockquote


