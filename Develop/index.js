// display current date
const today = new Date();
var currentHour = moment(today).format('H')
var day = moment().format('LLLL')

document.getElementById('current-day').innerHTML = day

// time blocks are color coded 
var allTimes = $('.row-md-1')
console.log(currentHour)
console.log(allTimes.length)
for (var i = 0; i < allTimes.length; i++){
    if (allTimes[i].id < currentHour){
       // past
       console.log('past', allTimes[i].id)
       allTimes[i].style.backgroundColor = 'red'  
    } else if (allTimes[i].id === currentHour){
        // present
        console.log('present', allTimes[i].id)
        allTimes[i].style.backgroundColor = 'yellow'  
    } else if (allTimes[i].id > currentHour){
         // future
         console.log('future', allTimes[i].id)
         allTimes[i].style.backgroundColor = 'green'  
    }
}
    
// onclick 

    // enter an event
    // save to local storage

// refresh page
    // pull from local storage