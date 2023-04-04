import mongoose from "mongoose";


const Connection = async(username, password) => {
    const URI = `mongodb+srv://${username}:${password}@cluster0.qkw14ee.mongodb.net/blogapp`;
    try{
        await mongoose.connect(URI, {useNewUrlParser : true});
        console.log("Database connected successfully")
    }catch(error){
        console.log(error);
    }
}

export default Connection;