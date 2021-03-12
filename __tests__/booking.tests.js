const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Booking } = require("../config/db");
chai.use(chaiHttp); //associate the module with chai
const app = require('../server')

describe('Booking', () => {
    beforeEach((done) => { //Before each test we empty the database
        Booking.remove({}, (err) => {
            done();
        });
    });


    describe(`Booking Routes`, () => {

        it(`Test /getAll route`, (done) => {
            //request is to http://localhost:5019/booking/getAll
            chai.request(app)
                .get("/booking/getAll")
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
                .post("/booking/create")
                .send({
                    'film': "01", "date": "2021-01-01", "time": "11AM", "firstName": "Will", "lastName": "McCudden",
                    "email": "email@email.com", "adultTickets": 0, "childTickets": 0, "concessionTickets": 1, "price": 10, "paid": true
                })
                .end((err, response) => {
                    if (err) done(err);
                    expect(err).to.be.null;
                    expect(response).to.not.be.undefined;
                    expect(response).to.have.status(201);
                    expect(response.body.film).to.equal('01');
                    expect(response.body.date).to.equal("2021-01-01T00:00:00.000Z");
                    expect(response.body.time).to.equal("11AM");
                    expect(response.body.firstName).to.equal("Will");
                    expect(response.body.lastName).to.equal("McCudden");
                    expect(response.body.email).to.equal("email@email.com");
                    expect(response.body.adultTickets).to.equal(0);
                    expect(response.body.concessionTickets).to.equal(1);
                    expect(response.body.childTickets).to.equal(0);
                    expect(response.body.price).to.equal(10);
                    expect(response.body.paid).to.equal(true);
                    done();

                })
        })


        it(`Test /delete route`, (done) => {
            let booking = new Booking({
                film: "01", date: "2021-01-01", time: "11AM", firstName: "Will", lastName: "McCudden",
                email: "email@email.com", adultTickets: 0, childTickets: 0, concessionTickets: 1, price: 8, paid: true
            })
            booking.save((err, booking) => {
                chai.request(app)
                    .delete(`/booking/delete/` + booking._id)
                    .end((err, response) => {
                        // console.log(response)
                        if (err) done(err);
                        expect(err).to.be.null;
                        expect(response).to.not.be.undefined;
                        expect(response).to.have.status(204);
                        expect(response).to.have.property('text', "")
                        done();
                    })
            })
        })


        after(() => {
            app.close();
        })
    })
});
