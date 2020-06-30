var board = document.querySelector('.boards')

var objBoards =JSON.parse(localStorage.getItem('boards')) || [];


renderBoards()
dragEndDrop()


function delet(){
  objBoards.splice(0, 1)
  renderBoards()
  saveToStorage()

}



function build(){
  var obj = {
    title: "novo titulo",
    cards: ["1","2"]
  }
  objBoards.push(obj)
  saveToStorage();
  renderBoards()
  dragEndDrop()
  
}



function renderBoards(){
  board.innerHTML='';
  
  for (objBoard of objBoards){
    boardFactory()
  }

  const isEmpty = objBoards.find(objboard => objboard = {})
  if(!isEmpty) {
    console.log('oh yeah')
  }else{
  }
      
}



function dragEndDrop(){
  
  /* IMPORTAÇÕES */
  var dropzones = document.querySelectorAll('.dropzone')
  var cards = document.querySelectorAll('.card')
  var allStatus = document.querySelectorAll('.status') 
  
  
  
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
    saveToStorage()
  }
  
  function dragleave()
  {
    this.classList.remove('over')
    saveToStorage()
    
    
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
  
}



function boardFactory(){
  
  var indexOfBoard = objBoards.indexOf(objBoard)
  
  /*div board */
  var divboard = document.createElement('div');
  divboard.setAttribute('class', 'board')
  

  /*div boardTitle */
  var divBoardTitle = document.createElement('div')
  divBoardTitle.setAttribute('class', 'boardTitle')
  divboard.appendChild(divBoardTitle)
  
  
  /*H3 */
  
  var titleh3 = document.createElement('h3')
  var h3text = document.createTextNode(objBoard.title)
  titleh3.appendChild(h3text)
  divBoardTitle.appendChild(titleh3)
  
  
  /*Div Icon container */
  
  var divIconContainer = document.createElement('div')
  divIconContainer.setAttribute('class','IconContainer')
  divBoardTitle.appendChild(divIconContainer)
  
  /* a + img Remove*/
  
  var aImg2 = document.createElement('a')
  aImg2.setAttribute('onclick',`deleteCard(${indexOfBoard})`)
  aImg2.setAttribute('href','#')
  
  
  var imgPlus2 = document.createElement('img')
  imgPlus2.setAttribute('src', '../public/assets/trash.svg')
  imgPlus2.setAttribute('alt', 'Remove')
  
  aImg2.appendChild(imgPlus2)
  divIconContainer.appendChild(aImg2)
  
  /* a + img Add*/
  var aImg = document.createElement('a')
  aImg.setAttribute('onclick',`addCard(${indexOfBoard})`)
  aImg.setAttribute('href','#')
  
  
  var imgPlus = document.createElement('img')
  imgPlus.setAttribute('src', '../public/assets/plus.svg')
  imgPlus.setAttribute('alt', 'Add')
  
  aImg.appendChild(imgPlus)
  divIconContainer.appendChild(aImg)
  
  
  
  /*div dropzone */
  var divDropzone = document.createElement('div')
  divDropzone.setAttribute('class','dropzone')
  divboard.appendChild(divDropzone)
  
  
  /* div card  */
  for (card of objBoard.cards){
    
    cardBuilder(divDropzone)
  }
  
  
  board.appendChild(divboard)
}



function saveToStorage(){
  
  localStorage.setItem('boards', JSON.stringify(objBoards));
  
  
}


function cardBuilder(divDropzone){
  var divCard = document.createElement('div')
  divCard.setAttribute('class','card')
  divCard.setAttribute('draggable','true')
  divDropzone.appendChild(divCard)
  
  /* div status  */
  var divStatus = document.createElement('div')
  divStatus.setAttribute('class', 'status statusgreen')
  divCard.appendChild(divStatus)
  
  var divContent = document.createElement('div')
  divContent.setAttribute('class','content')
  var divContentText = document.createTextNode(card)
  divContent.appendChild(divContentText)
  divCard.appendChild(divContent)
}


 var backgroundHidden = document.createElement('div')
  backgroundHidden.setAttribute('class','backgroundHidden')
  board.appendChild(backgroundHidden)
  
  /* a + img Remove*/
  
  var aImg2 = document.createElement('a')
  aImg2.setAttribute('onclick',`deleteCard(${indexOfBoard})`)
  aImg2.setAttribute('href','#')
  
  
  var imgPlus2 = document.createElement('img')
  imgPlus2.setAttribute('src', '../public/assets/trash.svg')
  imgPlus2.setAttribute('alt', 'Remove')