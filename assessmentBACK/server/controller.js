let tasks = ['Python for beginners Vol.1', 'JavaScript, Secon Edition']


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    findYourFortune: (req, res)=>{
        const fortune = ['A faithful friend is a strong defense', 'A friend is a present you give yourself', 'A good time to finish up old tasks.', 'A pleasant surprise is waiting for you.', 'A smile is your personal welcome mat.' ];
        let fortuneIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[fortuneIndex];
        res.status(200).send(randomFortune);
    },

   addTask: (req, res) => {
    console.log(req.body) 
    tasks.push(req.body.newTask)
    
    res.status(200).send(tasks)
   },

   getTasks: (req, res) => {
    res.status(200).send(tasks)
   },
   
   deleteItem: (req, res)=>{
    
    let index = tasks.findIndex((elem)=> elem.id === req.params.id)
    tasks.splice(index, 1)
    res.status(200).send(tasks)
   
   },

   updateItem: (req, res) =>{
    const {newTask} = req.body;
    for(let i= 0; i<tasks.length; i++){
        if(i === req.params.id){
            tasks.splice(i, 1)
            res.status(200).send(tasks)
        }else{
            console.log("could not update at this time")
        }
    }
   }
}