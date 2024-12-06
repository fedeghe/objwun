const objwun = require('./../../dist')
const lodash = require('lodash')
const testone = require('@fedeghe/testone')

function ow() { return objwun.filter.apply(null, arguments)}
function lowd() { return lodash.filter.apply(null, arguments)}
const mx = 5e3
const out = Array.from({length: mx}, (_, i) => i).filter(i => i%2)
module.exports = {
    run: () => testone([{
            in: [
                Array.from({length: mx}, (_, i) => i),
                i => i%2,
                0
            ],
            out
        }],
        [
            lowd,
            ow
        ],
        {metrics:{
            timeMem: ({
                time: { single: time},
                mem: { single: mem}
            }) => time * mem
        }}
    ),
    name: 'filter'
}