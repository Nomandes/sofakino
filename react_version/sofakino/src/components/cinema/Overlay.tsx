import './Overlay.css';

import { IonIcon } from "@ionic/react";

export default function Overlay() {
  return (
    <div id="overlay" className="hidden">
      <div id="booking-confirmation-screen">
        <h2 className="confirmation-heading">
          Sonntag, 26.08.2023, Die Frau im Nebel
        </h2>
        <p className="confirmation-tickets">
            <IonIcon icon="ticket-outline" /> 1 Ticket
        </p>
        <button
          id="button-booking-abort"
          className="button-pushable"
          role="button"
        //   onclick="SFKBooking.handleBookingClick(event,this)"
        >
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text">Abbrechen</span>
        </button>
        <button
          id="button-booking-confirm"
          className="button-pushable"
          role="button"
        //   onclick="SFKBooking.handleBookingClick(event,this)"
        >
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text">Bestätigen</span>
        </button>
      </div>
      <div id="booking-end-screen" className="hidden">
        <span className="end-heading">
          1 Ticket gebucht für "Die Frau im Nebel" am 26.08.2023, 19 Uhr
        </span>
        <span className="end-calendar-entry">
            <IonIcon icon="calendar-number-outline" />In Kalendar
          eintragen
        </span>
        <span className="end-apple-wallet">
        <IonIcon icon="wallet-outline" />Ticket in Wallet speichern
        </span>
      </div>
    </div>
  );
}
