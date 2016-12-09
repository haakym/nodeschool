const fs = require('fs')
const file = process.argv[2]

const newLinesCount = 
	fs.readFileSync(file, 'utf-8', 
		(err, data) => {
			if (err) throw err
			return data
	}).split('\n').length - 1

console.log(newLinesCount)