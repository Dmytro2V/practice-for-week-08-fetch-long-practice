/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */
// Basic Phase 1: Formulating the body of the request
// Your code here
fetch('/products', {
    method: 'POST',
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });


/* ============================== Phase 2 ============================== */
// Basic Phase 2: Reading the Response Components
// Your code here

fetch('/products', {
    method: 'POST',
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"   
    }
  })
  .then (res => {
    console.log(`response status code = ` + res.status);
    console.log(`reponse Content-type of header = ` + res.headers.get('Content-type'));
    console.log(`response URL = ` + res.url);
    console.log(`response .redirected = ` + res.redirected);
    console.log(`response .redirect = ` + res.redirect); // supposed it will be 'follow', but no
});
// redirected is true, and URL is URL redirected.
// but status code is still 200, not 302

/* ============================== Phase 3 ============================== */
//Basic Phase 3: URLSearchParams
// Your code here
fetch('/products', {
    method: 'POST',
    body: new URLSearchParams({
              name: "Caribbean Delight Coffee",
              description: "Made by Manatee Coffee",
              price: 11.99,
              categories: "grocery"
            }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"   
    }
  })
  .then (res => {
    console.log(`response status code = ` + res.status);
    console.log(`reponse Content-type of header = ` + res.headers.get('Content-type'));
    console.log(`response URL = ` + res.url);
    console.log(`response .redirected = ` + res.redirected);
    console.log(`response .redirect = ` + res.redirect);
});
// same result as phase 2
 console.log(new URLSearchParams({
  name: "Caribbean Delight Coffee",
  description: "Made by Manatee Coffee",
  price: 11.99,
  categories: "grocery"
})) // - returns an object!
// but 
console.log('' + new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
  })) // returns url/percent encoded string.

  //------------ Intermediate Phase 4: Experiment with other Endpoints------------

fetch('/reviews/2/edit', {
    method: 'GET',

    headers: {
       
    }
  })
  .then (res => {
    console.log(`response status code = ` + res.status);
    console.log(`reponse Content-type of header = ` + res.headers.get('Content-type'));
    console.log(`response URL = ` + res.url);
    console.log(`response .redirected = ` + res.redirected);   
});

// not found
fetch('/reviews/1/edit', {
    method: 'GET',

    headers: {
       
    }
  })
  .then (res => {
    console.log(`response status code = ` + res.status);
    console.log(`reponse Content-type of header = ` + res.headers.get('Content-type'));
    console.log(`response URL = ` + res.url);
    console.log(`response .redirected = ` + res.redirected);   
}); 
// 200