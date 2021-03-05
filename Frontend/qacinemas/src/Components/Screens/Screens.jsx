import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import "./Screens.css"
import "../Gallery/NewReleases"

const items = [
    {
      id: 1,
      src:'http://photos.cinematreasures.org/production/photos/191157/1478638675/large.JPG?1478638675',
      altText: 'Slide 1',
      caption: 'Standard: Seating Area'
    },
    {
      id: 2,
      src:'https://i.pinimg.com/originals/eb/37/99/eb3799a5bfac17ccf55372a66c020969.jpg',
      altText: 'Slide 2',
      caption: 'Standard: Concession/Lobby Area'
    },
    {
      id: 3,
      src:'https://www.bonvivant.co.uk/journal/wp-content/uploads//2012/12/electric_shoreditch_interior1.jpg',
      altText: 'Slide 3',
      caption: 'Deluxe: Seating Area'
    },
    {
        id: 4,
        src:'https://storage.googleapis.com/rhinos/uploads/2019/07/6e88ddd1-directors-suite-1-e1562831043556-960x540.jpg',
        altText: 'Slide 4',
        caption: 'Deluxe: Box Suites'
      }
  ]; 

const Screens = (props) => { 
   return (
      <>
      <h1 className="text-white" align="center">Standard and Deluxe Seating</h1>
      <br></br>

      <container><Slider classNames={horizontalCss} autoplay={2000}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{ background: `url('${item.src}') no-repeat center center` }}
          >
            <div className="slides text-white inner" align="center">
              <h4>{item.caption}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
    </Slider>
    <br></br>

      <div className="container" align="center">
      <h3 className="text-white">Standard:</h3>
      <p className="text-white">The Standard Screens are open to all who wish to enjoy a fun family day out. 
      The rooms are made up of around 200 seats; Bang and Olufsen surround sound system and 4k screen resolution. 
      For that all important viewing experience!<br></br>
      Below you'll find a list of activities which can be enjoyed for people of all ages:
    </p>
    <ul className="text-white" align="center">
      <li>Snacks(including candyfloss and slushies)</li>
      <li>Arcade Games</li>
      <li></li>
    </ul>
    <br></br>

    <h3 className="text-white">Deluxe:</h3>
      <p className="text-white">The Deluxe Screens (Directors Box) are made up of no more than 50 seats with high quality recliners;
      Bang and Olufsen surround sound system; 8k screen resolution; comfortable cushions; footstalls and side lamps 
      positioned after every other chair. Where you as the consumer are able to take charge of how bright or dark you want the 
      surrounding area to be.<br></br>
      Below you'll find a range of perks and benefits that come from being apart of this cinema:
      </p>
    <ul align="center" className="text-white">
      <li>Fine dining and cocktails within the lounge area</li>
      <li>IMAX Screen</li>
      <li><Link to="../Gallery/NewReleases">Newly Released</Link> Previews</li>
      <li>Ability to rent out screens for large social gatherings</li>
    </ul>
      </div>
      </container>
    </>
  );
}

export default Screens;