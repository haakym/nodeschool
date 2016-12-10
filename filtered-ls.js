const fs = require('fs')
const path = require('path')

const filePath = process.argv[2]
const ext =  '.' + process.argv[3]

fs.readdir(filePath, (err, files) => {
	filteredList = files
		.filter(item => path.extname(item) === ext)
		.forEach(item => console.log(item))
})