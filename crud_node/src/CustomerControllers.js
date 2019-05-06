const controller = {};

controller.list = (req, res) => {

req.getConnection((err,conn)) => {

conn.query('SELECT * FROM Customers',(err,Customers)=>{



	if(err){
res.json(err);


	}
	console.log(Customers);
});


});






}
module.exports