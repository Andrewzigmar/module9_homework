let parser = new DOMParser();
let xmlString =`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student> 
  <student2>
<name2 lang2="ru">
  <first2>Петр</first2>
  <second2>Петров</second2>
</name2>
<age2>58</age2>
<prof2>driver</prof2>
</student2>
</list>
`;
let xmlDOM = parser.parseFromString( xmlString, 'text/xml');

let listNode = xmlDOM.querySelector('list');
let studentNode = listNode.querySelector('student');
let nameNode = listNode.querySelector('name');
let firstNode = listNode.querySelector('first');
let secondNode = listNode.querySelector('second');
let ageNode = listNode.querySelector('age');
let profNode = listNode.querySelector('prof');
let categoryAttr = nameNode.getAttribute('lang') 

let studentNode2 = listNode.querySelector('student2');
let nameNode2 = listNode.querySelector('name2');
let firstNode2 = listNode.querySelector('first2');
let secondNode2 = listNode.querySelector('second2');
let ageNode2 = listNode.querySelector('age2');
let profNode2 = listNode.querySelector('prof2');
let categoryAttr2 = nameNode2.getAttribute('lang2') 







let student1 = {
    lang : categoryAttr,
    name : firstNode.textContent + " " + secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
};
let student2 = {
    lang : categoryAttr2,
    name : firstNode2.textContent + " " + secondNode2.textContent,
    age: Number(ageNode2.textContent),
    prof: profNode2.textContent,
}

let result = {
    list :[student1,student2]
}

console.log(result);