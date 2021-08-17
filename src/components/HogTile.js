import React, {useState} from "react";
import HogDetails from "./HogDetails";
import hogs from "../porkers_data"

function HogTile() {
    // initialize the array of hog objects with an additional key for displaying detail
    const tempHogList = hogs.map(hog => {hog.displayDetail = false;
        return hog
    });

    // state variable
    const [hogList, setHogList] = useState(tempHogList);

    // function that responds to the click event and switch the value of the displayDetail key
    function handleHogDetails(hogName) {
        // console.log(hogList)
        const newHogs = hogList.map(hog => {
            if (hog.name === hogName) {
                console.log(hog.displayDetail) 
                hog.displayDetail = !hog.displayDetail
                console.log(hog.displayDetail)
                console.log(hog)
                return hog
            }
            else return hog
        })
        setHogList(newHogs);
        // hogList.forEach(hog => console.log(hog.displayDetail))
        // console.log(newHogs)
    }

    // variable that contains the JSX to be returned
    const hogTileArray = hogList.map((hog) => {
        const details = <HogDetails
                                specialty={hog.specialty} 
                                greased={hog.greased}
                                weight={hog.weight}
                                medal={hog["highest medal achieved"]}
                            />;
                
        const hogInfo = <div 
                            key={hog.name} 
                            className="ui eight wide column"
                            onClick={event => handleHogDetails(hog.name)}
                        >
                            <h3>{hog.name}</h3>
                            <img className="pig-images" src={hog.image} alt={hog.name}/>
                            {hog.displayDetail ? details : null}
                            {/* {hog.displayDetail ? "true" : "false"} */}
                        </div>                  
        
        return hogInfo  
    })
    return hogTileArray;
}

export default HogTile;