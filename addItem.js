function addItem() {
    var div = document.getElementById("div_1"),
     // var child=document.getElementById("body").child;
        newDiv = div.cloneNode(true), 
        // textNode=newDiv.getElementsByTagName("h1"),
        // textNode.setAttribute(""),
        divParent = div.parentNode,
        lastChild = divParent.lastChild;

    newDiv.querySelector('h1').innerHTML = 'please enter content';
    divParent.insertBefore(newDiv, lastChild);
}
function delItem(div) {
   div.parentNode.parentNode.removeChild(div.parentNode);
}
//function edit(text) {
//   var textParent = text.parentNode;
//}
function edit(old) {
    var inputElement = document.createElement("input");

    inputElement.className = 'editInput';
    inputElement.value = old.innerHTML;
    old.parentNode.replaceChild(inputElement,old);
    inputElement.onblur = function () {
        old.innerHTML=inputElement.value;
        inputElement.parentNode.replaceChild(old,inputElement);
    } 

}