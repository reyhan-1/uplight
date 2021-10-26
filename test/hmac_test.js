var chai  = require('chai');
let chaiHttp = require('chai-http');
let server = require('../main.js');
let should = chai.should();
chai.use(chaiHttp);

// Integration test for Generating an HMAC Token
  describe('HMAC Token Integration Tests', () => {
    it('Invalid request body(the request body should be like: data:{}) so this test should return 400 Bad Request', (done) => {
      chai.request(server)
          .post('/')
          .end((err, res) => {
            res.status.should.be.eql(400);
            res.body.should.be.eql("Correct your request format! Format should be {data : '' }")
            done();
          });
    }),
    it('it should return the token', (done) => {
      let body = {
        "data": "id=MDAwMDAwMDAtMDAwMC0wMDBiLTAxMmMtMDllZGU5NDE2MDAz"
      }
      chai.request(server)
          .post('/')
          .send(body)
          .end((err, res) => {
            res.status.should.be.eql(200);
            res.body.should.be.eql("id=MDAwMDAwMDAtMDAwMC0wMDBiLTAxMmMtMDllZGU5NDE2MDAz&Signature01a32ba17c4e28cf38a617ab2e3e00c36a055fab1a97d51b97d48b77adb1c3a7")
            done();
          });
    });
});

