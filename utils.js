
module.exports = {
  walkDOM: walkDOM
}

/*
*@description 遍历DOM
*@ param target {dom}
*@ return null 
**/
function walkDOM(target) {
  do {
    console.log(target)
    if (target.hasChildNodes()) {
      walkDOM(target.firstChild);
    }
  } while (target = target.nextSibling)
}
