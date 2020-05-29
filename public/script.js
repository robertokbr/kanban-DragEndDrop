const boards = document.querySelector('.boards')
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')
const allStatus = document.querySelectorAll('.status') 

var n= 3; 

function build(){
  n++; 
  boards.insertAdjacentHTML('beforeend',`
  <div class="board">
      
      <div class="boardTitle">
        
        <h3>NEW BOARD</h3>
        
        <a href="#" onclick="newCard(${n})">
          <img src="../public/assets/plus.svg" alt="add">
        </a>
        
      </div>
      
      <div class="dropzone">
        <div class="card" draggable="true"  >
          <div class="status statusgreen"></div>
          <div class="content">TEXT </div>
        </div>
      </div>
    </div>
  `)
}


function newCard(n){
  const plus = document.querySelectorAll('.dropzone')
  plus[n].insertAdjacentHTML('beforeend',`
 
  <div class="card" draggable="true">
  <div class="status statusblue"></div>
  <div class="content">TEXT</div>
  </div>
  
  `)
}
/*CARDZONE */

cards.forEach( card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})
function dragstart(){
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
  this.classList.add('is-dragging')
  
} 
function drag(){
  
} 
function dragend(){
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('is-dragging')
  
}

/*DROPZONE */

dropzones.forEach( dropzone =>{
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
  
  
  
})

function dragenter(){
  
}
function dragover()
{
  this.classList.add('over')
  const draggedCard = document.querySelector('.is-dragging')
  this.appendChild(draggedCard)
}
function dragleave()
{
  this.classList.remove('over')
  
  
}
function drop()
{
  this.classList.remove('over')
  
  
}

/*STATUS */

allStatus.forEach( status => {
  status.addEventListener('click', changeStatus)
})

function changeStatus(){
  const value = this.classList.value
  if (value == 'status statusgreen'){
    this.classList.remove('statusgreen')
    this.classList.add('statusred')
    
  }else if(value == 'status statusred'){ 
    this.classList.remove('statusred')
    this.classList.add('statusblue')
  }else if(value == 'status statusblue'){
    this.classList.remove('statusblue')
    this.classList.add('statusgreen')
    
  }
  
}