
function main(){

	var prompt = require('prompt');

  	prompt.start();

	prompt.get(['spelling'], function (err, result) {
    	if (err) { console.log(err); return 1; }
    	console.log('Command-line input received:');
    	console.log('  Username: ' + result.spelling);
  	});

}

main();

