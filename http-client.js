const http = require('http')
const url = process.argv[2]

http.get(url, response => {
	response.setEncoding('utf8')
	  	.on('data', data => {
			console.log(data)
		}).on('error', function(error) {
		  console.log("Error: " + error.message)
		});
})