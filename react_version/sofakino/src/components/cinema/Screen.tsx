import { IonIcon } from "@ionic/react";

export default function Screen() {
  return (
    <div
      id="screen"
      //   onMouseOver="SFKScreen.handleMouseEnter(this)"
      //   onmouseleave="SFKScreen.handleMouseLeave(this)"
      //   onclick="SFKScreen.handleClick(event)"
    >
      <span className="curtain-container">
        <span id="curtain-left" className="curtain">
          <h3 className="movie-title">Die Frau im Nebel</h3>
          <img
            className="movie-poster"
            alt="Die Frau im Nebel Poster"
            src="https://de.web.img3.acsta.net/r_1920_1080/pictures/22/12/13/14/59/5568638.jpg"
          />
        </span>
        <span id="curtain-right" className="curtain">
          <p className="movie-description">
            From a mountain peak in South Korea, a man plummets to his death.
            Did he jump, or was he pushed? When detective Hae-joon arrives on
            the scene, he begins to suspect the dead man's wife Seo-rae. But as
            he digs deeper into the investigation, he finds himself trapped in a
            web of deception and desire.
          </p>
          <span className="movie-infos">
            <span className="movie-genre">
              <IonIcon icon="film-outline" />
              Mystery, Neo-Noir
            </span>
            <span className="movie-runtime">
              <IonIcon icon="hourglass-outline" />
              139 Minutes
            </span>
            <span className="movie-release">
              <IonIcon icon="calendar-outline" />
              2022
            </span>
            <span className="movie-language">
              <IonIcon icon="earth-outline" />
              Korean(German Sub)
            </span>
          </span>
        </span>
      </span>
      <iframe
        className="youtube-iframe"
        src="https://www.youtube-nocookie.com/embed/WfOzFiNa2uw"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>
    </div>
  );
}
