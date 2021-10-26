const serverless = require('serverless-http');
const express = require('express')
const got = require("got")
const app = express()

app.get('/', async function (req, res) {
    const headers = {
        "Connection": "keep-alive",
        "sec-ch-ua": '"Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
        "Content-Type": "text/plain;charset=UTF-8",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": "gzip, deflate, br",
    }

    const options = {
        method: "get",
        headers: headers,
        url: 'https://www.google.com/',
    }

    const hej = await got(options)
    res.send(hej)
})

module.exports.handler = serverless(app);