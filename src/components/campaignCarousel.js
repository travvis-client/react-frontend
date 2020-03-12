import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
import "../CSS/carousel.css";

export default function CampaignCarousel(props) {
  const [projectPage, setProjectPage] = useState({ start: 0 });
  const [pageButton, setPageButton] = useState({ down: null, up: null });
  const [fadeIn, setFadeIn] = useState(true);
  const [changeCount, setChangeCount] = useState({ set: false });

  console.log(props.campaigns);

  const campaignData = props.campaigns;
  useEffect(() => {
    if (
      campaignData.slice(
        projectPage.start + changeCount.num,
        projectPage.end + changeCount.num
      ).length === 0
    ) {
      setPageButton({ down: null, up: false });
    } else if (projectPage.start === 0) {
      setPageButton({ down: false, up: true });
    } else {
      setPageButton({ down: null, up: true });
    }
    // setFadeIn(false)
  }, [projectPage]);
  useEffect(() => {
    const screen = window.innerWidth;
    if (!changeCount.set) {
      if (screen > 1500) {
        setChangeCount({ set: true, num: 4 });
        setProjectPage({ start: 0, end: 4 });
      }
      if (1200 < screen && screen < 1500) {
        setChangeCount({ set: true, num: 3 });
        setProjectPage({ start: 0, end: 3 });
      }
      if (760 < screen && screen < 1200) {
        setChangeCount({ set: true, num: 2 });
        setProjectPage({ start: 0, end: 2 });
      }
      if (screen < 760) {
        setChangeCount({ set: true, num: 1 });
        setProjectPage({ start: 0, end: 1 });
      } 
    }
  }, [window.innerWidth]);

  const pageHandler = (choice, number) => {
    // setFadeIn(false)
    const newStart = projectPage.start + choice;
    const newEnd = projectPage.end + choice;
    setProjectPage({ start: newStart, end: newEnd });
    setFadeIn(true);
  };

  console.log(fadeIn);
  return (
    <div>
      <div className="cards-container">
        <button
          className={`carouselButton ${pageButton.down === false ? "hideButton" : ""}`}
          variant="contained"
          onClick={() => {
            pageHandler(-changeCount.num, -1);
          }}
          disabled={pageButton.down === false ? "true" : ""}
        >
          <NavigateBeforeIcon styles={{ margin: "auto" }} />
        </button>
        <div>
          
        </div>
        {!!changeCount.set &&
          campaignData &&
          campaignData
            .slice(projectPage.start, projectPage.end)
            .map(campaign => {
              // console.log(campaign.file_link);
              return (
                <div
                  className={`card ${!!fadeIn ? "fadeIn" : ""}`}
                  onAnimationEnd={() => setFadeIn(false)}
                  style={{
                    backgroundImage: `url(${campaign.file_link})`,
                    backgroundSize: "cover"
                  }}
                >
                  <div className="cardContent">
                    <div className="cardContentTop">
                      <div className="rating">
                        {" "}
                        <StarIcon
                          style={{
                            color: "gold",
                            fontSize: "15px",
                            margin: "0"
                          }}
                        />{" "}
                        <p className="ratingText">4.5</p>
                      </div>
                      <button className="favoritesButton">
                        <FavoriteBorderIcon
                          style={{
                            color: "red",
                            fontSize: "20px",
                            margin: "0"
                          }}
                        />
                      </button>
                    </div>
                    <div className="cardContentButtom">
                      <div className="cardBottomText">
                        <p className="infoLabel">Marca</p>{" "}
                        <p className="cardCompanyName">
                          {campaign.company_name}
                        </p>
                      </div>
                      <p className="cardBottomText">
                        <p className="infoLabel">Alcance</p>{" "}
                        <p className="cardReachCount">
                          {campaign.people_per_day}
                        </p>
                        <Link className="cardViewButton">Ver</Link>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        <button
          className={`carouselButton ${pageButton.up === false ? "hideButton" : ""}`}
          variant="contained"
          onClick={() => {
            pageHandler(changeCount.num, 1);
          }}
          disabled={pageButton.up === false ? "true" : ""}
        >
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
}
