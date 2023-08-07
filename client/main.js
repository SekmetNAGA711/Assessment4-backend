const complimentBtn = document.getElementById("complimentButton")
const getFortuneBtn = document.getElementById("fortuneButton")
const getRecordsBtn = document.querySelector('#getall')
const getAllRecordsForm = document.querySelector('getallForm')
const recordForm = document.querySelector('#recordsForm')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newChoosenDropDown = document.querySelector('select')
const newFoundationInput = document.querySelector('#FoundationsNumber')
const newOutcomeText = document.querySelector('textarea')
const recordContainer = document.querySelector('section')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/").then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then(res => {
            const data = res.data;
            alert(data);
    });

}

getFortuneBtn.addEventListener('click', getFortune)



const baseURL = 'http://localhost:4000/api/'

function createRecordCard(record) {
    let recordCard = document.createElement('div')
    recordCard.innerHTML = `<h3>${record.firstName} ${record.lastName}</h3>
    <p>Foundations Number: ${record.FoundationsNumber} | Choosen field: ${record.specification}</p>
    <h4>Outcome</h4>
    <p>${record.outcome}</p>`
    
  
    recordContainer.appendChild(recordCard)
  }
  
  
  
  function clearRecords() {
    recordContainer.innerHTML = ``
  }

const getRecords = () => {
    clearRecords()
    axios.get('http://localhost:4000/api/records/')
    .then((res)=>{
        console.log(res.data)
     res.data.forEach(createRecordCard)
    })
    .catch((err)=>{
      console.error(err)
      
    })
  }


  getRecordsBtn.addEventListener('click', getRecords)


  const createRecord = (event) =>{
    event.preventDefault()
    clearRecords()
    
    
    let body = {
      firstName: newFirstInput.value,
      lastName: newLastInput.value,
      FoundationsNumber: newFoundationInput.value,
      ChosenField: newChoosenDropDown.value,
      newOutcomeText: newOutcomeText
      
    
    }
    axios.post('/api/records', body)
    .then((res)=>{
     res.data.forEach(createRecordCard)
    })
    .catch((err)=>{
      console.error(err)
    })
    newFirstInput.value =""
    newLastInput.value = ""
    newFoundationInput.value = ""
    newChoosenDropDown.value = ""
    newOutcomeText.value = ""
    }
    
    recordsForm.addEventListener('click', createRecord)