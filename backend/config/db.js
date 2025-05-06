import mongoose from "mongoose";


const conectBD = async()=>{
    try{
        const uri = process.env.MONGODB_URI;
        await mongoose.connect(uri);
        console.log('Mongo DB conectado')
    }catch(error)
    {
        console.log("Erro ao conectar no MongoDB:", error)
        process.exit(1) //finaliza a aplicação
    }
}


export default conectBD;