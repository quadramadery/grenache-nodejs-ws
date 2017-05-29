// make sure you start 2 grapes
// grape --dp 20001 --apw 30001 --aph 30002 --bn '127.0.0.1:20002'
// grape --dp 20002 --apw 40001 --aph 40002 --bn '127.0.0.1:20001'

'use strict'

const Grenache = require('./../')
const Link = Grenache.Link

const link = new Link({
  grape: 'ws://127.0.0.1:30001'
})
link.start()

setInterval(() => {
  link.put({ v: 'hello world' }, (err, hash) => {
    console.log('data saved to the DHT', err, hash)
    if (hash) {
      link.get(hash, (err, res) => {
        console.log('data requested to the DHT', err, res)
      })
    }
  })
}, 2000)
