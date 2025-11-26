import mongoose from 'mongoose';

const schems = new mongoose.Schema({

      title:{
         type:String,
         require:true
       },
       description:{
         type:String,
         require:true
       },
       category:{
         type:String,
         require:true
       },
       author:{
         type:String,
         require:true
       },
       image:{
         type:String,
         require:true
       },
       authorimg:{
         type:String,
         require:true
       },
       date:{
           type:Date,
           default:Date.now()
       }

});

const blogmodel = mongoose.models.blog || mongoose.model('blog',schems);

export default blogmodel;