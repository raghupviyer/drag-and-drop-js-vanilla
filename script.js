function drag(event){
  event.dataTransfer.setData("text", event.target.id);
  console.log(event.target.id)
}

function drop(event){
  event.preventDefault();
  var data = event.dataTransfer.getData("text")
  event.target.appendChild(document.getElementById(data))
}

function allowDrag(event){
  event.preventDefault();
}