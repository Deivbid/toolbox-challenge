let should = require('chai').should(),
	expect = require('chai').expect(),
	supertest = require('supertest'),
	api = supertest('http://192.168.0.22:3000');

describe('User', function(){
	it("Should get the text", function(done){
		api.post('/getText')
		.set('Content-Type', 'application/x-www-form-urlencoded')
		.send({
			text: "Hola"
		})
		.expect(200)
		.end(function(err, res){
			expect(res.body.text).to.equal('Hola');
		})
		done();
	})
})
