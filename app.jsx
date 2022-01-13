// import logo from './logo.svg';
// import './App.css';
//import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";

const App = () => {

  const data = {
    platforms: [
      { platform: "facebook", username: "nathanf", followers: 10987, difference: 12 },
      { platform: "twitter",  username: "nathanf", followers: 1044, difference: 99 },
      { platform: "instagram", username: "realnathanf", followers: 11012, difference: 1099 },
      { platform: "youtube", username: "Nathan F.", followers: 8239, difference: -144 },
    ],
    events: [
      { platform: "facebook", type: "Page views", amount: 87, modifier: 3 },
      { platform: "facebook", type: "Likes", amount: 52, modifier: -2 },
      { platform: "instagram", type: "Likes", amount: 5462, modifier: 2257 },
      { platform: "instagram", type: "Profile Views", amount: 52150, modifier: 1375 },
      { platform: "twitter", type: "Retweets", amount: 117, modifier: 303 },
      { platform: "twitter", type: "Likes", amount: 507, modifier: 553 },
      { platform: "youtube", type: "Likes", amount: 107, modifier: -19 },
      { platform: "youtube", type: "Total Views", amount: 1407, modifier: -12 },
    ],
  };

  // const fbIcon = '<i class="fab fa-facebook-square"></i>'
  // const twIcon = '<i class="fab fa-twitter"></i>'
  // const igIcon = '<i class="fab fa-instagram"></i>'
  // const ytIcon = '<i class="fab fa-youtube"></i>'

  let title = 'Social Media Dashboard'
  document.title = title

  const plats = data.platforms
  //console.log(plats);
  const evs = data.events
  //console.log(evs);

  function TotalFollowers (items, prop) {return items.reduce(function(a, b){return a + b[prop];}, 0)} 

  const allFollowers = TotalFollowers(data.platforms, 'followers')

  const [platform, setPlatform] = React.useState(plats.platform);
  
  function PlatformIcon () {
    if (platform === "facebook") {setPlatform (<i class="fab fa-facebook-square"></i>)}
    else if (platform === "twitter") {setPlatform (<i class="fab fa-twitter"></i>)}
    else if (platform === "instagram") {setPlatform (<i class="fab fa-instagram"></i>)}
    else if (platform === "youtube") {setPlatform (<i class="fab fa-youtube"></i>)}
  }
  

  return(
    <div className="app-container">
      <div id="col">
        <h1>{title}</h1>
        <p className="totalfoll">Total Followers: {numeral(allFollowers).format('0,0')}</p>
        <label class="switch">Dark Mode
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
        <div id="first">
          {plats.map(plat => 
            <div className="card" key={plat.platform} style= {plat.platform === "instagram" ? {borderTop: "5px transparent solid", borderImage: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))", borderImageSlice: "1", borderTopRightRadius: "3px"} : (plat.platform === "facebook" ? {borderTop: "5px hsl(208, 92%, 53%) solid"} : (plat.platform === "youtube" ? {borderTop: "5px hsl(348, 97%, 39%) solid"} : {borderTop: "5px hsl(203, 89%, 53%) solid"})) }>
              <p className="username"><i className={`fab fa-${plat.platform}`}style= {plat.platform === "instagram" ? {color: "#f11ca0"} : (plat.platform === "facebook" ? {color: "hsl(208, 92%, 53%)"} : (plat.platform === "youtube" ? {color: "hsl(348, 97%, 39%)"} : {color: "hsl(203, 89%, 53%)"})) }></i>  @{plat.username}</p>
              <p className="foll">{plat.followers > 10000 ? numeral(plat.followers).format('0a') : plat.followers}</p>
              <p className="folltext">FOLLOWERS</p>
              <p className="today"  style={plat.difference < 0 ? {color:"red"} : {color:"green"}}> <i className={`fas fa-caret-${plat.difference < 0 ? 'down' : 'up'}`}></i> {Math.abs(plat.difference)} Today</p>
            </div>
          )}
        </div>
        <h2>Overview - Today</h2>
        <div id="second">
            {evs.map(ev =>
              <div className="card-ev" key={ev.amount}>
                
                  <p className="evType">{ev.type}</p>
                  <p className="evPlatf"><i className={`fab fa-${ev.platform}`}style= {ev.platform === "instagram" ? {color: "#f11ca0"} : (ev.platform === "facebook" ? {color: "hsl(208, 92%, 53%)"} : (ev.platform === "youtube" ? {color: "hsl(348, 97%, 39%)"} : {color: "hsl(203, 89%, 53%)"})) }></i></p>
                  <p className="evAmount">{ev.amount > 10000 ? numeral(ev.amount).format('0a') : ev.amount}</p>
                  <p className="evMod" style={ev.modifier < 0 ? {color:"red"} : {color:"green"}}><i className={`fas fa-caret-${ev.modifier < 0 ? 'down' : 'up'}`}></i> {Math.abs(ev.modifier)}%</p>         
                
                
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

//export default App;