var request = require('request');
var crypto = require('crypto');
var querystring = require('querystring');

var baseURL = 'https://www.miningrigrentals.com/api/v1/'

function MiningRigRentalsAPI(key, secret){
	this.key = key;
	this.secret = secret;
	this.lastNonce = (new Date).getTime();
}

MiningRigRentalsAPI.prototype.listRigs = function(args, callback){
	// Check if the callback is being passed in as args
	if (!args || typeof args === "function"){
		callback = args;
		callback('Error: You must provide a type! ex. { type: "scrypt" }');
		return;
	}
	
	args['method'] = 'list';
	this.callAPI('rigs', args, function(error, body){
		callback(error, body);
	});
}

MiningRigRentalsAPI.prototype.getRigDetail = function(id, callback){
	// Check if the callback is being passed in as args
	if (!id || typeof id === "function"){
		callback = args;
		callback('Error: You must provide a rig ID!');
		return;
	}

	this.callAPI('rigs', {method: 'detail', id: id}, function(error, body){
		callback(error, body);
	});
}

MiningRigRentalsAPI.prototype.listMyRigs = function(callback){
	this.callAPI('account', {method: 'myrigs'}, function(error, body){
		callback(error, body);
	});
}

MiningRigRentalsAPI.prototype.listMyRentals = function(callback){
	this.callAPI('account', {method: 'myrentals'}, function(error, body){
		callback(error, body);
	});
}

MiningRigRentalsAPI.prototype.getRentalDetail = function(id, callback){
	// Check if the callback is being passed in as args
	if (!id || typeof id === "function"){
		if (typeof id === "function") callback = id;
		callback('Error: You must provide a rental ID to get more details!');
		return;
	}

	this.callAPI('rental', {method: 'detail', id: id}, function(error, body){
		callback(error, body);
	});
}

MiningRigRentalsAPI.prototype.updateRig = function(args, callback){
	if (!args || typeof args === "function"){
		if (typeof args === "function") callback = args;
		callback('Error: You must provide arguments in order to update a rig!');
		return;
	}

	args['method'] = 'update';
	this.callAPI('rigs', args, function(error, body){
		callback(error, body);
	});
}

MiningRigRentalsAPI.prototype.rentRig = function(args, callback){
	if (!args || typeof args === "function"){
		if (typeof args === "function") callback = args;
		callback('Error: You must provide rig arguments in order to rent a rig!');
		return;
	}

	args['method'] = 'rent';
	this.callAPI('rigs', args, function(error, body){
		callback(error, body);
	});
}

MiningRigRentalsAPI.prototype.getBalance = function(callback){
	this.callAPI('account', {method: 'balance'}, function(error, body){
		callback(error, body);
	});
}

MiningRigRentalsAPI.prototype.listFavoritePools = function(callback){
	this.callAPI('account', {method: 'pools'}, function(error, body){
		callback(error, body);
	});
}

MiningRigRentalsAPI.prototype.listProfiles = function(callback){
	this.callAPI('account', {method: 'profiles'}, function(error, body){
		callback(error, body);
	});
}

MiningRigRentalsAPI.prototype.callAPI = function(object, args, callback){
	var nonce = this.lastNonce = ++this.lastNonce

	// Set the nonce in the args
	args['nonce'] = nonce;

	// Generate the query
	var query = querystring.stringify(args);

	// Sign the query
	var hmac_digest = crypto.createHmac("sha1", this.secret).update(query).digest('hex');
	
	var options = {
		method: 'POST',
		headers: {
			'x-api-sign': hmac_digest,
			'x-api-key': this.key
		},
		url: baseURL + object + '?' + query,
		body: query
	};

	request(options, function (error, response, body) {
		callback(error, body);
	});
}

module.exports = MiningRigRentalsAPI;
