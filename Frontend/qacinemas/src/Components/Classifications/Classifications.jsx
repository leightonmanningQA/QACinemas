import { Container } from "reactstrap"

const Classifications = () => {
    return (
        <div align="center" className="container">

            <div className="classification">
            <h1>Classification</h1>
            <p> Classifications can get a little confusing, especially with closely related Classifications.
            12A and 15 seem similar, and it can be hard to tell whether a child is ready for PG when you are used to showing them U. In this section we'll try to explain the various classifications for movies
            so you can make an informed decision.</p>
            </div>

            <div className="universal">
            <h2>U: Universal <img width="30"src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_u_rgb.png"  alt="Universal Rating"/></h2>
            <p> U rated films whilst having universal in the name are generally suitable for those aged four and above.
            These films though containing mild levels of violence; threat or horror, are generally set within
            positive frameworks, and offer reassurances throughout to counter-balance any fear a child may face.<br></br>
            Famous Film: A famous U rated film would be Finding Nemo, though there are various tense and frightful
            moments throughout especially when it comes to the sharks and chasing scenes the general message of the
            film is hopeful and heartwarming throughout.</p> <br></br>
            <p>For further on U ratings or to search for a current U rated film go to: <a href="https://www.bbfc.co.uk/rating/u" target="_blank" rel="noopener">BBFC U-Rating</a> </p>
            </div>

            <div className="parental guidance">
            <h2> PG: Parental Guidance <img width="30"src="https://jaybullimore98.files.wordpress.com/2014/12/pg.png"  alt="PG Rating"/></h2>
            <p> PG rated films are the next step up, and though according to the BBFC unaccompanied children of any aged
            are permitted to watch generally 'Parental Guidance' is expected for those under the age of 8.
            These films avoid detailing any potentially dangerous behaviour which young children could copy and avoid glamorising
            easily accessible dangerous household items such as knives.<br></br>
            Famous Film: A famous PG rated film would be The Incredibles, PG films tend to have a richer storyline on average
            than U rated films. The plot of Finding Nemo can basically be summed up as a father trying to get his son back, whereas in The Incredibles
            a lot more is allowed to be presented as it's older audience can appreciate the depth of the story more.</p><br></br>
            <p>For further on PG ratings or to search for a current PG rated film go to: <a href="https://www.bbfc.co.uk/rating/pg" target="_blank" rel="noopener">BBFC PG-Rating</a> </p>
            </div>

            <div className="12A">
            <h2> 12A/12 Suitable for 12 years and over <img width="30"src="https://louisabroadheadmediablog.files.wordpress.com/2011/12/bbfc_12_rating1.png"  alt="12 Rating"/></h2>
            <p> 12A/12 is the first actual age based classifcation according to BBFC ratings, there is some confusion surrounding 
            12 vs 12A, but the only difference is that 12A refers to cinema releases and 12 refers to video releases but otherwise they are basically
            rated the same. 
            These films do not allow those under the age of 12 to watch unaccompanied though parents are advised to check the BBFC ratings for the
            film in order to find out whether they feel comfortable allowing their child to see such a film even accompanied. These films may include
            references to sex or show instances of horror and bad language these moments will be brief and avoide the gratutious. <br></br>
            Famous Film: A famous 12A/12 rated film would be Avengers: Endgame, although a movie about superheroes this film did draw a mostly adult crowd
            in addition with the various themes throughout such as death and violence you could understand why a younger child would not be allowed to watch on
            their own.</p><br></br>
            <p>For further on 12 ratings or to search for a current 12 rated film go to: <a href="https://www.bbfc.co.uk/rating/12" target="_blank" rel="noopener">BBFC 12-Rating</a> </p>
            </div>

            <div className="15"> 
            <h2> 15 – Suitable only for 15 years and over <img width="30"src="https://upload.wikimedia.org/wikipedia/commons/b/b0/BBFC_15_symbol.png"  alt="15 Rating"/></h2>
            <p> 15 is the penulitmate rating the BBFC gives to movies, with no child under the age of 15 being allowed to watch 15 rated films.
            These films compared to 12 rated films allow a level higher in terms of violence, threat and horror, and may depict adult themes such as drug use and sex
            though to get a detailed breakdown on a particular film it is adviced to search the BBFC ratings catalogue. <br></br>
            Famous Film: A famous 15 rated film would be The Queen's Gambit, the theme of the film <i>'Chess'</i> is pure in of itself, but there are various
            subplots that include some very bloody violence and underage consumption of drugs (though brief) that edge this film to this rating.</p><br></br>
            <p>For further on 15 ratings or to search for a current 15 rated film go to: <a href="https://www.bbfc.co.uk/rating/15" target="_blank" rel="noopener">BBFC 15-Rating</a> </p>
            </div>

            <div className="18">
            <h2> 18 - Suitable for adults <img width="30"src="https://melonfarmers.co.uk/images/cutting_edge_eraser_18.png"  alt="18 Rating"/></h2>
            <p> 18 is the highest level rating the BBFC gives to cinema releases, and unlike the various other BBFC ratings in which details are presented and warning
            given about levels of violence and other such triggers, BBFC states "Adults should be free to choose their own entertainment".
            These films in one theme or another whether it be in terms of violence, drug use or other such topics exceed any threshold other ratings would allow,
            and as such BBFC make it very clear that no one under the age of 18 should be allowed to watch such a release. <br></br>
            Famous Film: A famous 18 rated film would be Deadpool, it is not the most famous film in this classification but we decided to bring it up because of the 
            debate and various problems linked to this movie. Not all adults have understood or taken part in the superhero movie trend, so when their child comes
            back stating they were blocked from seeing Deadpool, some Cinemas had some very angry calls. The 18 rating is not based on genre, and a mafia based movie could
            very well earn a 12 rating, whilst in this case a superhero movie earns an 18. The reason in this case is that this movie though comedic has intense scenes of violence
            and some gore making it not suitable for children.</p><br></br>
            <p>For further on 18 ratings or to search for a current 18 rated film go to: <a href="https://www.bbfc.co.uk/rating/18" target="_blank" rel="noopener">BBFC 18-Rating</a> </p>
            </div>
        </div>

    )
}
export default Classifications