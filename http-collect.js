const http = require('http')
const url = process.argv[2]

http.get(url, response => {
	let charCount = 0
	let charString = ''
	
	response.setEncoding('utf8')
	  	.on('data', data => {
			charCount += data.length
		}).on('data', data => {
			charString += data
		}).on('end', () => {
			console.log(charCount)
			console.log(charString)
		})
})