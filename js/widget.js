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