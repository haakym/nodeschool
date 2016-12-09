const sumOfArgs = process.argv
	.filter((item) => !isNaN(item))
	.reduce((result, item) => result + Number(item), 0)

console.log(sumOfArgs)