console.log('hello');
type localstorageForm = {
  number: string;
  description?: string;
  email?: string;
  skills?: string[];
  name?: string;
};

let form: localstorageForm = {
  number: '',
};

const buttons = document.querySelectorAll('button');
let personData: any;
buttons.forEach((item) => {
  item.addEventListener('click', () => {
    let templateNumber = item.getAttribute('data-template');
    if (templateNumber) {
      form.number = templateNumber;
      localStorage.setItem('form', JSON.stringify(form));
      window.location.replace('/form.html');
    }
    //now we have which template was selected
  });
});

let formElement = document.getElementById('resume-form');
if (formElement) formElement.addEventListener('submit', submitForm);

function submitForm(e: Event) {
  console.log('form submitted');
  e.preventDefault();
  if (e.target) getData(e.target);
}

function getData(form: any) {
  var formData = new FormData(form);

  for (var pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
  console.log(formData);

  personData = Object.fromEntries(formData);
  localStorage.setItem('formdata', JSON.stringify(personData));
  insertData();
  window.open('http://localhost:8080/assets/template1/index.html');
}

// plotData for form1
//@ts-ignore
function insertData() {
  console.log(personData);
  let personName = document.getElementById('personName');
  if (personName && personData) personName.innerText = personData.name;
}
