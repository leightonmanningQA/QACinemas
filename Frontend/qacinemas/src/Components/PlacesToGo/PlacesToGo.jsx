import React from 'react';

const PlacesToGo = () => {
  return (
    <div className="container">
        <br></br>
        <h1 align="center" className="text-white">Nearby Venues</h1>
        <br></br>
        <br></br>
            <div align="center" className="text-white">
                <h3> WA Cafe Japanese patisserie LTD</h3>
                <img src="https://lh5.googleusercontent.com/p/AF1QipP0_55ERMDFSI5-LDqOfd2YYcDJuHAIDYdE5lbu=w408-h544-k-no" alt="Cafe"/>
                <br></br>
                <br></br>
                <p>Phone: <a className="text-primary" href="tel:020-724-05567">(+44) 02072405567</a></p>
                <p>Address: 5 New Row, Covent Garden, London WC2N 4LH</p>
                <p>Website: <a href="https://www.wacafe.co.uk/" target="_blank" rel="noopener">https://www.wacafe.co.uk/</a></p>
                <p>Description: WA is a small, independent patisserie located in Ealing Broadway and Covent Garden.</p>
                <p>Deals: Bring your cinema ticket for a 10% discount.</p>
            </div>

            <br></br>
            <hr></hr>
            <div align="center" className="text-white">
                <h3> The National Gallery</h3>
                <br></br>
                <img src="https://lh5.googleusercontent.com/p/AF1QipPUGJ7WUBSh2UQKZstLrU8ul-rDVa7n4HWkgkNl=w408-h306-k-no" alt="The National Gallery"/>
                <br></br>
                <br></br>
                <p>Phone: <a className="text-primary" href="tel:020-774-72885">(+44) 2077472885</a></p>
                <p>Address: Trafalgar Square, Charing Cross, London WC2N 5DN</p>
                <p>Website: <a href="https://www.nationalgallery.org.uk" target="_blank" rel="noopener">https://www.nationalgallery.org.uk</a></p>
                <p>Description: Home of the nation's art</p>
                <p>Deals: None at present</p>
            </div>

            <br></br>
            <hr></hr>
            <div align="center" className="text-white">
                <h3> London Film Museum </h3>
                <br></br>
                <img src="https://lh5.googleusercontent.com/p/AF1QipP3526Azuy3P-_N7eiGpBa8yRTEKzFmbEVUHcxR=w408-h306-k-no" alt="London Film Museum"/>
                <br></br>
                <br></br>
                <p>Phone:<a className="text-primary" href="tel:020-783-64913"> (+44) 2078364913</a></p>
                <p>Address: 45 Wellington St, Covent Garden, London WC2E 7BN</p>
                <p>Website: <a href="http://londonfilmmuseum.com" target="_blank" rel="noopener">http://londonfilmmuseum.com</a></p>
                <p>Description: Film based exhibits of impactful British cinema, 
                make sure to check out the 'Bond In Motion' exhibit to see your favourite Bond cars in the flesh.</p>
                <p>Deals: Keep your ticket from the exhibit and get 20% off your ticket for 'No Time to Die'.</p>
                <br></br>
                <hr></hr>
            </div>
        </div>
  );
};
export default PlacesToGo