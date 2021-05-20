const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/demoDb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const User=mongoose.model('User',{
    uid:String,
    uname:String,
    pswd:String,

})
 
module.exports={
    User
}