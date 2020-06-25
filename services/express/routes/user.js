const crypto = require('crypto')
const express = require('express')
const axios = require('axios')
const router = express.Router()
const jwt = require('jsonwebtoken')
const redis = require('../db/redis')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    // console.log('Time: ', Date.now())
    next()
})

router.get('/api/users', (req, res) => {
    res.json([
        "Welcome to Bitgames"
    ])
})

// router.post('/api/test', (req, res) => {
//     // let bUrl = 'https://testnet.binancefuture.com' 
//     let bUrl = 'https://api.binance.com'
//     let stamp = new Date()
//     axios({
//         method: 'get',
//         url: bUrl + '/api/v3/ping',
//         headers: {
//             'X-MBX-APIKEY': process.env.BINANCE_API
//         },
//         data: {
//             symbol: 'BTCUSDT',
//             side: 1,
//             type: 1,
//             timeInForce: 2,
//             quantity: 10.1,
//             timestamp: stamp
//         }
        
//     })
//     .then((result) => {
//         res.json({test_trade: result})
//     })
//     .catch((err) => {
//         res.json({e: err})
//     })
    
// })

router.get('/api/test', (req, res) => {
    // let bUrl = 'https://testnet.binancefuture.com' 
    let bUrl = 'https://api.binance.com'
    let stamp = new Date()
    axios({
        method: 'get',
        url: bUrl + '/api/v3/avgPrice?symbol=BTCUSDT'
    })
    .then((result) => {
        console.log(result.data)
        res.json(result.data)
    })
    .catch((err) => {
        res.json({e: err})
    })
    
})

router.get('/api/btcpairs', (req, res) => {
    res.json([
        "Welcome to Bitgames"
    ])
})

module.exports = router