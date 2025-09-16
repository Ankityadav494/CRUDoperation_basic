const model = require('./modules/user');
const express=require('express');
const app=express();
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/read',async (req,res)=>{
    let users=await model.find();
    res.render('read',{users:users});
});

app.post('/create', async (req, res) => {
  
    let { name, email,  image_url } = req.body;
     await model.create({
    name, email,  image_url
    })
    res.redirect('/read');
});

// app.get('/create', async function(req,res){
//   let usercreated = await  model.create({
//         name:'Ankit',
//         email:'Ankityadajbjbx',
//     phone_no:1234567890
//     })
//     res.send(usercreated)
//     console.log('data added');
// });

// app.get('/read', async(req,res)=>{
//     let user = await model.find({name :'Ankit'});
//     res.send(user);
// }); 

// app.get('/update', async (req,res)=>{
//     let updateduser=await model.findOneAndUpdate({email:'Ankityadajbjbx'},{name:'Ankit Yadav'},{new:true});
    
//     res.send(updateduser);
//     console.log('data updated');

// });
// app.get('/delete', async (req,res)=>{
//     let deleteduser=await model.findOneAndDelete({name:'Ankit Yadav'});
//     res.send(deleteduser);
//     console.log('data deleted');
// });
app.listen(3000);
