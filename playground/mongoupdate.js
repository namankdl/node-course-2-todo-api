const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
	
	/*db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5be9c7813ec19518e8751d5b')
	},{
		$set:{
			completed:true
		}
	},{
		returnOriginal:false
	}).then((result) =>{
		console.log(result);
	});
	*/
	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5beef8ebdebb0427c7ccf386')
	},{
		$set:{
			name: 'Garima'
		},
	},{
		returnOriginal:false
	}).then((result) =>{
		console.log(result);
	});
	
});