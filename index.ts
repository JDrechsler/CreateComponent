#! /usr/bin/env node
import * as fs from 'fs'
import * as fsa from 'async-file'
import * as ncp from 'ncp'
import * as path from 'path'

var isTestMode: boolean = false

var executionPath: string = process.cwd()

var args: string[]

if (isTestMode) {
	console.log("---Testmode---")
	args = ["C:\node\node.exe", "C:\Users\DREC006.ASYSOFFICE\Documents\NodeJS\CreateComponent\CreateComponent.ts"]
	args.push("cCsdZT")
} else {
	console.log("---Normal Mode V1.0.0---")
	args = process.argv /*?*/
	// args.forEach(element => {
	// 	console.log(element)
	// });
	// console.log(__dirname)

	if (args.length < 3 || args.length > 3) {
		console.log('Please correct your params.')
		process.exit(1)
	}
}

var componentName: string = args[2] /*?*/
var regCheckCompName: RegExp = /^[a-zA-Z]+$/g

if (componentName.match(regCheckCompName)/*?*/) {
	console.log("compName correct.")
	createComponent(componentName)
} else {
	console.log("Please only use compName in this format a-Z.")
}

function createComponent(compName: string) {
	var componentLocation: string = `${executionPath}/${componentName}` /*?*/
	console.log(`Erstellt wird Component ${componentName} im Ordner ${executionPath}.`)
	var source: string = `${__dirname}\\Template`
	copyTemplate(source, componentLocation)
}

function copyTemplate(source: string, destination: string) {
	destination/*?*/
	componentName/*?*/

	ncp(source, destination, function (err) {
		if (err) {
			return console.error(err);
		}
		console.log('done copying template!');
		replaceTemplateStrings(destination, componentName)
	});
	replaceTemplateStrings(destination, componentName)

}

async function replaceTemplateStrings(destination: string, compName: string) {
	var files = await fsa.readdir(destination)
	for (var index = 0; index < files.length; index++) {
		var file = files[index]//Template.html /*?*/
		var fileExt = path.extname(file)//.html /*?*/
		var filePath = `${destination}/${file}`//....\Template\Template.html /*?*/
		var newFileContent = await fsa.readFile(filePath, "utf8")/*?*/
		newFileContent = newFileContent.replace(/Template/g, compName)/*?*/
		var newFilePath = `${executionPath}\\${compName}\\${compName}${fileExt}`/*?*/
		await fsa.writeFile(filePath, newFileContent, 'utf8')
		await fsa.rename(filePath, newFilePath)
		console.log(`Created: ${newFilePath}.`)
	}
	console.log('Script successfully ended.')
}

function fsExistsSync(myDir) {
	try {
		fs.accessSync(myDir);
		return true;
	} catch (e) {
		return false;
	}
}

