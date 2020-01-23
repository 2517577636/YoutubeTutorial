const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members  = require('../../Members');

// Get All Members
router.get('/', (req, res) => {
    res.json(members)
 });
 // app.get('/', (req, res) => {
 //     res.send('<h1>Welcome to express</h1>')
 // })
 

// Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id == req.params.id);

    // console.log(members.filter(member => member.id === parseInt(req.params.id)));
    
    if(found){
        res.json(members.filter(member => {
            member.id == parseInt(req.params.id)
        }));
    }else{
        res.status(400).json({msg: `No member with the of ${req.params.id}`});
    }
    
//    res.send(req.params.id);
})

// Create Member 
router.post('/', (req, res) => {
    // res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }

    // check if newMember contains a name and email 
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: "Please include a name and email"})
    }

    members.push(newMember);
    res.json(members);
})

// Update Member
router.post('/:id', (req, res) => {
    const found = members.some(member => member.id  === parseInt(req.params.id));
    
    if(found){
        const updMember = req.body;
        
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
        
                res.json({msg: 'Member updated', member});
            } 
        })
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }

})

// Delete Member 
router.delete("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        const  deleteM = members.filter(member => member.id !== parseInt(req.params.id));
        res.json({msg: "Member Deleted!", members: deleteM});
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
})

module.exports = router;
