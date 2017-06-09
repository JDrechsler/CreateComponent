// var args: string[] = ["C:\node\node.exe", "C:\Users\DREC006.ASYSOFFICE\Documents\NodeJS\CreateComponent\CreateComponent.ts"]
// args.push("cc")
// args.push("cCsdZT")

var args = process.argv /*?*/
if (args.length != 4) {
	console.log("Please check your params. Correct would be: cc compName.")
	process.exit(0)
}


var scriptCall: string = args[2] /*?*/
var componentName: string = args[3] /*?*/
var regCheckCompName: RegExp = /^[a-zA-Z]+$/g

componentName.match(regCheckCompName) /*?*/

if (scriptCall === 'cc' && componentName.match(regCheckCompName)) {
	console.log("compName correct.")
} else {
	console.log("Please only use compName in this format a-Z.")
	process.exit(0)
}

var componentLocation: string = `${__dirname}/${componentName}` /*?*/

console.log(`Erstellt wird Component ${componentName} im Ordner ${componentLocation}.`)
console.log('Script successfully ended.')