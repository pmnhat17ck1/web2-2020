const fetch = require('node-fetch');
const { create } = require('domain');

const API_URL = 'http://localhost:3000';


async function request(method, path, body) {
    const res = await fetch(`${API_URL}${path}`, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        const { error } = await res.json();
        throw Error(error);
    }
    return res.json();
}


module.exports = { request };