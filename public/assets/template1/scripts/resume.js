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
const skill1 = document.getElementById('skill1');
const skill2 = document.getElementById('skill2');
const skill3 = document.getElementById('skill3');
const skill4 = document.getElementById('skill4');
const skill5 = document.getElementById('skill5');
const skill6 = document.getElementById('skill6');

console.log(personData);
//exp names
const expName1 = document.getElementById('expName1');
const expName2 = document.getElementById('expName2');
const expName3 = document.getElementById('expName3');
expName1.innerText = personData.expname1;
expName2.innerText = personData.expname2;
expName3.innerText = personData.expname3;

//exp descs
const expDesc1 = document.getElementById('expDesc1');
const expDesc2 = document.getElementById('expDesc2');
const expDesc3 = document.getElementById('expDesc3');
expDesc1.innerText = personData.expdesc1;
expDesc2.innerText = personData.expdesc2;
expDesc3.innerText = personData.expdesc3;

//start data
const expDate1 = document.getElementById('expDate1');
const expDate2 = document.getElementById('expDate2');
const expDate3 = document.getElementById('expDate3');
expDate1.innerText = `${personData.expsd1} to ${personData.exped1}`;
expDate2.innerText = `${personData.expsd2} to ${personData.exped2}`;
expDate3.innerText = `${personData.expsd3} to ${personData.exped3}`;

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
console.log('hellooo');

//setting profile picture and skills
let picture = document.getElementById('personPfp');
console.log(personData.pictureURL);
picture.setAttribute('src', personData.pictureURL);

skill1.innerText = personData.skill1;
skill2.innerText = personData.skill2;
skill3.innerText = personData.skill3;
skill4.innerText = personData.skill4;
skill5.innerText = personData.skill5;
skill6.innerText = personData.skill6;

console.log(skill1, personData.skill1);
