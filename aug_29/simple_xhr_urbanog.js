const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const url = 'https://reqres.in/api/users/2';
const http = new XMLHttpRequest();

http.open('GET', url, true);
http.onreadystatechange = function () {
    //readyState property returns the state an XMLHttpRequest client is in
    // number 4 means tha the operation is complete
    if (this.readyState == 4 && this.status == 200) {
        let result = this.responseText
        console.log(result)
    }
};
// http.send();

// function get recieves an url to retrieve the data
function get(url) {
    const getR = new XMLHttpRequest();
    getR.open('GET', url, true);
    processRequest(getR);
    getR.send();
}

// get(url);
//function post
function post(url, body) {
    //Format the body parameter to simple text
    const postBody = JSON.stringify(body);
    const postR = new XMLHttpRequest();
    postR.open('POST', url, true);
    processRequest(postR);
    postR.send(postBody);
}

const data = {
    name: 'Urbano',
    apellido: 'Gonzalez',
    edad: 22
};

//Recieves a url, and an object to send the information to the server
// post('https://reqres.in/api/users', data);

//Recieves a url, a method on string or a body
function request(url, method, body) {
    if (typeof method !== 'string') {
        return 'Method parameter, must be a String';
    }
    let meth = method.toUpperCase();
    switch (meth) {
        case 'GET':
            get(url);
            break;
        case 'POST':
            post(url, body);
        default:
            'Bad method choice';
            break;
    }
}
// request('https://reqres.in/api/users/4', 'get');

// This function handle the callback and catch the errors for requests
// revieves an XMLHTTPREQUEST object as parameter
function processRequest(xhrObj) {
    
    function callback(response) {
        console.log(response);
    }
    function error(e) {
        console.log(e);
    }
    xhrObj.onload = function () {
        if (this.status <= 400) {
            const result = this.responseText;
            callback(result);
        } else {
            error(`${this.status} ${this.statusText}`);
        }
    };
}


module.exports = {
    get, post, request,
}