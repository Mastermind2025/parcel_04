fetch("https://jsonplaceholder.typicode.com/posts/").then((o=>o.json())).then((o=>console.log(o))),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:"boobs",body:"boobs",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((o=>o.json())).then((o=>console.log(o))),fetch("https://jsonplaceholder.typicode.com/posts/101").then((o=>o.json())).then((o=>console.log(o)));
//# sourceMappingURL=exp.94ee8dd4.js.map
