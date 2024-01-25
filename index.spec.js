const fs = require("fs")
const exchange = require('./index')
describe('Testing lib', () => {
    test('use proxy', () => {
        const jsonfile = "downloaded_integration.json";
        var config = JSON.parse(fs.readFileSync(jsonfile, 'utf8'));
        config.proxy = {
            host: "127.0.0.1",
            port: 8888
        }
        return exchange(config).then((data) => {
            expect(data).toBeDefined()
        })
    });

    test('no proxy', () => {
        const jsonfile = "downloaded_integration.json";
        var config = JSON.parse(fs.readFileSync(jsonfile, 'utf8'));
        return exchange(config).then((data) => {
            expect(data).toBeDefined()
        })
    });

    test('use gateway', () => {
        const jsonfile = "downloaded_integration.json";
        var config = JSON.parse(fs.readFileSync(jsonfile, 'utf8'));
        config.gateway = {
            host: "2f59d4389a8646f4a5bc5c5cad8a4dbe.api.mockbin.io",
            url: "/"
        }
        return exchange(config).then((data) => {
            expect(data).toBeDefined()
        })
    });
})
