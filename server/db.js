const mongoose =require('mongoose') ;

const mongoURI= "mongodb://localhost:27017/seproj"

const connectToMongo= () => {

mongoose.connect(mongoURI, ()=>{

console.log("Connected shukrr") ;
})

}

module.exports= connectToMongo ;

