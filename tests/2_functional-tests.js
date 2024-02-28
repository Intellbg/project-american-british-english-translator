const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('VALID', function (done) {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: "We watched the footie match for a while.",
                locale: "british-to-american"
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body['translation'], `We watched the <span class="highlight">soccer</span> match for a while.`);
                done();
            });
    });
    test('INVALID LOCALE', function (done) {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: "We watched the footie match for a while.",
                locale: "british-to-amesrican"
            })
            .end(function (err, res) {
                assert.equal(res.body['error'], 'Invalid value for locale field');
                done();
            });
    });
    test('MISSING TEXT', function (done) {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                locale: "british-to-amesrican"
            })
            .end(function (err, res) {
                assert.equal(res.body['error'], 'Required field(s) missing');
                done();
            });
    });
    test('MISSING LOCALE', function (done) {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: "We watched the footie match for a while.",
            })
            .end(function (err, res) {
                assert.equal(res.body['error'], 'Required field(s) missing');
                done();
            });
    });
    test('EMPTY TEXT', function (done) {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: "",
                locale: "british-to-amesrican"
            })
            .end(function (err, res) {
                assert.equal(res.body['error'], 'No text to translate');
                done();
            });
    });
    test('No translation', function (done) {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: "Hi darling",
                locale: "british-to-american"
            })
            .end(function (err, res) {
                assert.equal(res.body['translation'], "Everything looks good to me!");
                done();
            });
    });
});
