const objwun = require('./../../dist')
const lodash = require('lodash')
const testone = require('@fedeghe/testone')

function ow() { return objwun.reduce.apply(null, arguments)}
function lowd() { return lodash.reduce.apply(null, arguments)}
const mx = 5e3
module.exports = {
    run: () => testone([{
            in: [
                Array.from({length: mx}, (_, i) => i),
                (acc, i) => acc+i,
                0
            ],
            out: mx*(mx-1)/2
        }],
        [
            lowd,
            ow
        ],
        {metrics:{
            timeMem: ({time: {single: time}, mem: {single: mem}}) => time * mem
        }}
    ),
    name: 'reduce'
}