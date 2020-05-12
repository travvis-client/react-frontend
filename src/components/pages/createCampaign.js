import React, { useState, useEffect } from "react";
import "../../CSS/createcampaignpage.css";

export default function CreateCampaign() {
  const [options, setOptions] = useState({
    reach: 0,
    days: 0,
    area: null,
    content: null
  });
  console.log(options);

  const handleChange = e => {
    setOptions({
      ...options,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="createCampaignContainer">
      <div className="leftContainerContent">
        <div className="leftContainerTopContent">top</div>
        <div className="ticketContainer">
          <p className="ticketTitle">Seleccione el alcance.</p>
          <div className="ticketContent">
            <div className="ticketNumber">1</div>
            <div className="ticket">
              <div className="ticketleftcontent">
                Personas alcanzadas por día
                <br></br>
                <div className="ticketCountOptions">
                  <div className="ticketCountOptionsLeft">
                    <div className="CountOptionLeft">
                      {" "}
                      150{" "}
                      <input
                        type="radio"
                        onChange={handleChange}
                        value="150"
                        name="reach"
                      />
                    </div>
                    <div className="CountOptionLeft">
                      {" "}
                      250{" "}
                      <input
                        type="radio"
                        onChange={handleChange}
                        value="250"
                        name="reach"
                      />
                    </div>
                    <div className="CountOptionLeft">
                      {" "}
                      500{" "}
                      <input
                        type="radio"
                        onChange={handleChange}
                        value="500"
                        name="reach"
                      />
                    </div>
                  </div>
                  <div className="ticketCountOptionsright">
                    <div className="CountOptionRight">
                      1000
                      <input
                        type="radio"
                        onChange={handleChange}
                        value="1000"
                        name="reach"
                        styles={{ background: "blue" }}
                      />
                    </div>
                    <div className="CountOptionRight">
                      7000{" "}
                      <input
                        type="radio"
                        onChange={handleChange}
                        value="7000"
                        name="reach"
                      />
                    </div>
                    <div className="CountOptionRight">
                      10000{" "}
                      <input
                        type="radio"
                        onChange={handleChange}
                        value="10000"
                        name="reach"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <br className="ticketbordercontainer" /> */}

              <div className="ticketrightcontent">
                <div style={{ borderLeft: "2px dashed", height: "100%" }}>
                  {options.reach}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------- */}
        <div className="ticketContainer">
          <p className="ticketTitle">Seleccione la duración.</p>
          <div className="ticketContent">
            <div className="ticketNumber">2</div>
            <div className="ticket">
              <div className="ticketleftcontent">
                Duración de la campaña en días
              </div>
              {/* <div className="ticketbordercontainer">
                <div className="ticketborder">

                  </div>
              </div> */}
              <div className="ticketrightcontent">
                <div style={{ borderLeft: "2px dashed", height: "100%" }}>
                  right
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------------------- */}
        <div className="ticketContainer">
          <p className="ticketTitle">
            Seleccione el área geográfica y zona de interés.
          </p>
          <div className="ticketContent">
            <div className="ticketNumber">3</div>
            <div className="ticket">
              <div className="ticketleftcontent"></div>
              <div className="ticketbordercontainer"></div>
              <div className="ticketrightcontent">right</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightContainerContent">new post</div>
    </div>
  );
}
