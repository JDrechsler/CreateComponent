#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs");
var fsa = require("async-file");
var ncp = require("ncp");
var path = require("path");
var isTestMode = false;
var executionPath = process.cwd();
var args;
if (isTestMode) {
    console.log("---Testmode---");
    args = ["C:\node\node.exe", "C:\Users\DREC006.ASYSOFFICE\Documents\NodeJS\CreateComponent\CreateComponent.ts"];
    args.push("cCsdZT");
}
else {
    console.log("---Normal Mode V1.0.0---");
    args = process.argv; /*?*/
    // args.forEach(element => {
    // 	console.log(element)
    // });
    // console.log(__dirname)
    if (args.length < 3 || args.length > 3) {
        console.log('Please correct your params.');
        process.exit(1);
    }
}
var componentName = args[2]; /*?*/
var regCheckCompName = /^[a-zA-Z]+$/g;
if (componentName.match(regCheckCompName) /*?*/) {
    console.log("compName correct.");
    createComponent(componentName);
}
else {
    console.log("Please only use compName in this format a-Z.");
}
function createComponent(compName) {
    var componentLocation = executionPath + "/" + componentName; /*?*/
    console.log("Erstellt wird Component " + componentName + " im Ordner " + executionPath + ".");
    var source = __dirname + "\\Template";
    copyTemplate(source, componentLocation);
}
function copyTemplate(source, destination) {
    destination; /*?*/
    componentName; /*?*/
    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('done copying template!');
        replaceTemplateStrings(destination, componentName);
    });
    replaceTemplateStrings(destination, componentName);
}
function replaceTemplateStrings(destination, compName) {
    return __awaiter(this, void 0, void 0, function () {
        var files, index, file, fileExt, filePath, newFileContent, newFilePath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fsa.readdir(destination)];
                case 1:
                    files = _a.sent();
                    index = 0;
                    _a.label = 2;
                case 2:
                    if (!(index < files.length)) return [3 /*break*/, 7];
                    file = files[index] //Template.html /*?*/
                    ;
                    fileExt = path.extname(file) //.html /*?*/
                    ;
                    filePath = destination + "/" + file //....\Template\Template.html /*?*/
                    ;
                    return [4 /*yield*/, fsa.readFile(filePath, "utf8")]; /*?*/
                case 3:
                    newFileContent = _a.sent() /*?*/;
                    newFileContent = newFileContent.replace(/Template/g, compName); /*?*/
                    newFilePath = executionPath + "\\" + compName + "\\" + compName + fileExt /*?*/;
                    return [4 /*yield*/, fsa.writeFile(filePath, newFileContent, 'utf8')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, fsa.rename(filePath, newFilePath)];
                case 5:
                    _a.sent();
                    console.log("Created: " + newFilePath + ".");
                    _a.label = 6;
                case 6:
                    index++;
                    return [3 /*break*/, 2];
                case 7:
                    console.log('Script successfully ended.');
                    return [2 /*return*/];
            }
        });
    });
}
function fsExistsSync(myDir) {
    try {
        fs.accessSync(myDir);
        return true;
    }
    catch (e) {
        return false;
    }
}
