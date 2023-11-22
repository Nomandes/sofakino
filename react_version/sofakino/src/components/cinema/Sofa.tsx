import { IonIcon } from "@ionic/react";
import { ModelViewerElement } from "@google/model-viewer";
// import sofa from '../../assets/sofa_red.gltf';

export default function Sofa() {
  return (
    <div id="sofa">
      <model-viewer
        id="sofa-model"
        src='../../assets/sofa_red.gltf'
        shadow-intensity="5"
        disable-zoom
        camera-orbit="180deg 75deg 1.34m"
        camera-target="auto 5cm auto"
      >
        <div className="sofa-back">
          <button
            id="button-booking-seats"
            className="button-pushable"
            role="button"
            // onclick="SFKBooking.handleBookingClick(event,this)"
          >
            <span className="button-shadow"></span>
            <span className="button-edge"></span>
            <span className="button-front text">
                <IonIcon icon="ticket-outline" />Verfügbare Plätze
            </span>
          </button>
        </div>
        <div id="sofa-front" className="hidden">
          <span className="seats">
            <span
              className="seat"
              id="seat-1"
            //   onclick="SFKBooking.handleSeatClick(event,this)"
            >
                <IonIcon icon="person-add-outline" />
            </span>
            <span
              className="seat"
              id="seat-2"
            //   onclick="SFKBooking.handleSeatClick(event,this)"
            >
                <IonIcon icon="person-add-outline" />
            </span>
            <span
              className="seat"
              id="seat-3"
            //   onclick="SFKBooking.handleSeatClick(event,this)"
            >
                <IonIcon icon="person-add-outline" />
            </span>
          </span>
          <span className="hidden" id="seat-booked-icon">
            <IonIcon icon="person-outline" />
          </span>
        </div>
      </model-viewer>
    </div>
  );
}
