// ---> TO SET DATE
setInterval( function(e) {
    let now = new Date();
    let dd = now.getDay()
    let mm = now.getMonth()
    let yy = now.getFullYear();
    let date = `${yy}-${dd}-${mm}`;
    document.getElementsByClassName('status')[0].innerHTML = date; 
},1000);



// ----------------ACCESSING BUTTONS FORM HTML FOR HIDE PURPOSES--------------------- //
let btn0 = document.getElementsByClassName('edit-btn')[0]; 
let btn1 = document.getElementsByClassName('edit-btn')[1]; 
let btn2 = document.getElementsByClassName('edit-btn')[2]; 
let btn3 = document.getElementsByClassName('edit-btn')[3]; 
let btn4 = document.getElementsByClassName('edit-btn')[4]; 
let btn5 = document.getElementsByClassName('edit-btn')[5]; 

// ----------------APPLYING FUNCTIONS ON BUTTONS TO HIDE SECTIONS IN EDIT PANEL--------------------- //
btn0.addEventListener('click', function(e){
    let container = document.getElementsByClassName('edit-container')[0];
    container.classList.toggle('hide');
})
btn1.addEventListener('click', function(e){
    let container = document.getElementsByClassName('edit-container')[1];
    container.classList.toggle('hide');
})
btn2.addEventListener('click', function(e){
    let container = document.getElementsByClassName('edit-container')[2];
    container.classList.toggle('hide');
})
btn3.addEventListener('click', function(e){
    let container = document.getElementsByClassName('edit-container')[3];
    container.classList.toggle('hide');
})
btn4.addEventListener('click', function(e){
    let container = document.getElementsByClassName('edit-container')[4];
    container.classList.toggle('hide');
})
btn5.addEventListener('click', function(e){
    let container = document.getElementsByClassName('edit-container')[5];
    container.classList.toggle('hide');
})

// ----------------ACCESSING BUTTON OF EDIT PANEL FROM HTML FOR FUNCTIONALITY PURPOSES--------------------- //
let panelBtn0 = document.getElementsByClassName('btn')[0]; 
let panelBtn1 = document.getElementsByClassName('btn')[1]; 
let panelBtn2 = document.getElementsByClassName('btn')[2]; 
let panelBtn3 = document.getElementsByClassName('btn')[3]; 
let panelBtn4 = document.getElementsByClassName('btn')[4]; 
let panelBtn5 = document.getElementsByClassName('btn')[5]; 

// ----------------CREATING FUNCTIONS FOR TO-DO-LIST--------------------- //
let addToList = function(){
    let task = document.getElementById('add-text').value;
    let newEntery = document.getElementById('list-container');
    if(newEntery.firstElementChild.hasAttribute('data-defaultItem')){
        document.getElementsByClassName('list-item')[0].outerHTML = ""; 
    }        
    newEntery.insertAdjacentHTML('beforeend',`<li class="list-item">${task}</li>`);
    document.getElementById('add-text').value = "";
}
let markAsComplete = function(){
    let taskNum = (parseInt(document.getElementById('comp-text').value)-1);
    let compTask = document.getElementsByClassName('list-item')[taskNum]
    compTask.style = 'text-decoration: line-through'; 
    
}
let deleteFromList = function(){
    let taskNum = (parseInt(document.getElementById('delete-text').value)-1);
    let deleteTask = document.getElementsByClassName('list-item')[taskNum];
    deleteTask.outerHTML = null;
    document.getElementById('delete-text').value = "";
    if(document.getElementsByClassName('list-item')[0] == null){
        let newEntery = document.getElementById('list-container');
        newEntery.insertAdjacentHTML('beforeend',`<li class="list-item " data-defaultItem="" >Your list of task goes here.</li>`);
    }
}
let editItem = function(){
    let taskNum = (parseInt(document.getElementById('edit-text-no').value)-1);
    let updateTaskNo = document.getElementsByClassName('list-item')[taskNum];
    let updateTasktxt = document.getElementById('edit-text-txt').value;
    updateTaskNo.innerHTML = updateTasktxt;
}
let reset = function(){
    let reset = document.getElementById('list-container');
    reset.innerHTML = `<li class="list-item " data-defaultItem="" >Your list of task goes here.</li>`;
    document.getElementsByClassName('status')[1].innerHTML = '---';
    document.getElementsByClassName('status')[2].innerHTML = '---';
}
let setDueDate =function(){
    let dueDate = document.getElementById('set-date').value;
    document.getElementsByClassName('status')[1].innerHTML = dueDate;
}

// ----------------APPLYING FUNCTIONS OF TO-DO-LIST--------------------- //
panelBtn0.addEventListener('click',addToList);
panelBtn1.addEventListener('click',markAsComplete);
panelBtn2.addEventListener('click',deleteFromList);
panelBtn3.addEventListener('click',editItem);
panelBtn4.addEventListener('click',reset);
panelBtn5.addEventListener('click',setDueDate);
