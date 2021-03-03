import React from 'react';

const PlacesToGo = () => {
  return (
    <div className="container">
        <h1 align="center">Nearby Venues</h1>
            <div align="center" className="venue-card">
                <img src="https://lh5.googleusercontent.com/p/AF1QipP0_55ERMDFSI5-LDqOfd2YYcDJuHAIDYdE5lbu=w408-h544-k-no" alt="Cafe"/>
                <h3> WA Cafe Japanese patisserie LTD</h3>
                <p>Phone: +442072405567</p>
                <p>Address: 5 New Row, Covent Garden, London WC2N 4LH</p>
                <p>Website: http://www.wacafe.co.uk/</p>
                <p>Description: WA is a small, independent patisserie located in Ealing Broadway and Covent Garden.</p>
                <p>Deals: Bring your cinema ticket for a 10% discount.</p>
            </div>

            <div align="center" className="venue-card">
                <img src="https://lh5.googleusercontent.com/p/AF1QipPUGJ7WUBSh2UQKZstLrU8ul-rDVa7n4HWkgkNl=w408-h306-k-no" alt="The National Gallery"/>
                <h3> The National Gallery</h3>
                <p>Phone: (+44) 2077472885</p>
                <p>Address: Trafalgar Square, Charing Cross, London WC2N 5DN</p>
                <p>Website: https://www.nationalgallery.org.uk/</p>
                <p>Description: Home of the nation's art</p>
                <p>Deals: None at present</p>
            </div>

            <div align="center" className="venue-card">
                <img src="https://lh5.googleusercontent.com/p/AF1QipP3526Azuy3P-_N7eiGpBa8yRTEKzFmbEVUHcxR=w408-h306-k-no" alt="London Film Museum"/>
                <h3> London Film Museum </h3>
                <p>Phone: 02078364913</p>
                <p>Address: 45 Wellington St, Covent Garden, London WC2E 7BN</p>
                <p>Website: http://londonfilmmuseum.com/</p>
                <p>Description: Film based exhibits of impactful British cinema, 
                make sure to check out the 'Bond In Motion' exhibit to see your favourite Bond cars in the flesh.</p>
                <p>Deals: Keep your ticket from the exhibit and get 20% of your ticket for 'No Time to Die'.</p>
            </div>
        </div>
  );
};







    // return (

    //     <div className="container">
    //         <h1> Places to Go</h1>

    //         <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=17-18%20Henrietta%20St%20London+(Monster%20Cinema)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

    //     </div>

    // )
export default PlacesToGo