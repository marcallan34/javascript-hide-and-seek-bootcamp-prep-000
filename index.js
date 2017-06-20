function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget(){
  var nested = document.querySelector('#nested div.target');
  return nested;
}


function deepestChild(){
  var grandNode = document.querySelector('#grand-node');
  return grandNode.getElementsByTagName('div')[3];
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    var children = lis[i].children
    for(let j = 0; j < children.length; j++)
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
}
}
