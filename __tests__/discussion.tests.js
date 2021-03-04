const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Discussion } = require("../config/db");
chai.use(chaiHttp); //associate the module with chai
const app = require('../server')

describe('Discussion', () => {
    beforeEach((done) => { //Before each test we empty the database
        Discussion.remove({}, (err) => {
           done();
        });
    });


describe(`Discussion Routes`, () => {

    it(`Test /getAll route`, (done) => {
        //request is to http://localhost:5019/discussion/getall
        chai.request(app)
            .get("/discussion/getAll")
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                response.body.map((discussion) => expect(discussion).to.contain.key("_id"));
                response.body.map((discussion) => expect(discussion).to.be.a('object'));
                response.body.map((discussion) => expect(discussion._id).to.be.a("string"));
                done();
            });
    });

    it(`Test /create route`, (done) => {
        chai.request(app)
            .post("/discussion/create")
            .send({ 'film': "spiderman" })
            .end((err, response) => {
                if (err) done(err);
                expect(err).to.be.null;
                expect(response).to.not.be.undefined;
                expect(response).to.have.status(201);
                expect(response).to.have.property('text', 'Your comment about spiderman has been added successfully!')
                done();

            })
    })

    it(`Test /update route`, (done) => {
        let discussion = new Discussion({ film: "spiderman", rating: "8", comment: "good film" })
        discussion.save((err, discussion) => {
            chai.request(app)
                .patch(`/discussion/update/` + discussion._id)
                .send({ film: "updatedspiderman" })
                .end((err, response) => {
                    if (err) done(err);
                    expect(err).to.be.null;
                    expect(response).to.not.be.undefined;
                    expect(response).to.have.status(202);
                    expect(response).to.have.property('text', `Successfully updated comment with Id:${discussion._id}`)
                    done();

                })
                
        })
    })
    it(`Test /delete route`, (done) => {
        let discussion2 = new Discussion({ film: "starwars", rating: "8", comment: "really great" })
        discussion2.save((err, discussion) => {
        chai.request(app)
            .delete(`/discussion/delete/`+discussion._id)
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