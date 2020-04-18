/**
 * This file contains 2 of the same examples
 * 
 * 1. First is a Condensed Example
 * 2. Second is a Long Example with more comments for explanation
 *  
 * 
 * */


// ----------- 1. CONDENSED EXAMPLE ----------- //

// STEP 1 - Create XHR Object

let xhr = new XMLHttpRequest();


// STEP 2 - Check readyState, If passes use Callback Function AKA Event Handler

xhr.onreadystatechange = () => {
  // Checks if readyState is 4: request finished and response is ready
  if ( xhr.readyState === 4 ) {
    // Checks for status 200: "OK"
    if ( xhr.status === 200 ) {
      document.getElementById('ajax').innerHTML = xhr.responseText;
    } else {
      document.getElementById('ajax').innerHTML = xhr.status + ' Error: ' + xhr.statusText;
    }
  }
};


// STEP 3 - Open Request: open( method, url, async: [true or false] )

xhr.open( 'GET', 'sidebar.html', true );


// STEP 4 - Send Request 

// Note: This request will run as soon as page is loaded if not wrapped in a function

xhr.send();



// ----------- 2. LONG EXAMPLE WITH COMMENTS----------- //



// Create XHR Request Object
let xhr = new XMLHttpRequest();
/* 
    Create Callback to Listens for Change of State
    1. xhr is the Object we created
    2. readyState is a property that holds the xhr status
    3. responseText is the info the web server sends back as a string
*/
xhr.onreadystatechange = () => {
  // Checks if readyState is 4: request finished and response is ready
  if ( xhr.readyState === 4 ) {
    // Checks for status 200: "OK"
    if ( xhr.status === 200 ) {
      document.getElementById('ajax').innerHTML = xhr.responseText;
      // Normally would just use the else with xhr.status and xhr.statusText
      // These are only examples of things we can do if wanted
    } else if ( xhr.status === 403 ) {
      document.getElementById('ajax').innerHTML = `403: "Forbidden"`;
    } else if ( xhr.status === 404 ) {
      document.getElementById('ajax').innerHTML = xhr.status + ' Error: ' + xhr.statusText;
    } else if ( xhr.status === 500 ) {
      document.getElementById('ajax').innerHTML = `500: "Server error"`;
    } else {
      document.getElementById('ajax').innerHTML = xhr.status + ' Error: ' + xhr.statusText;
    }
  }
};
/* 
    Use XHR open method which specifies the request type
    
    open( method, url, async, user, psw)    
    
    method: GET or POST or PUT or DELETE, 
    url: where the request is going and is either 
        async: true (asynchronous) or false (synchronous)
        * True is default and optional
    user: optional user name, psw: optional password
*/
xhr.open( 'GET', 'sidebar.html', true );
/* 
    Send Request, open() prepares request, send() sends it 
    
    Wrapping it in a function is optional. If no function is used
    it the request will automatically be sent.  If a function wraps
    around this we have to wait for it to be called, or for an
    event to occur.  The function can be any name we choose.
*/
function sendAJAX() {
  xhr.send();
  // Hides button after request is sent
  document.getElementById('load').style.display = 'none';
}