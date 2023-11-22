const ScreenState = {
    Initial: "Init",
    Hovering: "Hover",
    Clicked: "Clicked"
}
const SFKScreen = {
    CURRENT_STATE: ScreenState.Initial,
    leftCurtain: undefined,
    rightCurtain: undefined,
    screen: undefined,
    sofa: undefined,
    init: function(){
        this.leftCurtain = document.getElementById("curtain-left");
        this.rightCurtain = document.getElementById("curtain-right");
        this.screen = document.getElementById("screen");
        this.sofa = document.getElementById("sofa");
    },
    handleMouseEnter: function(){
        if(this.CURRENT_STATE == ScreenState.Clicked){
            return;
        }
        this.CURRENT_STATE = ScreenState.Hovering;
        console.log(`Screen was ${this.CURRENT_STATE}`);
        SFKScreen.peakCurtains();
    },
    handleMouseLeave: function(){
        if(this.CURRENT_STATE == ScreenState.Clicked){
            return;
        }
        this.CURRENT_STATE = ScreenState.Initial;
        console.log(`Screen was ${this.CURRENT_STATE}`);
        SFKScreen.closePeakedCurtains();
        
    },
    handleClick: function(event){
        event.stopPropagation();
        this.CURRENT_STATE = ScreenState.Clicked;
        console.log(`Screen was ${this.CURRENT_STATE}`);
        SFKScreen.openCurtains();
    },
    handleBodyClick: function(){
        console.log("body click");
        console.log(this.CURRENT_STATE);
        if(this.CURRENT_STATE == ScreenState.Clicked){
            console.log("close curtains");
            SFKScreen.closeCurtains();
            SFKScreen.closePeakedCurtains();
            this.CURRENT_STATE = ScreenState.Initial;
        }
    },
    peakCurtains: function(){
        this.leftCurtain.classList.add("peaking");
        this.rightCurtain.classList.add("peaking");
        this.sofa.classList.add("retracted");
    },
    closePeakedCurtains: function(){
        this.leftCurtain.classList.remove("peaking");
        this.rightCurtain.classList.remove("peaking");
        this.sofa.classList.remove("retracted");
    },
    openCurtains: function(){
        this.leftCurtain.classList.add("open");
        this.rightCurtain.classList.add("open");
        this.sofa.classList.add("retracted");
    },
    closeCurtains: function(){
        this.leftCurtain.classList.remove("open");
        this.rightCurtain.classList.remove("open");
        this.sofa.classList.remove("retracted");
    }
}
SFKScreen.init();