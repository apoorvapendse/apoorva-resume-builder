console.log('hello from template1');
const personData = JSON.parse(localStorage.getItem('formdata'));
const personName = document.getElementById('personName');
const personAge = document.getElementById('personAge');
const personDesc = document.getElementById('aboutPara');
const occupation = document.getElementById('occupation');
const project1Name = document.getElementById('p1Name');
const project2Name = document.getElementById('p2Name');
const project3Name = document.getElementById('p3Name');
const project4Name = document.getElementById('p4Name');
const project1Link = document.getElementById('p1Link');
const project2Link = document.getElementById('p2Link');
const project3Link = document.getElementById('p3Link');
const project4Link = document.getElementById('p4Link');

personName.innerText = personData.name;
personAge.innerText = personData.age;
personDesc.innerText = personData.description;
occupation.innerText = personData.occupation;
project1Name.innerText = personData.p1_name;
project2Name.innerText = personData.p2_name;
project3Name.innerText = personData.p3_name;
project4Name.innerText = personData.p4_name;
project1Link.setAttribute('href', personData.p1_link);
project2Link.setAttribute('href', personData.p2_link);
project3Link.setAttribute('href', personData.p3_link);
project4Link.setAttribute('href', personData.p4_link);