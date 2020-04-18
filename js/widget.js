// STEP 1 - Create XHR Object

var xhr = new XMLHttpRequest();


// STEP 2 - Callback Function (Event Handler)

xhr.onreadystatechange = function() {
  if ( xhr.readyState === 4 ) {
    // console.log(xhr.responseText);
    // console.log(typeof xhr.responseText);  // sting
    let employees = JSON.parse( xhr.responseText );
    // console.log(typeof employees);  // object
    console.log(employees);  // object
    let statusHTML = `<ul class="bulleted">`;
      employees.forEach( employee => {
        if ( employee.inoffice ) {
          statusHTML += `<li class="in">`;
        } else {
          statusHTML += `<li class="out">`;
        }
        statusHTML += `${employee.name} </li>`;
      });
      statusHTML += `</ul>`;
      document.querySelector('#employeeList').innerHTML = statusHTML;
  }
}


// STEP 3 - Open Request

/** In a real world app we'd point to a server side script 
 *  that would dynamically generate this JSON data 
 *  with the most current info on our employees. 
 *  But for this exercise we'll use a plain text file. 
 * 
*/

xhr.open( 'GET', 'data/employees.json');


// STEP 4 - Send Request

xhr.send();




// XHR Room Object

let xhrRoom = new XMLHttpRequest();


// Callback Function (Event Handler)

xhrRoom.onreadystatechange = function() {
  if ( xhrRoom.readyState === 4 ) {
    let rooms = JSON.parse( xhrRoom.responseText );
    let roomHTML = `<ul class="rooms">`;
      rooms.forEach( room => {
        if ( room.available ) {
          roomHTML += `<li class="empty">`;
        } else {
          roomHTML += `<li class="full">`;
        }
        roomHTML += `${room.room} </li>`;
      });
      roomHTML += `</ul>`;
      document.querySelector('#roomList').innerHTML = roomHTML;
  }
}


// Open Request

xhrRoom.open( 'GET', 'data/rooms.json');

// Send Request

xhrRoom.send();