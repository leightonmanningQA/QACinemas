import cinema4 from "../images/cinema4-medium.png"

const GettingThere = () => {
    return (
        <div align="justify" className="container">
            <h1 align="justify" className="text-white">Cinema Details</h1>
            <justify>
                <img align="center" width="600" height="600" src= {cinema4} />
            </justify>
            <br></br>
            <br></br>
            <h4 className="text-white">17-18 Henrietta St</h4>
            <h4 className="text-white">Covent Garden</h4>
            <h4 className="text-white">London</h4>
            <br></br>
            <hr></hr>
            <h4 className="text-white"><u>Telephone</u></h4>
            <br></br>
            <h5 className="text-white"> To speak to a representative on our ticket booking line please call us on 0873 435 9061 (calls cost 13ppm plus your telephone company's access charge).</h5>
            <br></br>
            <h4 className="text-white"><u>Public Transport</u></h4>
            <br></br>
            <hr></hr>
            <h5 className="text-white">BY TUBE</h5>
            <h5 className="text-white"> Covent Garden is on the Piccadilly Line. Covent Garden's tube station is a very short walk from the Market Building at the end of James Street. Covent Garden underground station only has lifts up from the platforms so it can be slow-going at busy times. During peak times we suggest getting off at Leicester Square (Piccadilly and Northern Line),
                 which is a short walk to Covent Garden.</h5>
            <br></br>
            <hr></hr>
            <h5 className="text-white">BY RAIL</h5>
            <h5 className="text-white">Covent Garden is conveniently located close to two London stations. The nearest being Charing Cross, which is a couple of minutes’ walk away. The other is Waterloo station, which is a twenty-minute walk across the iconic Waterloo Bridge with great views over London. </h5>
            <br></br>
            <hr></hr>
            <h5 className="text-white">BY BUS</h5>
            <h5 className="text-white">The 9, 13, 15, 23, 139 and 153 all stop at Trafalgar Square and Aldwych (both a short walk from the Market Building). The No. 24 stops at Leicester Square; Covent Garden is signposted from there.</h5>
            <br></br>
            <hr></hr>
            <h5 className="text-white">Parking</h5>
            <h5 className="text-white">There is Pay & Display parking on the streets off the Piazza - Henrietta Street, Southampton Street and Tavistock Street. There is also an NCP car park on Drury Lane</h5>
            <div align="center" className="container">
            <br></br>
            <hr></hr>
            <h1 className="text-white"> Find us at</h1>
            <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=17-18%20Henrietta%20St%20London+(Monster%20Cinema)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
            )
            </div>
         )
}
export default GettingThere