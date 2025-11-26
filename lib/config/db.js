import mongoose from 'mongoose';

const ConnectDb = async ()=>{
    try{
       
         await mongoose.connect(process.env.MONGODB_URI);

         console.log('Db Connected Successfuly');
    }catch(error)
    {
       console.log(`Error conncting the Db : ${error}`);
       
    }
}

export default ConnectDb;