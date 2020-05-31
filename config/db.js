const mongoose = require('mongoose')

const connectDB=async()=>{
	try{
		// await mongoose.connect('mongodb://localhost:27017/Project',{
		// 	useNewUrlParser:true,
		// 	useUnifiedTopology:true,
		// 	useFindAndModify: false,
		// 	useCreateIndex: true
		// })
		await mongoose.connect('mongodb+srv://rev123:rev123@cluster0-j4qgb.mongodb.net/test?retryWrites=true&w=majority',{ 
			useNewUrlParser:true,
			useUnifiedTopology:true,
			useFindAndModify: false,
			useCreateIndex: true
		});

		console.log("MongoDB connected")
	}catch(err){
		console.log(err.message)
		//exit process with failure
		process.exit(1)
	}
}

module.exports = connectDB
