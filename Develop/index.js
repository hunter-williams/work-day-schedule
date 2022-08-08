// current hour
const today = new Date();
var currentHour = moment(today).format('H')

// display current date
var day = moment().format('LLLL')
$('#current-day').html(day)

// loop through all time blocks and color code - check local storage 
var allTimes = $('.row-md-1')
for (var i = 0; i < allTimes.length; i++){
    if (allTimes[i].id < currentHour){
       // past
       allTimes[i].classList.add('past')
       checkStorage(allTimes[i].id) 
    } else if (allTimes[i].id == currentHour){
        // present
        allTimes[i].classList.add('present')
        checkStorage(allTimes[i].id)   
    } else if (allTimes[i].id > currentHour){
         // future
         allTimes[i].classList.add('future') 
         checkStorage(allTimes[i].id)  
    }
}

// onclick save to local storage
function saveNote(saveButton){
    var row = saveButton.parentElement
    var input = row.children[1].value
    var id = row.id
    // console.log('Id:',id,'Input: ',input)
    
    window.localStorage.setItem(id,input)
}

// check if key in local storage
function checkStorage(id){
    if (localStorage.getItem(id)){
        document.getElementById(id).children[1].value = localStorage.getItem(id)
    }
}

// clear local storage - refresh page
function clearStorage (){
    localStorage.clear();
    location.reload();
}
