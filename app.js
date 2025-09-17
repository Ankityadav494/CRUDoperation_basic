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

app.post('/create', async (req, res) => {
  
    let { name, email,  image_url } = req.body;
     await model.create({
    name, email,  image_url
    })
    res.redirect('/read');
});

app.get('/read',async (req,res)=>{
    let users=await model.find();
    res.render('read',{users});
});


app.get('/edit/:userid', async (req,res)=>{
    let user = await model.findById(req.params.userid);
    res.render('edit', { user });
});
app.post('/update/:userid', async (req,res)=>{
        let {name,email,image_url}=req.body;
        await model.findByIdAndUpdate(req.params.userid,{name,email,image_url});
        res.redirect('/read');
});

app.listen(3000);

