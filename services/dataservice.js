const db=require("../services/db")

const register=(uid,uname,pswd)=>{
    return db.User.findOne({uid}).then((result)=>{
        console.log(result)
        if(result){
            return{
                status:"false",
                statuscode:"422",
                message:"user already exists"
            }
        }
        else{
            const newuser=new db.User({
                uid,
                uname,
                pswd
            })
            console.log(newuser);
            newuser.save()
        
        return{
            status:"true",
            statuscode:"200",
            message:"registration successfull"
        
        
        }
    }

    })
}

const login=(uid)=>{
    return db.User.findOne({uid}).then((result)=>{
        if(result){
            return{
                status:true,
                statuscode:200,
                message:"successfully login"
            }
        }
        else{
            return{
                status:false,
                statuscode:422,
                message:"no user exist register new one"
            }
        }
    })
}

const buy=(uid,pswd)=>{
    return db.User.findOne({uid}).then((result)=>{
        if(result){
            return{
                status:true,
                statuscode:200,
                message:"success"
            }
        }
        else{
            return{
                status:false,
                statuscode:422,
                message:"error occured"
            }
        }
    })
}

module.exports={
    register,
    login,
    buy,
}
