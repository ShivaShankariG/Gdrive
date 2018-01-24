import fetch from 'isomorphic-fetch';

/*export function checkLogin(data) {
    console.log("this is data"+ data);
return fetch('https://app.animator94.hasura-app.io/dregister', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    if (response.status >= 200 && response.status < 300) {
        console.log("Request worked");
        //console.log(response.body[me]);

       // var json = JSON.stringify(response);
        console.log(JSON.stringify(response.json));
     
        
        //window.location.reload();
        return response;
      } else {
       console.log('Something went wrong here');
      }
}).catch(err => err);
}*/


export function checkLogin(data) {
    console.log('Posting request to API...');
    fetch('https://app.animator94.hasura-app.io/dregister', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
        }
    }).then(function(response) {
        console.log("retirning response.json function");
        var obj = JSON.stringify(response.body);
        return response.json();
    }).then(function(data) {
      console.log("printing returned value")
      console.log(data["code"]);
    });
  }