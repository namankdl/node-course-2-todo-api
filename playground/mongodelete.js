const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
	//delteMany
	//db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	//	 console.log(result);
	//});
	
	//deleteOne
	//db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
		// console.log(result);
	//});
	
	//findOneAndDelete
	//db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
		//console.log(result);
	//});
	
	
	//db.collection('Users').deleteMany({name: 'Naman'});
	
	db.collection('Users').findOneAndDelete({
	   _id: new ObjectID("5beef8c0debb0427c7ccf368")
	}).then((results) => {
		console.log(JSON.stringify(results,undefined,2));
	});
	
});