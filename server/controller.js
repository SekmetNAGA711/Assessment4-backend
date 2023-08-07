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

    getRecords: (req, res) =>{
        const records =[
            {
            
                firstName: 'Kate',
                lastName: 'Anderson', 
                FoundationsNumber: 46,
                ChosenField: 'Cyber Security', 
                Description: "During my time learning, I was able to pursue a career in IT compliance. Now, I am an ethical hacker in the field of cybersecurity."
            }, 
            {
        
                firstName: "Pam", 
                lastName: "Diaz", 
                FoundationsNumber: 37,
                ChosenField: "Python", 
                Description: "I decided to pursue a career in Python and am currently employed at Amazon. I look forward to exploring opportunities in freelancing."
            }, 
            {
                 
                firstName: "John", 
                lastName: "Anderson", 
                FoundationsNumber: 23, 
                ChosenField: "Web Development", 
                Description: "I ventured into web development and it turned out to be the best decision I've ever made. I'm extremely pleased that I chose this course, as it allowed me to discover my passion for web development. Currently, I work as a freelancer."
            }, 
            {
             
                firstName: "Charles", 
                lastName: "Thompson", 
                FoundationsNumber: 7,
                ChosenField: "iOS Development", 
                Description: "I chose to pursue iOS development. At the beginning of the course, I was unsure if I would have enough time to complete it, but I'm glad everything worked out for me. Now, I am back to honing my skills."
            }
        ]
        res.status(200).send(records)
    },

    createRecord: (req, res)=>{
        const {firstName, lastName, FoundationsNumber, ChosenField, Description } = req.body;
        let record = {
            firstName: firstName,
            lastName: lastName,
            FoundationsNumber:  +FoundationsNumber,
            ChosenField: ChosenField,
            Description : Description
      
           
        }
        res.status(200).send(record)
    },
}

