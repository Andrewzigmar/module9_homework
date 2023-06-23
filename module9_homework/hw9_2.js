let jsonSting = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
   `;
   let persen= JSON.parse(jsonSting);
let  result = {
    list:[persen]
   };
 

console.log(result);