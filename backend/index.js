const express = require('express');
const http = require('http');
const moexApi = require('moex-api');

const moex = new moexApi;

moex.securityMarketData("USD000UTSTOM").then((security) => {
    console.log(security.node.last);
    console.log(security);
})

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    if(req.url === '/users') {
        return res.end(JSON.stringify([
            { id: 1, name: 'Serega' },
            { id: 2, name: 'Vova' }
        ]))
    }
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    if(req.url === '/somedata') {
        return res.end(JSON.stringify([
            { id: 1, val: 23 },
            { id: 2, val: 10 }
        ]))
    }
    res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })
    res.end(`<h1>Im from server!</h1>`);
});


server.listen(PORT, () => { console.log(`Server started on PORT ${PORT}`) });
