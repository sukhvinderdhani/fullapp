const express = require('express');
const app = express();

const port = process.env.PORT;
app.listen(port, console.log(`listening at ${port}`));


const cors = require('cors');
app.use(cors());

app.use(express.json());


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/newitemstest')

const itemSchema = new mongoose.Schema({
    id:Number,
    name:String
});

const Item = mongoose.model("Item",itemSchema);




app.get('/myitems',(req,res) => {
    Item.find().then((retrieveditem) => {
        res.json(retrieveditem)
    })
    

})

app.post('/myitems',(req,res) => {
const newitem = new Item({name:req.body.name})
newitem.save();
res.json(newitem)

})



