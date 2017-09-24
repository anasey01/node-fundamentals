
let stuffs = {
    todo: [],
    addItem: function(item){
        // let addItemInput = document.getElementById('addItemInput');
        stuffs.todo.push(item);
        console.log(stuffs.todo);    
    }
}

module.exports= stuffs;




