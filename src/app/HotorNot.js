import React from "react";
import "./HotorNot.css";

class HotorNot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      position1: {
        image:
          "",
        name: ""
      },
      position2: {
        image:
          "",
        name: "C-3PO"
      },
      userFavorite: {
          image: "",
          name: ""
      },
      excludedCharacters: [20]
    };
  }
  
//   state.excluded characters begins with 20 as this is yoda
  
componentDidMount() {
    this.definePosition1and2()
    }

    definePosition1and2 = () => {
        const position1Object = dataSet[this.generateRandom()];
        const position2Object = dataSet[this.generateRandom()];
        const position1 = {
            image: position1Object.image,
            name: position1Object.name
        }
        const position2 = {
            image: position2Object.image,
            name: position2Object.name
        }

        this.setState({
            position1: position1,
            position2: position2

        });
    }
    
generateRandom = () => {

    // randomly generate number
    var num = Math.floor(Math.random() * 87);

    // push number to excluded number array
    const excludedNumbers = [...this.state.excludedCharacters];
    excludedNumbers.push(num);

    this.setState({
        excludedCharacters: excludedNumbers
    });

    // return generated number unless the number is in the exclusion list, then we generate a new number
    return (this.state.excludedCharacters.includes(num)) ? this.generateRandom() : num;

}


handlePosition1Click = () => {

    // define clicked character as user favorite

    this.setState({
        userFavorite: this.state.position1})

    // reset the other position

    const position2Object = dataSet[this.generateRandom()];
    const position2 = {
        image: position2Object.image,
        name: position2Object.name
    }
    this.setState({
        position2: position2,
        step: this.state.step + 1

    });
    
}

    handlePosition2Click = () => {

        // define clicked character as user favorite

        this.setState({
            userFavorite: this.state.position2
        })

        // reset the other position and increment step

        const position1Object = dataSet[this.generateRandom()];
        const position1 = {
            image: position1Object.image,
            name: position1Object.name
        }
        this.setState({
            position1: position1,
            step: this.state.step + 1

        });

    }

  render() {
if (this.state.step <10) {
    return (
      <div>
        <container>
          <h1>Who's hottest? 🔥</h1>
          <div className="row">
            <div className="position" onClick={this.handlePosition1Click}>
              <img src={this.state.position1.image}></img>
              <h2>{this.state.position1.name}</h2>
            </div>
            <div className="position">
              <img src={this.state.position2.image} onClick={this.handlePosition2Click}></img>
              <h2>{this.state.position2.name}</h2>
            </div>
          </div>
        </container>
      </div>
    )

    } else {
        return (
          <container>
         
                <img src={this.state.userFavorite.image} height="200vh"></img>
                <h2> Congratulations 🎉</h2>
                <p>You will be married to {this.state.userFavorite.name} for eternity</p>
                <img src="http://pngimg.com/uploads/heart/heart_PNG51342.png" height="50px"></img>
            </container>
            
)
        }}}

const dataSet = [
    {
        "id": 1,
        "name": "Luke Skywalker",
        "height": 1.72,
        "mass": 73,
        "gender": "male",
        "homeworld": "tatooine",
        "wiki": "http://starwars.wikia.com/wiki/Luke_Skywalker",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "born": -19,
        "bornLocation": "polis massa",
        "died": 34,
        "diedLocation": "ahch-to",
        "species": "human",
        "hairColor": "blond",
        "eyeColor": "blue",
        "skinColor": "light",
        "cybernetics": "Prosthetic right hand",
        "affiliations": [
            "Alliance to Restore the Republic",
            "Red Squadron",
            "Rogue Squadron",
            "Massassi Group",
            "Leia Organa's team",
            "Endor strike team",
            "Jedi Order",
            "Bright Tree tribe",
            "New Republic",
            "Resistance"
        ],
        "masters": [
            "Obi-Wan Kenobi",
            "Yoda"
        ],
        "apprentices": [
            "Leia Organa",
            "Ben Solo (along with a dozen apprentices)",
            "Rey"
        ],
        "formerAffiliations": []
    },
    {
        "id": 2,
        "name": "C-3PO",
        "height": 1.71,
        "mass": 75,
        "gender": "male",
        "homeworld": "tatooine",
        "species": "droid",
        "wiki": "http://starwars.wikia.com/wiki/C-3PO",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "dateCreated": -32,
        "dateDestroyed": 3,
        "destroyedLocation": "bespin, rebuilt shortly after",
        "creator": "Anakin Skywalker",
        "manufacturer": "Cybot Galactica",
        "model": "3PO unit",
        "class": "Protocol droid",
        "sensorColor": "yellow",
        "platingColor": "gray, later primarily golden",
        "equipment": "TranLang III communication module",
        "affiliations": [
            "Skywalker family",
            "Confederacy of Independent Systems",
            "Royal House of Naboo",
            "Galactic Republic",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Leia Organa's team",
            "Pathfinders",
            "Endor strike team",
            "Bright Tree tribe",
            "New Republic",
            "Resistance",
            "Resistance spy droid network"
        ],
        "skinColor": "gold",
        "eyeColor": "yellow",
        "born": -112,
        "formerAffiliations": []
    },
    {
        "id": 3,
        "name": "R2-D2",
        "height": 1.09,
        "mass": 32,
        "gender": "male",
        "homeworld": "naboo",
        "species": "droid",
        "wiki": "http://starwars.wikia.com/wiki/R2-D2",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "manufacturer": "Industrial Automaton",
        "productLine": "R-series",
        "model": "R2 series astromech droid",
        "class": "Astromech droid",
        "sensorColor": "red",
        "platingColor": "bluesilver",
        "equipment": [
            "Buzz saw",
            "Electric pike",
            "Drinks tray (Only on Jabba's Sail Barge)",
            "Fusion welder",
            "Data probe",
            "Power recharge coupler",
            "Rocket booster",
            "Holoprojector",
            "Motorized, all-terrain treads",
            "Retractable third leg"
        ],
        "affiliations": [
            "Royal House of Naboo",
            "Galactic Republic",
            "501st Legion",
            "R2-D2's battle droid squadron",
            "D-Squad",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Red Squadron",
            "Leia Organa's team",
            "Endor strike team",
            "Bright Tree tribe",
            "Resistance"
        ],
        "skinColor": "white, blue",
        "eyeColor": "red",
        "born": -33,
        "formerAffiliations": []
    },
    {
        "id": 4,
        "name": "Darth Vader",
        "height": 2.03,
        "mass": 120,
        "gender": "male",
        "homeworld": "tatooine",
        "wiki": "http://starwars.wikia.com/wiki/Anakin_Skywalker",
        "image": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "born": -41,
        "died": 4,
        "diedLocation": "death star ii, endor system",
        "species": "human",
        "hairColor": "blond",
        "eyeColor": "blue, yellow (dark side)",
        "skinColor": "light, later pale",
        "cybernetics": "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
        "affiliations": [
            "501st Legion",
            "Sith",
            "Galactic Empire",
            "Imperial High Command"
        ],
        "masters": [
            "Qui-Gon Jinn (informal Jedi Master)",
            "Obi-Wan Kenobi (Jedi Master)",
            "Darth Sidious (Sith Master)",
            "Yoda (Force spirit teacher)"
        ],
        "apprentices": [
            "Ahsoka Tano (Padawan)",
            "Inquisitorius"
        ],
        "formerAffiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Galactic Republic"
        ]
    },
    {
        "id": 5,
        "name": "Leia Organa",
        "height": 1.5,
        "mass": 51,
        "gender": "female",
        "homeworld": "alderaan",
        "wiki": "http://starwars.wikia.com/wiki/Leia_Organa",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "born": -19,
        "bornLocation": "polis massa (2 days after empire day)",
        "species": "human",
        "hairColor": "brown, later graying",
        "eyeColor": "brown",
        "skinColor": "light",
        "affiliations": [
            "Elder Houses",
            "House of Organa",
            "Galactic Empire",
            "Imperial Senate",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Leia Organa's team",
            "Endor strike team",
            "Alliance High Command",
            "Bright Tree tribe",
            "New Republic",
            "Populists",
            "Resistance"
        ],
        "masters": "Luke Skywalker",
        "formerAffiliations": []
    },
    {
        "id": 6,
        "name": "Owen Lars",
        "height": 1.7,
        "mass": 120,
        "gender": "male",
        "homeworld": "tatooine",
        "wiki": "http://starwars.wikia.com/wiki/Owen_Lars",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "died": 0,
        "diedLocation": "tatooine",
        "species": "human",
        "hairColor": "brown, later gray",
        "eyeColor": "blue",
        "skinColor": "light",
        "affiliations": [
            "Lars family"
        ],
        "born": -52,
        "formerAffiliations": []
    },
    {
        "id": 7,
        "name": "Beru Whitesun lars",
        "height": 1.65,
        "mass": 75,
        "gender": "female",
        "homeworld": "tatooine",
        "wiki": "http://starwars.wikia.com/wiki/Beru_Whitesun_Lars",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "died": 0,
        "diedLocation": "tatooine",
        "species": "human",
        "hairColor": "brown",
        "eyeColor": "blue",
        "skinColor": "light",
        "born": -47,
        "affiliations": [],
        "formerAffiliations": []
    },
    {
        "id": 8,
        "name": "R5-D4",
        "height": 0.97,
        "mass": 32,
        "gender": "male",
        "homeworld": "tatooine",
        "species": "droid",
        "wiki": "http://starwars.wikia.com/wiki/R5-D4",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "manufacturer": "Industrial Automaton",
        "model": "R5 unit",
        "class": "Astromech droid",
        "sensorColor": "red",
        "platingColor": "white, red, blue",
        "affiliations": [
            "Alliance to Restore the Republic"
        ],
        "skinColor": "white, red",
        "eyeColor": "red",
        "formerAffiliations": []
    },
    {
        "id": 9,
        "name": "Biggs Darklighter",
        "height": 1.83,
        "mass": 84,
        "gender": "male",
        "homeworld": "tatooine",
        "wiki": "http://starwars.wikia.com/wiki/Biggs_Darklighter",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "died": 0,
        "diedLocation": "yavin system",
        "species": "human",
        "hairColor": "black",
        "eyeColor": "hazel",
        "affiliations": [
            "Galactic Empire",
            "Prefsbelt Fleet Camp",
            "Alliance to Restore the Republic",
            "Red Squadron",
            "Massassi Group"
        ],
        "skinColor": "light",
        "born": -24,
        "formerAffiliations": []
    },
    {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "height": 1.82,
        "mass": 81,
        "gender": "male",
        "homeworld": "stewjon",
        "wiki": "http://starwars.wikia.com/wiki/Obi-Wan_Kenobi",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "born": -57,
        "died": 0,
        "diedLocation": "death star, alderaan system",
        "species": "human",
        "hairColor": "light brown, later white",
        "eyeColor": "gray-blue",
        "skinColor": "light",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Galactic Republic",
            "212th Attack Battalion",
            "Alliance to Restore the Republic"
        ],
        "masters": [
            "Qui-Gon Jinn",
            "Yoda"
        ],
        "apprentices": [
            "Anakin Skywalker",
            "Luke Skywalker"
        ],
        "formerAffiliations": []
    },
    {
        "id": 11,
        "name": "Anakin Skywalker",
        "height": 2.03,
        "mass": 120,
        "gender": "male",
        "homeworld": "tatooine",
        "wiki": "http://starwars.wikia.com/wiki/Anakin_Skywalker",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "born": -41,
        "died": 4,
        "diedLocation": "death star ii, endor system",
        "species": "human",
        "hairColor": "blond",
        "eyeColor": "blue, yellow (dark side)",
        "skinColor": "light, later pale",
        "cybernetics": "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
        "affiliations": [
            "501st Legion",
            "Sith",
            "Galactic Empire",
            "Imperial High Command"
        ],
        "masters": [
            "Qui-Gon Jinn (informal Jedi Master)",
            "Obi-Wan Kenobi (Jedi Master)",
            "Darth Sidious (Sith Master)",
            "Yoda (Force spirit teacher)"
        ],
        "apprentices": [
            "Ahsoka Tano (Padawan)",
            "Inquisitorius"
        ],
        "formerAffiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Galactic Republic"
        ]
    },
    {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "height": 1.82,
        "gender": "male",
        "homeworld": "eriadu",
        "wiki": "http://starwars.wikia.com/wiki/Wilhuff_Tarkin",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "born": -64,
        "died": 0,
        "diedLocation": " death star, yavin system",
        "species": "human",
        "hairColor": "auburn, later gray",
        "eyeColor": "gray-blue",
        "skinColor": "light",
        "affiliations": [
            "Galactic Republic",
            "Sullust Sector Spacefarers Academy",
            "Judicial Forces",
            "Republic Navy",
            "Strategic Advisory Cell",
            "Outland Regions Security Force",
            "Outland's anti-pirate taskforce",
            "Galactic Empire",
            "Battle Station Command",
            "Imperial Officer Corps",
            "Imperial Navy",
            "Tarkin Initiative"
        ],
        "formerAffiliations": []
    },
    {
        "id": 13,
        "name": "Chewbacca",
        "height": 2.28,
        "mass": 112,
        "gender": "male",
        "homeworld": "kashyyyk",
        "wiki": "http://starwars.wikia.com/wiki/Chewbacca",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "born": -200,
        "bornLocation": "kashyyyk",
        "species": "wookiee",
        "hairColor": "brown",
        "eyeColor": "blue",
        "affiliations": [
            "Galactic Republic",
            "Alliance to Restore the Republic",
            "Leia Organa's team",
            "Pathfinders",
            "Endor strike team",
            "Bright Tree tribe",
            "New Republic",
            "Resistance"
        ],
        "formerAffiliations": []
    },
    {
        "id": 14,
        "name": "Han Solo",
        "height": 1.8,
        "mass": 80,
        "gender": "male",
        "homeworld": "corellia",
        "wiki": "http://starwars.wikia.com/wiki/Han_Solo",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "born": -29,
        "bornLocation": "corellia",
        "died": 34,
        "diedLocation": "starkiller base",
        "species": "human",
        "hairColor": "brown, later gray",
        "eyeColor": "hazel",
        "skinColor": "light",
        "affiliations": [
            "Galactic Empire",
            "Jabba Desilijic Tiure's criminal empire",
            "Alliance to Restore the Republic",
            "Leia Organa's team",
            "Endor strike team",
            "Kingdom of Han",
            "Bright Tree tribe",
            "New Republic",
            "New Republic Pilots Commission",
            "Han Solo's shipping company",
            "Resistance"
        ],
        "formerAffiliations": []
    },
    {
        "id": 15,
        "name": "Greedo",
        "height": 1.74,
        "mass": 74,
        "gender": "male",
        "homeworld": [
            "Rodia",
            "Tatooine"
        ],
        "wiki": "http://starwars.wikia.com/wiki/Greedo",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "died": 0,
        "diedLocation": "tatooine",
        "species": "rodian",
        "eyeColor": "purple",
        "skinColor": "green",
        "affiliations": [
            "Trade Federation"
        ],
        "born": -44,
        "formerAffiliations": []
    },
    {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "height": 3.9,
        "mass": 1358,
        "gender": "male",
        "homeworld": "tatooine",
        "wiki": "http://starwars.wikia.com/wiki/Jabba_Desilijic_Tiure",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "born": -600,
        "died": 4,
        "diedLocation": "tatooine",
        "species": "hutt",
        "eyeColor": "orange",
        "skinColor": "green and tan",
        "kajidic": "Desilijic",
        "affiliations": [
            "Hutt Clan",
            "Grand Hutt Council",
            "Jabba Desilijic Tiure's criminal empire",
            "Galactic Republic",
            "Shadow Collective",
            "Crymorah syndicate",
            "Galactic Empire"
        ],
        "formerAffiliations": []
    },
    {
        "id": 18,
        "name": "Wedge Antilles",
        "height": 1.7,
        "mass": 77,
        "gender": "male",
        "homeworld": "corellia",
        "wiki": "http://starwars.wikia.com/wiki/Wedge_Antilles",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "species": "human",
        "hairColor": "brown",
        "eyeColor": "brown",
        "skinColor": "light",
        "affiliations": [
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Phoenix Cell",
            "Massassi Group",
            "Red Squadron",
            "Rogue Squadron",
            "New Republic",
            "Phantom Squadron"
        ],
        "born": -21,
        "formerAffiliations": []
    },
    {
        "id": 19,
        "name": "Jek Tono Porkins",
        "height": 1.8,
        "mass": 110,
        "gender": "male",
        "homeworld": "bestine",
        "wiki": "http://starwars.wikia.com/wiki/Jek_Tono_Porkins",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "died": 0,
        "diedLocation": "yavin system",
        "species": "human",
        "skinColor": "light",
        "affiliations": [
            "Alliance to Restore the Republic",
            "Tierfon Yellow Aces",
            "Red Squadron",
            "Massassi Group"
        ],
        "hairColor": "brown",
        "eyeColor": "blue",
        "formerAffiliations": []
    },
    {
        "id": 20,
        "name": "Yoda",
        "height": 0.66,
        "mass": 13,
        "gender": "male",
        "wiki": "http://starwars.wikia.com/wiki/Yoda",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
        "born": -896,
        "died": 4,
        "diedLocation": "dagobah",
        "species": "yoda's species",
        "hairColor": "white",
        "eyeColor": "green-gold",
        "skinColor": "green",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Galactic Republic",
            "Grand Army of the Republic"
        ],
        "masters": [
            "Unidentified Jedi (Jedi Master)",
            "Garro (stonepower master)",
            "Qui-Gon Jinn (as Force spirit)"
        ],
        "apprentices": [
            "Dooku (Padawan)",
            "Obi-Wan Kenobi",
            "Luke Skywalker",
            "Anakin Skywalker (as Force spirit)"
        ],
        "formerAffiliations": []
    },
    {
        "id": 21,
        "name": "Palpatine",
        "height": 1.78,
        "mass": 75,
        "gender": "male",
        "homeworld": "naboo",
        "wiki": "http://starwars.wikia.com/wiki/Palpatine",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "born": -82,
        "bornLocation": "naboo",
        "died": 4,
        "diedLocation": "death star ii (original body)",
        "species": "human",
        "hairColor": "red, later gray and white",
        "eyeColor": "blue; yellow/red (dark side)",
        "skinColor": "fair, later pale",
        "era": [
            "Rise of the Empire era",
            "Rebellion era",
            "New Republic era"
        ],
        "affiliations": [
            "House Palpatine",
            "Damask Holdings",
            "Royal House of Naboo",
            "Sith",
            "Order of the Sith Lords",
            "Naboo Diplomatic Corps",
            "Galactic Republic",
            "Galactic Senate",
            "Trade Federation",
            "Confederacy of Independent Systems",
            "Galactic Empire",
            "Dark Empire"
        ],
        "masters": "Darth Plagueis",
        "apprentices": [
            "Darth Maul",
            "A Nikto",
            "Vergere",
            "Darth Tyranus",
            "Garth Ezzar",
            "Darth Vader",
            "Ferus Olin (informal)",
            "Mara Jade",
            "Cronal",
            "Lumiya",
            "Luke Skywalker (briefly)"
        ],
        "formerAffiliations": []
    },
    {
        "id": 22,
        "name": "Boba Fett",
        "height": 1.83,
        "mass": 78,
        "gender": "male",
        "homeworld": "kamino",
        "wiki": "http://starwars.wikia.com/wiki/Boba_Fett",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png",
        "born": "Shortly after the Battle of Naboo",
        "species": "human",
        "hairColor": "black",
        "eyeColor": "brown",
        "skinColor": "tan",
        "affiliations": [
            "Confederacy of Independent Systems",
            "Boba Fett's syndicate",
            "Jabba Desilijic Tiure's criminal empire",
            "Galactic Empire"
        ],
        "formerAffiliations": []
    },
    {
        "id": 23,
        "name": "IG-88",
        "height": 1.96,
        "mass": 140,
        "gender": "male",
        "species": "droid",
        "wiki": "http://starwars.wikia.com/wiki/IG-88",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/f/f2/IG-88.png",
        "dateDestroyed": 3,
        "destroyedLocation": "bespin",
        "manufacturer": "Holowan Laboratories",
        "productLine": "IG-series",
        "model": "IG-88 assassin droid",
        "class": "Assassin droid",
        "degree": "Class 4",
        "sensorColor": "red",
        "platingColor": "chrome",
        "armament": [
            "Blaster rifles",
            "Concussion discs",
            "DAS-430 Neural Inhibitor",
            "Flamethrower",
            "Needle dart gun",
            "Poison darts",
            "Pulse cannons",
            "Sonic device",
            "Toxic gas dispensers",
            "Vibroblades"
        ],
        "equipment": [
            "Acid-proof servo wires",
            "Heat sensor",
            "Sound sensor",
            "Vocoder"
        ],
        "skinColor": "metal",
        "eyeColor": "red",
        "born": -15,
        "affiliations": [],
        "formerAffiliations": []
    },
    {
        "id": 24,
        "name": "Bossk",
        "height": 1.90,
        "mass": 113,
        "gender": "male",
        "homeworld": "trandosha",
        "wiki": "http://starwars.wikia.com/wiki/Bossk",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Bossk.png",
        "species": "trandoshan",
        "eyeColor": "orange",
        "skinColor": "green",
        "affiliations": [
            "Bounty Hunters' Guild",
            "Boba Fett's syndicate",
            "Galactic Empire",
            "Chelli Aphra's crew"
        ],
        "born": -53,
        "formerAffiliations": []
    },
    {
        "id": 25,
        "name": "Lando Calrissian",
        "height": 1.77,
        "mass": 79,
        "gender": "male",
        "homeworld": "socorro",
        "wiki": "http://starwars.wikia.com/wiki/Lando_Calrissian",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/8/8f/Lando_ROTJ.png",
        "born": -30,
        "species": "human",
        "hairColor": "black",
        "eyeColor": "brown",
        "skinColor": "dark",
        "affiliations": [
            "Cloud City colony",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Gold Squadron",
            "New Republic",
            "New Republic military",
            "Uprising",
            "Calrissian Enterprises"
        ],
        "formerAffiliations": []
    },
    {
        "id": 26,
        "name": "Lobot",
        "height": 1.75,
        "mass": 79,
        "gender": "male",
        "homeworld": "bespin",
        "wiki": "http://starwars.wikia.com/wiki/Lobot",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/9/96/SWE_Lobot.jpg",
        "species": "human",
        "eyeColor": "blue",
        "skinColor": "light",
        "cybernetics": "AJ^6 cyborg construct",
        "affiliations": [
            "Galactic Empire",
            "Imperial Military",
            "Cloud City",
            "Alliance to Restore the Republic",
            "New Republic"
        ],
        "born": -37,
        "formerAffiliations": []
    },
    {
        "id": 27,
        "name": "Ackbar",
        "height": 1.8,
        "mass": 83,
        "gender": "male",
        "homeworld": "mon cala",
        "wiki": "http://starwars.wikia.com/wiki/Gial_Ackbar",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/2/29/Admiral_Ackbar_RH.png",
        "born": -50,
        "died": 34,
        "diedLocation": "raddus, oetchi system",
        "species": "mon calamari",
        "eyeColor": "orange",
        "skinColor": "brown mottle",
        "affiliations": [
            "Mon Cala monarchy",
            "Mon Calamari Guard",
            "Galactic Republic",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Alliance Fleet",
            "Alliance High Command",
            "New Republic",
            "New Republic Defense Fleet",
            "Resistance",
            "Resistance High Command",
            "Resistance Fleet Command",
            "Resistance navy"
        ],
        "formerAffiliations": []
    },
    {
        "id": 28,
        "name": "Mon Mothma",
        "height": 1.73,
        "gender": "female",
        "homeworld": "chandrila",
        "wiki": "http://starwars.wikia.com/wiki/Mon_Mothma",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/b/b7/MP-MonMothma.png",
        "born": -46,
        "species": "human",
        "hairColor": "auburn",
        "eyeColor": "pale blue-green",
        "skinColor": "light",
        "affiliations": [
            "Galactic Republic",
            "Loyalist Committee",
            "Delegation of 2,000",
            "Galactic Empire",
            "Imperial Senate",
            "Mon Mothma's rebel cell",
            "Alliance to Restore the Republic",
            "New Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 29,
        "name": "Arvel Crynyd",
        "gender": "male",
        "wiki": "http://starwars.wikia.com/wiki/Arvel_Crynyd",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg",
        "died": 4,
        "diedLocation": "executor",
        "species": "human",
        "eyeColor": "brown",
        "skinColor": "light",
        "affiliations": [
            "Alliance to Restore the Republic",
            "Green Squadron"
        ],
        "hairColor": "brown",
        "formerAffiliations": []
    },
    {
        "id": 30,
        "name": "Wicket Systri Warrick",
        "height": 0.8,
        "mass": 20,
        "gender": "male",
        "homeworld": "endor",
        "wiki": "http://starwars.wikia.com/wiki/Wicket_W._Warrick",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png",
        "species": "ewok",
        "hairColor": "brown",
        "eyeColor": "brownish black",
        "affiliations": [
            "Bright Tree tribe",
            "Alliance to Restore the Republic"
        ],
        "skinColor": "brown",
        "born": -8,
        "formerAffiliations": []
    },
    {
        "id": 31,
        "name": "Nien Nunb",
        "height": 1.6,
        "mass": 68,
        "gender": "male",
        "homeworld": "sullust",
        "wiki": "http://starwars.wikia.com/wiki/Nien_Nunb",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/1/14/Old_nien_nunb_-_profile.png",
        "species": "sullustan",
        "eyeColor": "black",
        "skinColor": "light",
        "affiliations": [
            "House of Organa",
            "Alliance to Restore the Republic",
            "Gold Squadron",
            "New Republic",
            "Resistance",
            "Red Squadron"
        ],
        "formerAffiliations": []
    },
    {
        "id": 32,
        "name": "Qui-Gon Jinn",
        "height": 1.93,
        "mass": 89,
        "gender": "male",
        "homeworld": "coruscant",
        "wiki": "http://starwars.wikia.com/wiki/Qui-Gon_Jinn",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg",
        "died": -32,
        "diedLocation": "naboo",
        "species": "human",
        "hairColor": "brown",
        "eyeColor": "blue",
        "skinColor": "light",
        "affiliations": [
            "Jedi Order",
            "Galactic Republic"
        ],
        "masters": "Dooku",
        "apprentices": [
            "Obi-Wan Kenobi",
            "Anakin Skywalker (informally)",
            "Yoda (as Force spirit)"
        ],
        "born": -92,
        "formerAffiliations": []
    },
    {
        "id": 33,
        "name": "Nute Gunray",
        "height": 1.91,
        "mass": 90,
        "gender": "male",
        "homeworld": "neimoidia",
        "wiki": "http://starwars.wikia.com/wiki/Nute_Gunray",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/f/fd/Nute_Gunray_SWE.png",
        "died": -19,
        "diedLocation": "mustafar",
        "species": "neimoidian",
        "eyeColor": "red",
        "skinColor": "green",
        "affiliations": [
            "Trade Federation",
            "Confederacy of Independent Systems",
            "Separatist Council"
        ],
        "formerAffiliations": []
    },
    {
        "id": 34,
        "name": "Finis Valorum",
        "height": 1.7,
        "gender": "male",
        "homeworld": "coruscant",
        "wiki": "http://starwars.wikia.com/wiki/Finis_Valorum",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/5/51/ValorumPortrait-SWE.png",
        "species": "human",
        "hairColor": "white",
        "eyeColor": "blue",
        "skinColor": "fair",
        "affiliations": [
            "House Valorum",
            "Galactic Republic",
            "Galactic Senate"
        ],
        "born": -91,
        "formerAffiliations": []
    },
    {
        "id": 35,
        "name": "Padmé Amidala",
        "height": 1.65,
        "mass": 45,
        "gender": "female",
        "homeworld": "naboo",
        "wiki": "http://starwars.wikia.com/wiki/Padm%C3%A9_Amidala",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg",
        "born": -46,
        "bornLocation": "naboo",
        "died": -19,
        "diedLocation": "polis massa (2 days after empire day)",
        "species": "human",
        "hairColor": "brown",
        "eyeColor": "light brown",
        "skinColor": "light",
        "affiliations": [
            "Apprentice Legislators",
            "Legislative Youth Program",
            "Royal House of Naboo",
            "Galactic Republic",
            "Loyalist Committee",
            "Delegation of 2,000",
            "Galactic Empire",
            "Imperial Senate"
        ],
        "formerAffiliations": []
    },
    {
        "id": 36,
        "name": "Jar Jar Binks",
        "height": 1.96,
        "mass": 66,
        "gender": "male",
        "homeworld": "naboo",
        "wiki": "http://starwars.wikia.com/wiki/Jar_Jar_Binks",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg",
        "species": "gungan",
        "eyeColor": "yellow",
        "skinColor": "orange and white",
        "affiliations": [
            "Gungan High Council",
            "Officer corps",
            "Galactic Republic",
            "Naboo delegation",
            "Galactic Empire",
            "Imperial Senate"
        ],
        "born": -52,
        "formerAffiliations": []
    },
    {
        "id": 37,
        "name": "Roos Tarpals",
        "height": 2.24,
        "mass": 82,
        "gender": "male",
        "homeworld": "naboo",
        "wiki": "http://starwars.wikia.com/wiki/Roos_Tarpals",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/c/ca/TarpalsHS.jpg",
        "died": -20,
        "diedLocation": "naboo",
        "species": "gungan",
        "eyeColor": "orange",
        "skinColor": "purple and white",
        "affiliations": [
            "Gungan Grand Army"
        ],
        "formerAffiliations": []
    },
    {
        "id": 38,
        "name": "Rugor Nass",
        "height": 2.06,
        "gender": "male",
        "homeworld": "naboo",
        "wiki": "http://starwars.wikia.com/wiki/Rugor_Nass",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Bossnass.jpg",
        "species": "gungan",
        "eyeColor": "yellow",
        "skinColor": "green",
        "affiliations": [
            "Gungan High Council"
        ],
        "formerAffiliations": []
    },
    {
        "id": 39,
        "name": "Ric Olié",
        "height": 1.83,
        "gender": "male",
        "homeworld": "naboo",
        "wiki": "http://starwars.wikia.com/wiki/Ric_Oli%C3%A9",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png",
        "species": "human",
        "hairColor": "light brown",
        "eyeColor": "bluish green",
        "affiliations": [
            "Royal House of Naboo",
            "Royal Naboo Security Forces",
            "Bravo Flight"
        ],
        "skinColor": "fair",
        "formerAffiliations": []
    },
    {
        "id": 40,
        "name": "Watto",
        "height": 1.37,
        "gender": "male",
        "homeworld": "toydaria",
        "wiki": "http://starwars.wikia.com/wiki/Watto",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg",
        "species": "toydarian",
        "eyeColor": "orange",
        "skinColor": "blue",
        "affiliations": [
            "Watto's shop",
            "Mos Espa"
        ],
        "hairColor": "black",
        "formerAffiliations": []
    },
    {
        "id": 41,
        "name": "Sebulba",
        "height": 1.12,
        "mass": 40,
        "gender": "male",
        "homeworld": "malastare",
        "wiki": "http://starwars.wikia.com/wiki/Sebulba",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/1/14/Sebulba_Headshot_Closeup.png",
        "species": "dug",
        "eyeColor": "yellow",
        "skinColor": "purple and beige",
        "affiliations": [],
        "formerAffiliations": []
    },
    {
        "id": 42,
        "name": "Quarsh Panaka",
        "height": 1.83,
        "gender": "male",
        "homeworld": "naboo",
        "wiki": "http://starwars.wikia.com/wiki/Quarsh_Panaka",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/7/72/PanakaHS-TPM.png",
        "died": -3,
        "diedLocation": "onoam",
        "species": "human",
        "hairColor": "black, later with flecks of gray",
        "eyeColor": "brown",
        "skinColor": "dark",
        "affiliations": [
            "Royal House of Naboo",
            "Royal Naboo Security Forces",
            "Galactic Republic",
            "Republic Special Task Force",
            "Galactic Empire"
        ],
        "born": -62,
        "formerAffiliations": []
    },
    {
        "id": 43,
        "name": "Shmi Skywalker",
        "height": 1.63,
        "gender": "female",
        "homeworld": "tatooine",
        "wiki": "http://starwars.wikia.com/wiki/Shmi_Skywalker_Lars",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/a/ad/ShmiSkywalkerDatabank_%28Repurposed%29.jpeg",
        "born": -72,
        "died": -22,
        "diedLocation": "tatooine",
        "species": "human",
        "hairColor": "brown",
        "eyeColor": "brown",
        "skinColor": "light",
        "affiliations": [
            "Skywalker family",
            "Lars family"
        ],
        "formerAffiliations": []
    },
    {
        "id": 44,
        "name": "Darth Maul",
        "height": 1.75,
        "mass": 80,
        "gender": "male",
        "homeworld": "dathomir",
        "wiki": "http://starwars.wikia.com/wiki/Darth_Maul",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png",
        "died": -2,
        "diedLocation": "tatooine",
        "species": "dathomirian zabrak",
        "eyeColor": "yellow and red",
        "skinColor": "red (black tattoos)",
        "cybernetics": [
            "Six-legged apparatus (formerly)",
            "Two cybernetic legs"
        ],
        "affiliations": [
            "Nightbrothers",
            "Sith",
            "Cad Bane's group",
            "Death Watch",
            "Shadow Collective"
        ],
        "masters": "Darth Sidious",
        "apprentices": "Savage Opress",
        "born": -54,
        "formerAffiliations": [
            "Trade Federation"
        ]
    },
    {
        "id": 45,
        "name": "Bib Fortuna",
        "height": 2,
        "gender": "male",
        "homeworld": "ryloth",
        "wiki": "http://starwars.wikia.com/wiki/Bib_Fortuna",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/3/33/BibFortunaHS-ROTJ.png",
        "died": 4,
        "diedLocation": "tatooine",
        "species": "twi'lek",
        "eyeColor": "pink",
        "skinColor": "light",
        "affiliations": [
            "Fortuna family",
            "Jabba Desilijic Tiure's criminal empire"
        ],
        "formerAffiliations": []
    },
    {
        "id": 46,
        "name": "Ayla Secura",
        "height": 1.7,
        "mass": 55,
        "gender": "female",
        "homeworld": "ryloth",
        "wiki": "http://starwars.wikia.com/wiki/Aayla_Secura/Legends",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/f/f9/Aayla.jpg",
        "born": -48,
        "died": -19,
        "diedLocation": "felucia",
        "species": "twi'lek",
        "eyeColor": "hazel",
        "skinColor": "blue",
        "era": "Rise of the Empire era",
        "affiliations": [
            "Jedi Order",
            "Galactic Republic"
        ],
        "masters": [
            "Quinlan Vos (Jedi Master)",
            "Volfe Karkko (Dark Jedi master) (briefly)",
            "Tholme (Jedi Master)"
        ],
        "formerAffiliations": []
    },
    {
        "id": 47,
        "name": "Ratts Tyerell",
        "height": 0.79,
        "mass": 15,
        "gender": "male",
        "homeworld": "aleen",
        "wiki": "http://starwars.wikia.com/wiki/Ratts_Tyerell",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/6/68/RattsHS.jpg",
        "died": -32,
        "diedLocation": "tatooine",
        "species": "aleena",
        "eyeColor": "black",
        "skinColor": "blue, white",
        "affiliations": [],
        "formerAffiliations": []
    },
    {
        "id": 48,
        "name": "Dud Bolt",
        "height": 0.94,
        "mass": 45,
        "gender": "male",
        "homeworld": "vulpter",
        "wiki": "http://starwars.wikia.com/wiki/Dud_Bolt",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png",
        "species": "vulptereen",
        "eyeColor": "yellow",
        "skinColor": "blue-gray, yellow, white",
        "affiliations": [],
        "formerAffiliations": []
    },
    {
        "id": 49,
        "name": "Gasgano",
        "height": 1.22,
        "gender": "male",
        "homeworld": "troiken",
        "wiki": "http://starwars.wikia.com/wiki/Gasgano",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/5/57/GasganoHS-SWE.jpg",
        "species": "xexto",
        "eyeColor": "black",
        "skinColor": "white, brown, purple",
        "affiliations": [],
        "formerAffiliations": []
    },
    {
        "id": 50,
        "name": "Ben Quadinaros",
        "height": 1.63,
        "mass": 65,
        "gender": "male",
        "homeworld": "tund",
        "wiki": "http://starwars.wikia.com/wiki/Ben_Quadinaros",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Cropped_Quadinaros.png",
        "species": "toong",
        "eyeColor": "orange",
        "skinColor": "yellow",
        "affiliations": [],
        "formerAffiliations": []
    },
    {
        "id": 51,
        "name": "Mace Windu",
        "height": 1.92,
        "mass": 84,
        "gender": "male",
        "homeworld": "haruun kal",
        "wiki": "http://starwars.wikia.com/wiki/Mace_Windu",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/5/58/Mace_ROTS.png",
        "born": -72,
        "died": -19,
        "diedLocation": "coruscant",
        "species": "human",
        "hairColor": "black; later none",
        "eyeColor": "brown",
        "skinColor": "dark",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Jedi assault team",
            "Mace Windu's squad",
            "Galactic Republic",
            "Grand Army of the Republic"
        ],
        "masters": "Cyslin Myr",
        "apprentices": "Depa Billaba",
        "formerAffiliations": []
    },
    {
        "id": 52,
        "name": "Ki-Adi-Mundi",
        "height": 1.98,
        "mass": 82,
        "gender": "male",
        "homeworld": "cerea",
        "wiki": "http://starwars.wikia.com/wiki/Ki-Adi-Mundi",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/9/9e/KiAdiMundi.jpg",
        "died": -19,
        "diedLocation": "mygeeto",
        "species": "cerean",
        "hairColor": "white",
        "eyeColor": "yellow",
        "skinColor": "light",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Jedi assault team",
            "Galactic Republic",
            "Galactic Marines"
        ],
        "born": -92,
        "formerAffiliations": []
    },
    {
        "id": 53,
        "name": "Kit Fisto",
        "height": 1.96,
        "mass": 87,
        "gender": "male",
        "homeworld": "glee anselm",
        "wiki": "http://starwars.wikia.com/wiki/Kit_Fisto",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/4/4c/Kit_Fisto_Card_Trader.png",
        "died": -19,
        "diedLocation": "coruscant",
        "species": "nautolan",
        "eyeColor": "black",
        "skinColor": "green",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Jedi assault team",
            "Mace Windu's squad",
            "Galactic Republic"
        ],
        "apprentices": "Nahdar Vebb",
        "formerAffiliations": []
    },
    {
        "id": 54,
        "name": "Eeth Koth",
        "height": 1.71,
        "gender": "male",
        "homeworld": "nar shaddaa",
        "wiki": "http://starwars.wikia.com/wiki/Eeth_Koth",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/EethKothCardTrader.png",
        "species": "iridonian zabrak",
        "hairColor": "black",
        "eyeColor": "brown",
        "skinColor": "tan",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Jedi assault team",
            "Galactic Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 55,
        "name": "Adi Gallia",
        "height": 1.84,
        "mass": 50,
        "gender": "female",
        "homeworld": "coruscant",
        "wiki": "http://starwars.wikia.com/wiki/Adi_Gallia",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/b/ba/AdiGallia.jpg",
        "died": -20,
        "diedLocation": "florrum",
        "species": "tholothian",
        "eyeColor": "blue",
        "skinColor": "dark (with blue patches)",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Jedi assault team",
            "Galactic Republic",
            "Grand Army of the Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 56,
        "name": "Saesee Tiin",
        "height": 1.93,
        "gender": "male",
        "homeworld": "iktotch",
        "wiki": "http://starwars.wikia.com/wiki/Saesee_Tiin",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/6/68/Saesee_Tiin_Card_Trader.jpg",
        "died": -19,
        "diedLocation": "coruscant",
        "species": "iktotchi",
        "eyeColor": "yellow",
        "skinColor": "orange and pink",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Jedi assault team",
            "Galactic Republic",
            "Grand Army of the Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 57,
        "name": "Yarael Poof",
        "height": 2.64,
        "gender": "male",
        "homeworld": "quermia",
        "wiki": "http://starwars.wikia.com/wiki/Yarael_Poof",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/6/66/Yarael_Poof_Canon.jpeg",
        "died": -27,
        "species": "quermian",
        "eyeColor": "red",
        "skinColor": "pasty white",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Galactic Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 58,
        "name": "Plo Koon",
        "height": 1.88,
        "mass": 80,
        "gender": "male",
        "homeworld": "dorin",
        "wiki": "http://starwars.wikia.com/wiki/Plo_Koon",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/b/bf/PloKoonCardTrader.png",
        "died": -19,
        "diedLocation": "cato neimoidia",
        "species": "kel dor",
        "skinColor": "orange",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Jedi assault team",
            "Galactic Republic",
            "104th Battalion"
        ],
        "eyeColor": "black",
        "born": -22,
        "formerAffiliations": []
    },
    {
        "id": 59,
        "name": "Mas Amedda",
        "height": 1.96,
        "gender": "male",
        "homeworld": "champala",
        "wiki": "http://starwars.wikia.com/wiki/Mas_Amedda",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png",
        "species": "chagrian",
        "eyeColor": "blue",
        "skinColor": "blue",
        "affiliations": [
            "Galactic Republic",
            "Galactic Senate",
            "Office of the Chancellor",
            "Strategic Advisory Cell",
            "Galactic Empire",
            "Imperial Ruling Council",
            "Coruscant provisional government"
        ],
        "formerAffiliations": []
    },
    {
        "id": 60,
        "name": "Gregar Typho",
        "height": 1.85,
        "mass": 85,
        "gender": "male",
        "homeworld": "naboo",
        "wiki": "http://starwars.wikia.com/wiki/Gregar_Typho",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/5/52/Gregar_Typho.jpg",
        "species": "human",
        "hairColor": "black",
        "eyeColor": "brown",
        "affiliations": [
            "Royal House of Naboo",
            "Royal Naboo Security Forces",
            "Galactic Republic"
        ],
        "skinColor": "dark",
        "formerAffiliations": []
    },
    {
        "id": 61,
        "name": "Cordé",
        "height": 1.57,
        "gender": "female",
        "homeworld": "naboo",
        "wiki": "http://starwars.wikia.com/wiki/Cord%C3%A9",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/b/b6/Cord%C3%A9_-_SW_Card_Trader.png",
        "died": -22,
        "diedLocation": "coruscant",
        "species": "human",
        "hairColor": "brown",
        "eyeColor": "brown",
        "skinColor": "light",
        "affiliations": [
            "Royal House of Naboo",
            "Naboo Royal Handmaidens",
            "Galactic Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 62,
        "name": "Cliegg Lars",
        "height": 1.83,
        "gender": "male",
        "homeworld": "tatooine",
        "wiki": "http://starwars.wikia.com/wiki/Cliegg_Lars",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg",
        "died": -22,
        "species": "human",
        "hairColor": "light brown",
        "eyeColor": "blue",
        "skinColor": "fair",
        "affiliations": [
            "Lars family"
        ],
        "born": -82,
        "formerAffiliations": []
    },
    {
        "id": 63,
        "name": "Poggle the Lesser",
        "height": 1.75,
        "mass": 80,
        "gender": "male",
        "homeworld": "geonosis",
        "wiki": "http://starwars.wikia.com/wiki/Poggle_the_Lesser",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/9/93/Poggle_the_lesser_-_sw_card_trader.png",
        "died": -19,
        "diedLocation": "mustafar",
        "species": "geonosian",
        "eyeColor": "yellow",
        "affiliations": [
            "Stalgasin hive",
            "Karina the Great's empire",
            "Techno Union",
            "Confederacy of Independent Systems",
            "Separatist Council",
            "Galactic Republic"
        ],
        "skinColor": "green",
        "formerAffiliations": []
    },
    {
        "id": 64,
        "name": "Luminara Unduli",
        "height": 1.76,
        "mass": 56.2,
        "gender": "female",
        "homeworld": "mirial",
        "wiki": "http://starwars.wikia.com/wiki/Luminara_Unduli",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/2/21/LuminaraHS-SWE_%28new%29.png",
        "died": 66,
        "species": "mirialan",
        "hairColor": "black",
        "eyeColor": "royal-blue",
        "skinColor": "green (with black tattoos)",
        "affiliations": [
            "Jedi Order",
            "Jedi assault team",
            "Galactic Republic",
            "41st Elite Corps"
        ],
        "apprentices": "Barriss Offee",
        "born": -58,
        "formerAffiliations": []
    },
    {
        "id": 65,
        "name": "Barriss Offee",
        "height": 1.66,
        "mass": 50,
        "gender": "female",
        "homeworld": "mirial",
        "wiki": "http://starwars.wikia.com/wiki/Barriss_Offee",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/3/37/Barrisprofile2.jpg",
        "species": "mirialan",
        "hairColor": "black",
        "eyeColor": "blue",
        "skinColor": "yellow (with black tattoos)",
        "affiliations": [
            "Jedi Order",
            "Jedi assault team",
            "Galactic Republic",
            "Grand Army of the Republic"
        ],
        "masters": "Luminara Unduli",
        "born": -40,
        "formerAffiliations": []
    },
    {
        "id": 66,
        "name": "Dormé",
        "height": 1.65,
        "gender": "female",
        "homeworld": "naboo",
        "wiki": "http://starwars.wikia.com/wiki/Dorm%C3%A9",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/1/18/Dormesenate.jpg",
        "species": "human",
        "hairColor": "brown",
        "eyeColor": "brown",
        "skinColor": "light",
        "affiliations": [
            "Royal House of Naboo",
            "Naboo Royal Handmaidens",
            "Galactic Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 67,
        "name": "Dooku",
        "height": 1.93,
        "mass": 86,
        "gender": "male",
        "homeworld": "serenno",
        "wiki": "http://starwars.wikia.com/wiki/Dooku",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/b/b8/Dooku_Headshot.jpg",
        "born": -102,
        "died": -19,
        "diedLocation": "aboard invisible hand over coruscant",
        "species": "human",
        "hairColor": "white",
        "eyeColor": "brown, yellowred (vision dark side)",
        "skinColor": "light",
        "affiliations": [
            "House of Dooku",
            "Lost Twenty",
            "Sith",
            "Independent Movement for Self-Determination",
            "Confederacy of Independent Systems"
        ],
        "masters": [
            "Yoda (Jedi)",
            "Darth Sidious (Sith)"
        ],
        "apprentices": [
            "Qui-Gon Jinn (Jedi)",
            "Grievous (lightsaber trainee)",
            "Asajj Ventress",
            "Savage Opress (Sith)",
            "Quinlan Vos (Sith)"
        ],
        "formerAffiliations": [
            "Jedi Order",
            "Galactic Republic"
        ]
    },
    {
        "id": 68,
        "name": "Bail Prestor Organa",
        "height": 1.91,
        "gender": "male",
        "homeworld": "alderaan",
        "wiki": "http://starwars.wikia.com/wiki/Bail_Prestor_Organa",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/5/50/Bail_Organa_Mug.jpg",
        "born": -67,
        "died": 0,
        "diedLocation": "alderaan",
        "species": "human",
        "hairColor": "black",
        "eyeColor": "brown",
        "skinColor": "tan",
        "era": [
            "Rise of the Empire era",
            "Rebellion era"
        ],
        "affiliations": [
            "House of Organa",
            "High Court of Alderaan",
            "Galactic Republic",
            "Galactic Senate",
            "Loyalist Committee",
            "Security Committee",
            "Delegation of 2000",
            "Galactic Empire",
            "Imperial Senate",
            "Finance Committee",
            "Appropriations Committee",
            "Intelligence Oversight Committee",
            "Military Oversight Committee",
            "Alderaanian Resistance",
            "Kota's Militia",
            "Alliance to Restore the Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 69,
        "name": "Jango Fett",
        "height": 1.83,
        "mass": 79,
        "gender": "male",
        "homeworld": "concord dawn",
        "wiki": "http://starwars.wikia.com/wiki/Jango_Fett",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/5/56/JangoInfobox.png",
        "died": -22,
        "diedLocation": "geonosis",
        "species": "human",
        "hairColor": "black",
        "eyeColor": "brown",
        "skinColor": "tan",
        "affiliations": [
            "Confederacy of Independent Systems",
            "Tyranus"
        ],
        "born": -66,
        "formerAffiliations": []
    },
    {
        "id": 70,
        "name": "Zam Wesell",
        "height": 1.68,
        "mass": 55,
        "gender": "female",
        "homeworld": "zolan",
        "wiki": "http://starwars.wikia.com/wiki/Zam_Wesell",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/7/7d/Clawdite.jpg",
        "died": -22,
        "diedLocation": "coruscant",
        "species": "clawdite",
        "skinColor": "green",
        "affiliations": [
            "Mabari",
            "Confederacy of Independent Systems"
        ],
        "hairColor": "blond",
        "eyeColor": "yellow",
        "formerAffiliations": []
    },
    {
        "id": 71,
        "name": "Dexter Jettster",
        "height": 1.88,
        "mass": 102,
        "gender": "male",
        "homeworld": "ojom",
        "wiki": "http://starwars.wikia.com/wiki/Dexter_Jettster",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/6/6c/DexterHS-SWE.jpg",
        "species": "besalisk",
        "hairColor": "brown-black",
        "eyeColor": "yellow",
        "skinColor": "tan-brown",
        "affiliations": [
            "Dex's Diner"
        ],
        "formerAffiliations": []
    },
    {
        "id": 72,
        "name": "Lama Su",
        "height": 2.29,
        "mass": 88,
        "gender": "male",
        "homeworld": "kamino",
        "wiki": "http://starwars.wikia.com/wiki/Lama_Su",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg",
        "species": "kaminoan",
        "eyeColor": "black with white pupils",
        "skinColor": "white",
        "affiliations": [
            "Galactic Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 73,
        "name": "Taun We",
        "height": 2.13,
        "gender": "female",
        "homeworld": "kamino",
        "wiki": "http://starwars.wikia.com/wiki/Taun_We",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/9/9c/TaunWe.jpg",
        "species": "kaminoan",
        "eyeColor": "black with white pupils",
        "skinColor": "white",
        "affiliations": [
            "Galactic Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 74,
        "name": "Jocasta Nu",
        "height": 1.69,
        "gender": "female",
        "homeworld": "coruscant",
        "wiki": "http://starwars.wikia.com/wiki/Jocasta_Nu",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/1/15/Jocasta_Nu_SWE.png",
        "died": -19,
        "diedLocation": "coruscant",
        "species": "human",
        "hairColor": "white",
        "eyeColor": "blue",
        "skinColor": "light",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council"
        ],
        "formerAffiliations": []
    },
    {
        "id": 75,
        "name": "R4-P17",
        "height": 1.09,
        "gender": "female",
        "species": "droid",
        "wiki": "http://starwars.wikia.com/wiki/R4-P17",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/6/6b/R4-P17.jpg",
        "dateDestroyed": -19,
        "destroyedLocation": "coruscant system",
        "manufacturer": "Industrial Automaton",
        "productLine": "R-series",
        "class": "Astromech droid",
        "platingColor": "red",
        "armament": "Electro-shock prod",
        "affiliations": [
            "Galactic Republic"
        ],
        "skinColor": "silver, red",
        "eyeColor": "red, blue",
        "formerAffiliations": []
    },
    {
        "id": 76,
        "name": "Wat Tambor",
        "height": 1.98,
        "mass": 48,
        "gender": "male",
        "homeworld": "skako",
        "wiki": "http://starwars.wikia.com/wiki/Wat_Tambor",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/a/a5/Wat_Tambor.png",
        "died": -19,
        "diedLocation": "mustafar",
        "species": "skakoan",
        "eyeColor": "black",
        "skinColor": "green",
        "affiliations": [
            "Techno Union",
            "Baktoid Armor Workshop",
            "Confederacy of Independent Systems",
            "Separatist Council"
        ],
        "formerAffiliations": []
    },
    {
        "id": 77,
        "name": "San Hill",
        "height": 1.91,
        "gender": "male",
        "homeworld": "scipio",
        "wiki": "http://starwars.wikia.com/wiki/San_Hill",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/SanHill_hs.jpg",
        "died": -19,
        "diedLocation": "mustafar",
        "species": "muun",
        "eyeColor": "yellow",
        "skinColor": "pale",
        "affiliations": [
            "InterGalactic Banking Clan",
            "Muunilinst Banking Clan",
            "Confederacy of Independent Systems",
            "Separatist Council"
        ],
        "formerAffiliations": []
    },
    {
        "id": 78,
        "name": "Shaak Ti",
        "height": 1.87,
        "mass": 57,
        "gender": "female",
        "homeworld": "shili",
        "wiki": "http://starwars.wikia.com/wiki/Shaak_Ti",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/Shaak_Ti_closeup-SWE.png",
        "born": -59,
        "died": -19,
        "diedLocation": "coruscant",
        "species": "togruta",
        "eyeColor": "black",
        "skinColor": "red (with white markings and gray stripes)",
        "affiliations": [
            "Jedi Order",
            "Jedi High Council",
            "Jedi assault team",
            "Galactic Republic",
            "Grand Army of the Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 79,
        "name": "Grievous",
        "height": 2.16,
        "mass": 159,
        "gender": "male",
        "homeworld": "kalee",
        "wiki": "http://starwars.wikia.com/wiki/Grievous",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/d/de/Grievoushead.jpg",
        "died": -19,
        "diedLocation": "utapau",
        "species": "kaleesh",
        "eyeColor": "gold",
        "skinColor": "red",
        "cybernetics": "Completely cybernetic except for brain, some vital organs, and parts of his head",
        "affiliations": [
            "Confederacy of Independent Systems",
            "Separatist Droid Army"
        ],
        "masters": "Dooku (lightsaber combat)",
        "formerAffiliations": []
    },
    {
        "id": 80,
        "name": "Tarfful",
        "height": 2.32,
        "mass": 136,
        "gender": "male",
        "homeworld": "kashyyyk",
        "wiki": "http://starwars.wikia.com/wiki/Tarfful",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/3/37/Tarfful_RotS.png",
        "species": "wookiee",
        "hairColor": "brown",
        "eyeColor": "blue",
        "affiliations": [
            "Galactic Republic"
        ],
        "skinColor": "brown",
        "formerAffiliations": []
    },
    {
        "id": 81,
        "name": "Raymus Antilles",
        "height": 1.88,
        "mass": 79,
        "gender": "male",
        "homeworld": "alderaan",
        "wiki": "http://starwars.wikia.com/wiki/Raymus_Antilles",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/8/80/Raymus_card_trader.png",
        "died": 0,
        "diedLocation": "tantive iv, tatoo system",
        "species": "human",
        "hairColor": "brown",
        "eyeColor": "brown",
        "skinColor": "fair",
        "affiliations": [
            "House of Organa",
            "Alliance to Restore the Republic",
            "Alliance Military"
        ],
        "formerAffiliations": []
    },
    {
        "id": 82,
        "name": "Sly Moore",
        "height": 1.78,
        "mass": 48,
        "gender": "female",
        "homeworld": "umbara",
        "wiki": "http://starwars.wikia.com/wiki/Sly_Moore",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/e/ec/SlyMooreIsWatchingYouPoop-OfficialPix.jpg",
        "species": "umbaran",
        "eyeColor": "white",
        "skinColor": "pale",
        "affiliations": [
            "Galactic Republic",
            "Office of the Chancellor",
            "Galactic Empire"
        ],
        "formerAffiliations": []
    },
    {
        "id": 83,
        "name": "Tion Medon",
        "height": 2.06,
        "mass": 80,
        "gender": "male",
        "homeworld": "utapau",
        "wiki": "http://starwars.wikia.com/wiki/Tion_Medon",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/4/43/Tion_Medon.jpg",
        "species": "pau'an",
        "eyeColor": "black",
        "skinColor": "gray (with red markings)",
        "affiliations": [
            "Galactic Republic"
        ],
        "formerAffiliations": []
    },
    {
        "id": 84,
        "name": "Finn",
        "height": 1.78,
        "mass": 73,
        "gender": "male",
        "wiki": "http://starwars.wikia.com/wiki/Finn",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/a/af/Finn_TLJ_Collector%27s_Edition.png",
        "born": 11,
        "species": "human",
        "hairColor": "black",
        "eyeColor": "brown",
        "skinColor": "dark",
        "affiliations": [
            "First Order",
            "FN Corps",
            "Resistance"
        ],
        "formerAffiliations": []
    },
    {
        "id": 85,
        "name": "Rey",
        "height": 1.7,
        "mass": 54,
        "gender": "female",
        "homeworld": "jakku",
        "wiki": "http://starwars.wikia.com/wiki/Rey",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/f/f8/ReyTLJEntertainmentWeeklyNovember.png",
        "born": 15,
        "species": "human",
        "hairColor": "brown",
        "eyeColor": "hazel",
        "skinColor": "light",
        "affiliations": [
            "Resistance",
            "Jedi Order"
        ],
        "masters": "Luke Skywalker",
        "formerAffiliations": []
    },
    {
        "id": 86,
        "name": "Poe Dameron",
        "height": 1.72,
        "mass": 80,
        "gender": "male",
        "homeworld": "yavin 4",
        "wiki": "http://starwars.wikia.com/wiki/Poe_Dameron",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/7/79/Poe_Dameron_TLJ.png",
        "born": 2,
        "species": "human",
        "hairColor": "brown",
        "eyeColor": "brown",
        "skinColor": "tan",
        "affiliations": [
            "New Republic",
            "Rapier Squadron",
            "Resistance",
            "Squadron",
            "Black Squadron",
            "Blue Squadron",
            "Red Squadron",
            "\"Reb\" Squadron"
        ],
        "formerAffiliations": []
    },
    {
        "id": 87,
        "name": "BB8",
        "height": 0.67,
        "mass": 18,
        "gender": "male",
        "species": "droid",
        "wiki": "http://starwars.wikia.com/wiki/BB-8",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/6/68/BB8-Fathead.png",
        "model": "BB-series",
        "class": "Astromech droid",
        "sensorColor": "black",
        "platingColor": "stainless inoxium",
        "equipment": [
            "Grappling Spike Launcher",
            "Welding torch",
            "Holoprojector",
            "Arc welder"
        ],
        "affiliations": [
            "New Republic",
            "Rapier Squadron",
            "Resistance",
            "Black Squadron"
        ],
        "eyeColor": "black",
        "formerAffiliations": []
    },
    {
        "id": 88,
        "name": "Captain Phasma",
        "height": 2.0,
        "mass": 76,
        "gender": "female",
        "homeworld": "parnassos",
        "wiki": "http://starwars.wikia.com/wiki/Phasma",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/0/02/Phasma.png",
        "species": "human",
        "hairColor": "gold",
        "eyeColor": "blue",
        "skinColor": "pale",
        "affiliations": [
            "Unidentified clan",
            "Scyre",
            "First Order",
            "First Order military"
        ],
        "formerAffiliations": []
    }
]

export default HotorNot;