# miningrigrentals-api
`miningrigrentals-api` is a simple, easy to use way to interface with the API provided by Mining Rig Rentals.

# Sample Usage Code
```javascript
var MiningRigRentalsAPI = require('miningrigrentals-api');

var MRRAPI = new MiningRigRentalsAPI('api-key', 'api-secret');

// Get all rigs
MRRAPI.listRigs(function(rigList){
	console.log(rigList);
});

// List only scrypt rigs
MRRAPI.listRigs({ type: 'scrypt' }, function(rigList){
	console.log(rigList);
});
```

# More Info
You can view the API docs for Mining Rig Rentals here: https://www.miningrigrentals.com/apidoc