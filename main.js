var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
//Add item
function addItem(e){
     e.preventDefault();
     //console.log(1);
     var newItem=document.getElementById('item').value;
     var description=document.getElementById('description').value;
     //create new li element
     var li=document.createElement('li');
     li.className="list-group-item";
     let newtext=document.createTextNode(newItem);
     let descriptionNode=document.createTextNode(" "+description);
     li.appendChild(newtext);
     li.appendChild(descriptionNode);
     //create delete Button
     var deleteBtn=document.createElement('button');
     //Add classes todel button
     deleteBtn.className='btn btn-danger btn-sm float-right delete';
    // Append text Node
     deleteBtn.appendChild(document.createTextNode('x'));

     li.appendChild(deleteBtn);
     itemList.appendChild(li);

}
//Delete Event
itemList.addEventListener('click',removeItem);
//Remove item
function removeItem(e){
    //console.log(1);
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//filter event 
filter.addEventListener('keyup',filteritem)
//fiter Item
function filteritem(e){
    //convet Lowercase
   var text = e.target.value.toLowerCase();
   //console.log(text);
   //get lis
   var items=itemList.getElementsByTagName('li');
   //convert array
   Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    //console.log(itemName);
    if(itemName.toLocaleLowerCase().indexOf(text)!=-1){
      item.style.display='block';  
    }
    else{
        item.style.display='none';
    }
   });
}
