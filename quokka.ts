import * as fsa from 'async-file'
import * as fs from 'fs'
import * as path from 'path'

var destination: string = "C:\\Users\\Johannes\\Documents\\VS Tests\\NodeJS\\CreateComponent-master\\cCsdZT"
var compName: string = "cCsdZT"

replaceTemplateStrings(destination, compName)

console.log('Done')

async function replaceTemplateStrings(destination: string, compName: string) {
	var files = await fsa.readdir(destination)
	for (var index = 0; index < files.length; index++) {
		var file = files[index]
		console.log(file)
		var fileExt = path.extname(file)
		console.log(fileExt)
		var filePath = `${destination}/${file}`
		console.log(filePath)
		var newFileContent = await fsa.readFile(filePath, "utf8")/*?*/
		newFileContent = newFileContent.replace(/Template/g, compName)/*?*/
		// fs.writeFileSync(`${__dirname}\\`, newFileContent, 'utf8')
		console.log(`Created: ${filePath}.`)
	}
}

