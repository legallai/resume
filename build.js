#!/usr/bin/node

const pug = require('pug');
const fs = require('fs');

const compiledFunction = pug.compileFile('./resume.pug');

function generateResume(lang) {
    fs.readFile(`./${ lang }.json`, 'utf8', (err,data) => {
        if (err) {
            return console.log(err);
        }

        const compiledTemplate = compiledFunction(JSON.parse(data));

        fs.writeFile(`./resume_${ lang }.html`, compiledTemplate, (err, data) => {
            if (err) {
                return console.log(err);
            }
        });
    });
}

generateResume('en');
generateResume('fr');
