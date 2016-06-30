var MiningRigRentalsAPI = require('./index.js');

var MRRAPI = new MiningRigRentalsAPI('api-key', 'api-secret');

// List only scrypt rigs
MRRAPI.listRigs({ type: 'scrypt' }, function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});


// List your rigs
MRRAPI.listMyRigs(function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});

// List your rigs
MRRAPI.listMyRentals(function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});


// List your rigs
MRRAPI.getBalance(function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});

// List your rigs
MRRAPI.listFavoritePools(function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});

// List your rigs
MRRAPI.listProfiles(function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});