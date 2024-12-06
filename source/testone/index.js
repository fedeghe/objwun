const filter = require('./filter')
const reduce = require('./reduce')
const fns = [filter, reduce]
Promise.all(fns.map(f => f.run())).then(
    results => 
        console.table(
            results.map(
                (result, i) => [fns[i].name, result.metrics.timeMem]
            )
        )
    
)
