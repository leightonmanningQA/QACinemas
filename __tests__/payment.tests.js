const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Payment } = require("../config/db");
chai.use(chaiHttp); //associate the module with chai
const app = require('../server')

describe('Payment', () => {
    beforeEach((done) => { //Before each test we empty the database
        Payment.remove({}, (err) => {
           done();
        });
    });


describe(`Payment Routes`, () => {

    it(`Test /getAll route`, (done) => {
        //request is to http://localhost:5019/payment/getAll
        chai.request(app)
            .get("/payment/getAll")
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                response.body.map((booking) => expect(booking).to.contain.key("_id"));
                response.body.map((booking) => expect(booking).to.be.a('object'));
                response.body.map((booking) => expect(booking._id).to.be.a("string"));
                done();
            });
    });

    it(`Test /create route`, (done) => {
        chai.request(app)
            .post("/payment/create")
            .send({ name : "Will", cardNumber: "47", expiryDate: "10/22", securityCode:"233",
            bookingReference: "123"})
            .end((err, response) => {
                if (err) done(err);
                expect(err).to.be.null;
                expect(response).to.not.be.undefined;
                expect(response).to.have.status(201);
                expect(response).to.be.json;
                expect(response.body.name).to.equal("Will");
                expect(response.body.expiryDate).to.equal("10/22");
                expect(response.body.securityCode).to.equal("233");
                done();

            })
    })

    it(`Test /replace route`, (done) => {
        let payment = new Payment({ name : "Will", cardNumber: "47", expiryDate: "10/22", securityCode:"233",
                bookingReference: "123"})
        payment.save((err, payment) => {
            chai.request(app)
                .patch(`/payment/replace/` + payment._id)
                .send({ name: "Phil"})
                .end((err, response) => {
                    if (err) done(err);
                    expect(err).to.be.null;
                    expect(response).to.not.be.undefined;
                    expect(response).to.have.status(202);
                    expect(response).to.have.property('text', `Successfully replaced: ${payment._id}`)
                    done();

                })
                
        })
    })

    it(`Test /update route`, (done) => {
        let payment = new Payment({ name : "Will", cardNumber: "47", expiryDate: "10/22", securityCode:"233",
        bookingReference: "123"})
        payment.save((err, payment) => {
            chai.request(app)
                .patch(`/payment/update/` + payment._id)
                .send({ name : "Phil", cardNumber: "46", expiryDate: "11/22", securityCode:"203",
                bookingReference: "1234"})
                .end((err, response) => {
                    if (err) done(err);
                    expect(err).to.be.null;
                    expect(response).to.not.be.undefined;
                    expect(response).to.have.status(202);
                    expect(response).to.have.property('text', `Successfully updated: ${payment._id}`)
                    done();

                })
                
        })
    })

    it(`Test /delete route`, (done) => {
        let payment = new Payment({ name : "Phil", cardNumber: "46", expiryDate: "11/22", securityCode:"203",
        bookingReference: "1234"})
        payment.save((err, payment) => {
        chai.request(app)
            .delete(`/payment/delete/`+payment._id)
            .end((err, response) => {
                if (err) done(err);
                expect(err).to.be.null;
                expect(response).to.not.be.undefined;
                expect(response).to.have.status(204);
                expect(response).to.have.property('text', "");
                done();
            })
        })
    })


    after(() => {
        app.close();
    })
})
});