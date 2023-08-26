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
        this.CURRENT_STATE = ScreenState.Hovering;
        console.log(`Screen was ${this.CURRENT_STATE}`);
        this.leftCurtain.classList.add("peaking");
        this.rightCurtain.classList.add("peaking");
        this.sofa.classList.add("retracted");
    },
    handleMouseLeave: function(){
        this.CURRENT_STATE = ScreenState.Initial;
        console.log(`Screen was ${this.CURRENT_STATE}`);
        this.leftCurtain.classList.remove("peaking");
        this.rightCurtain.classList.remove("peaking");
        this.sofa.classList.remove("retracted");
    },
    handleClick: function(){
        this.CURRENT_STATE = ScreenState.Clicked;
        console.log(`Screen was ${this.CURRENT_STATE}`);
        this.leftCurtain.classList.add("open");
        this.rightCurtain.classList.add("open");
    }
}
SFKScreen.init();