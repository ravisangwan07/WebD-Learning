function filterEvenNumbers(){
  let inputarr = document.getElementById("arrayInput").value;
  let inputitem = inputarr.split(',').map(item => parseInt(item.trim(),10));
  let newArray = [];
  newArray = inputitem.filter(item => (item%2===0))
  
  document.getElementById("result").innerHTML = "[" + newArray.join(', ') + "]";
  
  
  
}