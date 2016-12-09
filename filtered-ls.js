const fs = require('fs')
const path = process.argv[2]
const ext =  '.' + process.argv[3]

fs.readdir(path, (err, files) => {
	filteredList = files
		.filter((item) => item.indexOf(ext) !== -1 )
		.forEach((item) => console.log(item))
	console.log(filteredList)
})