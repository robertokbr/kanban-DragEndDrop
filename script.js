const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')


cards.forEach( card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})


function dragstart(){
// console.log('card : start draggin')
dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

} 
function drag(){
  console.log('card :  draggin')

} 
function dragend(){
  console.log('card : stop draggin')
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

}

dropzones.forEach( dropzone =>{
dropzone.addEventListener('dragenter', dragenter)
dropzone.addEventListener('dragover', dragover)
dropzone.addEventListener('dragLeave', dragLeave)
dropzone.addEventListener('drop', drop)


 
})

function dragenter(){
  
}
function dragover()
{
  // console.log('dropz: over')

}
function dragLeave()
{
  // console.log('dropz: leave')

}
function drop()
{
  // console.log('dropz: drop')

}


