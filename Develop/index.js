// display current date
const today = new Date();
var currentHour = moment(today).format('H')
var day = moment().format('LLLL')

$('#current-day').html(day)

// for (var i =0; i < localStorage.length; i++){
//     const key = localStorage.key(i)
//     console.log(`${key}:${localStorage.getItem(key)}`)
// }

// time blocks are color coded 
var allTimes = $('.row-md-1')
console.log(currentHour)
console.log(allTimes.length)
for (var i = 0; i < allTimes.length; i++){
    if (allTimes[i].id < currentHour){
       // past
       console.log('past', allTimes[i].id)
       allTimes[i].style.backgroundColor = 'red' 
       checkStorage(allTimes[i].id) 
    } else if (allTimes[i].id === currentHour){
        // present
        console.log('present', allTimes[i].id)
        allTimes[i].style.backgroundColor = 'yellow'
        checkStorage(allTimes[i].id)   
    } else if (allTimes[i].id > currentHour){
         // future
         console.log('future', allTimes[i].id)
         allTimes[i].style.backgroundColor = 'green' 
         checkStorage(allTimes[i].id)  
    }
}

// onclick 
function saveNote(saveButton){
    var row = saveButton.parentElement
    var input = row.children[1].value
    var id = row.id
    console.log('Id:',id,'Input: ',input)
    
    window.localStorage.setItem(id,input)
    var get = localStorage.getItem(id)
    console.log(get)
}
    // enter an event
    // save to local storage
function checkStorage(id){
    if (localStorage.getItem(id)){
        document.getElementById(id).children[1].value = localStorage.getItem(id)
    }
}

function clearStorage (){
    localStorage.clear();
    location.reload();
}
// refresh page
    // pull from local storage