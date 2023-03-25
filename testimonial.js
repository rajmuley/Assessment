import { useState } from "react";

export function Profile() {
    const [titals, potfoliyo] = useState({
      name: "Ratanji Tata",
      img: "https://gumlet.assettype.com/fortuneindia/2022-09/305e0299-2791-4cf0-a2aa-97492d492bcb/Rich_list__Tata_1.jpg?w=1200&h=768",
      text: "Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, and former chairman of Tata Sons. He was chairman of the Tata Group from 1990 to 2012, and interim chairman from October 2016 through February 2017."
    });
    const updateProfile = () => {
      potfoliyo(previousState => {
        return { ...previousState, name: "Mukeshji Ambani",img: "https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds",text: "Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire businessman. He is the chairman and MD of Reliance Industries Ltd. (RIL), a Fortune Global 500 company and India's most valuzable company by market value." }
      });
    }
    return (
      <>
       <div className=" m-2 p-2 d-inline-flex text-center">
       <div className="card d-inline-flex " style={{ width: "16rem", height:"35%", backgroundColor:"#e5ffe5"}}>
     <img src={titals.img} className="rounded-circle m-5 mb-2" style={{ height:"10rem"}} alt={titals.name} />
     <div className="card-body">
       <h5 className="card-title">{titals.name}</h5>
       <p className="card-text">{titals.text}</p>
       <button type="button"  className="btn btn-dark"  onClick={updateProfile}>Next</button>
     </div>
   </div>
   </div>
      </>
    )
  }