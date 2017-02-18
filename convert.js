const fs = require('fs')
const path = require('path')
const linereader = require('line-reader')

const testing = false

//
// Start: Check for existence of CSV file
//

function start () {
    fs.stat(fileIn, (err, stat) => {
        if (err) {
            console.error('Problem with file: ', fileIn)
            console.error(err)
            return false
        }
        readFile()
    })
}

//
//  Read CSV File
//

function readFile () {
    linereader.eachLine(fileIn, (line, last) => {
        // get object from line
        const original = getObjectFromLine(line)
        if (original) {
            // push line object into global array
            lines.push(original)
        }
        // write final array to database
        if (last) {
            writeFile(lines)
        }
    })
}

function getObjectFromLine (line) {
    const arr = line.split(',')
    const obj = {
        time: arr[0],
        sys: arr[1],
        dia: arr[2],
        bpm: arr[3]
    }
    return obj
}

//
// Write results to file
//

function writeFile (lines) {
    let data = 'window.HEART=window.HEART||{}; window.HEART.data = ' + JSON.stringify(lines) + ';'
    data = data.replace(/\[{/g, '[\n{')
    data = data.replace(/}\]/g, '}\n]')
    data = data.replace(/},{/g, '},\n{')

    if (!testing) {
        fs.writeFile(fileout, data, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log('Wrote to: ' + fileout + ' with ' + lines.length + ' entries.')
        })
    }
}


//
//  Init
//

// check arguments
const fileArg = process.argv[2]
if (!fileArg) return console.error('No Input File Provided.')

// where final data is stored
const lines = []

// determine full path name to file
const fileIn = path.normalize(__dirname + '/' + fileArg)
const fileout = './heart-stats.js';

// check file/kick off actions
start()
