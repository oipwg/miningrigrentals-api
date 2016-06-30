# miningrigrentals-api
`miningrigrentals-api` is a simple, easy to use way to interface with the API provided by Mining Rig Rentals.
# Installation
Install using `npm install miningrigrentals-api --save`
# Sample Usage Code
Before we begin, you will need to initialize the module by using the code provided below. Be sure to swap out `api-key` and `api-secret` for your own created in your account.
```javascript
var MiningRigRentalsAPI = require('miningrigrentals-api');

var MRRAPI = new MiningRigRentalsAPI('api-key', 'api-secret');
```
### Rig List
List all rigs available, pass in any arguments supported by API
```javascript
MRRAPI.listRigs({ type: 'scrypt' }, function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});
```
### Rig Detail
Get more details about a specific rig
```javascript
MRRAPI.getRigDetail(1234, function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});
```
### List "My Rigs"
List all the rigs you own.
```javascript
MRRAPI.listMyRigs(function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});
```
### List "My Rentals"
List all of your current rentals.
```javascript
MRRAPI.listMyRentals(function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});
```
### Get Rental Details
Get more details about a rental.
```javascript
MRRAPI.getRentalDetails(1234, function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});
```
### Update Rig
Update a rig that is attached to your account
```javascript
var args = {
	id: 1234,
	name: 'New Name'
}
MRRAPI.updateRig(args, function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});
```
### Rent Rig
Rents a rig using the provided details.
```javascript
var args = {
	id: 1234,
	length: 24, // In hours
	profileid: 4321
}
MRRAPI.rentRig(args, function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});
```
### Get Balance
Get your accounts balance.
```javascript
MRRAPI.getBalance(function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});
```
### List Pools
List the pools attached to your account.
```javascript
MRRAPI.listFavoritePools(function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});
```
### List Profiles
List the profiles currently on your account.
```javascript
MRRAPI.listProfiles(function(error, response){
	if (error){
		console.log(error);
		return;
	}
	console.log(response);
});
```
# More Info
You can view the API docs for Mining Rig Rentals here: https://www.miningrigrentals.com/apidoc