
const complimentBtn = document.getElementById("complimentButton")
const getFortuneBtn = document.getElementById("fortuneButton")
const taskForm = document.getElementById("task-form")
const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")
const getAll = document.getElementById("getAll")
const getAllBtn = document.getElementById("getAllBtn")
const deleteBtn = document.getElementById("deleteBtn")
const updateBtn = document.getElementById("updateBtn")
const updateInput = document.getElementById("update-input")
const form = document.querySelector('#contact')

function update() {
    taskList.innerHTML = ``
    updateInput.value = taskInput
}


const getTasks = () => {
    
    axios.get('http://localhost:4000/api/tasks').then((res)=>{
        
        generateTasks(res.data)
       
    }).catch((err)=>{
        console.error(err)
    })
}



const updateItem =()=>{
    axios.put(`http://localhost:4000/api/${id}`).then((res)=>{
        update(res.data)
    }).catch((err)=>{
        console.log(err)
    })
}

const deleteItem =() => {
    axios.delete(`http://localhost:4000/api/${id}`).then((res)=>{
       console.log(res.data)
    }).catch((err)=>{
        console.error(err)
    })
}

const generateTasks =(list) =>{
  
    taskList.innerHTML = ``
    list.forEach((task)=>{
     let li = document.createElement('li')
     li.innerText = task
     getAll.appendChild(li)
    })
}



const handleSubmit = (event) =>{
   event.preventDefault()
  
  
   let newTask = taskInput.value

   console.log(newTask)

   let bodyObj ={
    newTask:newTask
   }

   axios.post('http://localhost:4000/api/tasks',bodyObj ).then((res)=>{
               console.log(res.data)
               
            alert(`your ${newTask} added`)
            
            
   }).catch((err)=>{
     console.error(err)
   })
}







const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then(res => {
            const data = res.data;
            alert(data);
    });

}

function handleForm(evt) {

	 form = alert('Your details have been submitted, we will get back to you shortly!')
	
	
}




form.addEventListener('submit', handleForm)
getFortuneBtn.addEventListener('click', getFortune)

taskForm.addEventListener('submit', handleSubmit)

complimentBtn.addEventListener('click', getCompliment)
getAllBtn.addEventListener('click', getTasks ) 
deleteBtn.addEventListener('click', deleteItem) 
updateBtn.addEventListener('click',updateItem )         
