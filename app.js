const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const _=require("lodash");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

const mongoose = require("mongoose");
const { redirect } = require("express/lib/response");
mongoose.connect("mongodb+srv://Admin-Hamza:mahmoud333@cluster0.8anfi.mongodb.net/todolistDB");
// mongoose.connect("mongodb://localhost:27017/todolistDB");//connect local, notice that there is no more deprecation warning
//another way to create the schema insteed of taking new object from mongoose.Schema()
const itemsSchema = {
    name:String
}
const listSchema = {
    name:{type:String, required:true},
    items:[itemsSchema]
}
const Item = mongoose.model("Item", itemsSchema);//we can now not use the Item collection and use the list collection direct
const List = mongoose.model("List",listSchema);
const item1 = new Item({
    name:"Welcome to your To Do List."
});
const defaultItems = [item1];
// this is the other way to insert records insteed of using item.save() for every single one.
// Item.insertMany(items, function(err){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("successfuly insert items in database.");
//     }
// });


app.get("/",(req,res)=>{
    let day = date.getDay();
    
    Item.find({},function(err,foundItems){ // be careful the error parameter first then the returned list
        if (err){
            console.log(err);
        }
        else if(foundItems.length===0){
            Item.insertMany(defaultItems, function(err){
                if (err){
                    console.log(err);
                }
                else{
                    console.log("successfuly insert items in database.");
                }
            });
            res.redirect("/");
        }
        else{ // why we didn't just render the data without else?? as we need the query to be excuted two times (one for check for the data exists or not and insert it and the second for getting the data inserted to be rendered)
            List.find({},function(err,listsNames){
                if(!err){
                    res.render("list",{listTitle: "Home" ,listsNames: listsNames, listItems: foundItems });
                }
            })
        }
    });
})

//using route parameters
// var newCreated = false;
app.get("/:customListName",function(req,res){
    const customListName = _.capitalize(req.params.customListName);
    List.findOne({name:customListName},function(err,foundList){//we used findOne() as it returns null if item not found and returns an object if found but find() returns cursor if item not found and returns list of objects if found.
        if(!err){
            if(!foundList){
                // newCreated = true;
                const list = new List({
                    name:customListName,
                    items:defaultItems
                });
                list.save();
                res.redirect("/"+customListName);
            }else{
                List.find({},function(err,listsNames){
                    if(!err){
                        res.render("list",{listTitle: foundList.name ,listsNames: listsNames , listItems: foundList.items });
                        // if(newCreated){
                        //     document.querySelectorAll(".listName")[listsNames.length-1].addEventListener("click",function(){
                        //         console.log("iam in the event handeler");
                        //         newCreated = false;
                        //         res.redirect("/"+this.textContent)
                        //     })
                        // }
                    }
                })
            }
        }  
    })
});


app.post("/",function(req,res){
    const listName =req.body.listTitle;
    const item = new Item({
        name:req.body.newItem
    });
    if(listName==="Home"){
        item.save();
        res.redirect("/");
    }else{
        List.findOne({name:listName},function(err,foundList){
            if(!err){
                foundList.items.push(item);
                foundList.save(); //as we edit the array of items in the foundList we need to save the foundList.
                console.log("success to add the item in the "+listName+" list");
                res.redirect("/"+listName);
            }
        })
    }
});

app.post("/addNew",(req,res)=>{
    res.redirect("/"+req.body.newList);
})

app.post("/deleteItem",(req,res)=>{
   let itemId=req.body.checkedbox;
   const listName = req.body.listTitle;

   if(listName==="Home"){
    setTimeout(() => {
        Item.findByIdAndRemove(itemId,function(err){
            if(!err){
                console.log("success to delete the list item.")
            }
        })
        res.redirect("/");
    }, 500);
   }else{
    setTimeout(() => {
        List.findOneAndUpdate({name:listName},{$pull:{items:{_id:itemId}}},function(err,foundlist){//'findOne' finds the record we want to update and 'AndUpdate' updates the items array in the document
            if(!err){
                res.redirect("/"+listName);
            }
        });
    }, 500);  
   }
})

app.post("/sideBar",function(req,res){
    List.findByIdAndRemove(req.body.listId,function(err){
        if(!err){
            console.log("success to delete the list.")
        }
    })
    res.redirect("/");
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port , ()=>{
    console.log("server has started successfully");
})
