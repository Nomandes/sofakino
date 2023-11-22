const SofaAngles = {
    showBack: "180deg",
    showFront:"0deg"
}
const BookingState = {
    Active: "active",
    Deactive: "deactive"
}
const SFKBooking = {
    CURRENT_STATE: BookingState.Deactive,
    sofa: undefined,
    modelViewer: undefined,
    front: undefined,
    overlay: undefined,
    endScreen: undefined,
    confirmationScreen: undefined,
    seatBookedIcon: undefined,
    init: function(){
        this.sofa = document.getElementById("sofa");
        this.modelViewer = document.getElementById("sofa-model");
        this.front = document.getElementById("sofa-front");
        this.overlay = document.getElementById("overlay");
        this.endScreen = document.getElementById("booking-end-screen");
        this.confirmationScreen = document.getElementById("booking-confirmation-screen");
        this.seatBookedIcon = document.getElementById("seat-booked-icon").innerHTML;
    },
    handleBookingClick: function(event,button){
        event.stopPropagation();
        console.log("Booking clicked");
        
        //Extract role for different button types
        if(button.id == "button-booking-abort"){
            SFKBooking.closeOverlay();
        }else if(button.id == "button-booking-confirm"){
            //Booking complete, send confirmation mail and reserve seats in backend
            SFKBooking.showBookingEndScreen();
        }else if(button.id == "button-booking-seats"){
            if(this.CURRENT_STATE == BookingState.Active){
                SFKBooking.deactivateBooking(button);
            }else if(this.CURRENT_STATE == BookingState.Deactive){
                SFKBooking.activateBooking(button);
            }
        }
    },
    handleSeatClick: function(event,seat){
        event.stopPropagation();
        console.log(seat);
        SFKBooking.openOverlay();
    },
    activateBooking: function(button){
        this.CURRENT_STATE = BookingState.Active;
        button.innerHTML = "Zurück";
        SFKBooking.orbitToFront();
        fetch('./seat_status.json')
        .then((response) => response.json())
        .then((json) => SFKBooking.showAvailableSeats(json));
    },
    deactivateBooking: function(button){
        this.CURRENT_STATE = BookingState.Deactive;
        SFKBooking.orbitToBack();
        button.innerHTML = "Ticket buchen";
    },
    orbitToFront: function(){
        const orbit = this.modelViewer.getCameraOrbit();
        orbit.theta = SofaAngles.showFront;
        this.modelViewer.cameraOrbit = orbit.toString();
    },
    orbitToBack: function(){
        const orbit = this.modelViewer.getCameraOrbit();
        orbit.theta = SofaAngles.showBack;
        this.modelViewer.cameraOrbit = orbit.toString();
    },
    showAvailableSeats: function(seatsJson){
        this.front.classList.remove("hidden");
        console.log(seatsJson);
        for(const seatIndex in seatsJson.seats){
            const seat = seatsJson.seats[seatIndex];
            if(seat.status == "available"){
                SFKBooking.markSeatAvailable(seat.id);
            }else if(seat.status == "booked"){
                SFKBooking.markSeatBooked(seat.id);
            }
        }
    },
    markSeatAvailable(seatID){
        console.log(`Available Seat at ${seatID}`);
    },
    markSeatBooked(seatID){
        console.log(`Booked Seat at ${seatID}`);
        let seat = document.getElementById(seatID);
        if(seat != undefined){
            seat.innerHTML = this.seatBookedIcon;
            seat.classList.add("booked");
        }
    },
    openOverlay(){
        this.overlay.classList.remove("hidden");
    },
    closeOverlay(){
        this.overlay.classList.add("hidden");
    },
    showBookingEndScreen(){
        this.confirmationScreen.classList.add("hidden");
        this.endScreen.classList.remove("hidden");
    }
}
SFKBooking.init();