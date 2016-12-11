const fs = require('fs')
const path = require('path')

module.exports = (dir, ext, callback) => {
	ext = '.' + ext

	fs.readdir(dir, (err, files) => {
		if (err) return callback(err)

		filteredFiles = files.filter(file => path.extname(file) === ext)

		return callback(null, filteredFiles)
	})
}
