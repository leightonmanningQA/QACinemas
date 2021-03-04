const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Film } = require("../config/db");
chai.use(chaiHttp); //associate the module with chai
const app = require('../server')



// describe('Film', () => {
//     beforeEach((done) => { //Before each test we empty the database
//         Film.remove({}, (err) => {
//            done();
//         });
//     });
    


describe(`Film Routes`, () => {

    it(`Test /getAll route`, (done) => {
        //request is to http://localhost:5019/film/getall
        chai.request(app)
            .get("/film/getAll")
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

    it(`Test /getNewReleases route`, (done) => {
        
        chai.request(app)
            .get("/film/getNewReleases")
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                response.body.map((film) => expect(film).to.contain.key("_id"));
                response.body.map((film) => expect(film).to.be.a('object'));
                response.body.map((film) => expect(film._id).to.be.a("string"));
                done();
            });
    });

    it(`Test /getListings route`, (done) => {
        
        chai.request(app)
            .get("/film/getListings")
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                response.body.map((film) => expect(film).to.contain.key("_id"));
                response.body.map((film) => expect(film).to.be.a('object'));
                response.body.map((film) => expect(film._id).to.be.a("string"));
                done();
            });
    });

    it(`Test /get/:id route`, (done) => {
        let film = new Film({ title: "starwars", description:'good film',actors:'some actor',director:'some director',showingTimes:'[9:00]',picture:"good",newRelease:true,listing:true})
        film.save((err, film) => {
        chai.request(app)
            .get("/film/get/"+film._id)
            .send(film)
            .end((err, response) => {
                // console.log(response)
                if (err) done(err);
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
                expect(response).to.not.be.undefined;
                expect(response.body).to.have.property("title","starwars")
                done();
            });
    });
})


    it(`Test /create route`, (done) => {
        chai.request(app)
            .post("/film/create")
            .send({ title: "starwars", description:'good film',actors:'some actor',director:'some director',showingTimes:'[9:00]',picture:"good",newRelease:true,listing:true })
            .end((err, response) => {
                if (err) done(err);
                expect(err).to.be.null;
                expect(response).to.not.be.undefined;
                expect(response).to.have.status(201);
                expect(response).to.have.property('text', 'starwars has been added successfully!');
                done();

            })
    })

    it(`Test /update route`, (done) => {
        let film = new Film({ title: "starwars", description:'good film',actors:'some actor',director:'some director',showingTimes:'[9:00]',picture:"good",newRelease:true,listing:true})
        film.save((err, film) => {
            chai.request(app)
                .patch(`/film/update/` + film._id)
                .send({ film: "updatedspiderman" })
                .end((err, response) => {
                    if (err) done(err);
                    expect(err).to.be.null;
                    expect(response).to.not.be.undefined;
                    expect(response).to.have.status(202);
                    expect(response).to.have.property('text', `Successfully updated!`)
                    done();

                })
                
        })
    })
    it(`Test /delete route`, (done) => {
        let film2 = new Film({  title : "spiderman", description: "good film" })
        film2.save((err, film) => {
        chai.request(app)
            .delete(`/film/delete/`+film2._id)
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
// })
