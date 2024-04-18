let LD = 0
let IRL = 0
let IRR = 0
let USS = 0
function Left () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 45)
    LD = 0
}
function Hard_Right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 170)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    LD = 1
}
function Hard_Left () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 180)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    LD = 0
}
function Right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 45)
    LD = 1
}
function Update_Sensor () {
    IRL = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    IRR = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    USS = maqueen.Ultrasonic(PingUnit.Centimeters)
}
function Avoid () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}
loops.everyInterval(50, function () {
    Update_Sensor()
})
basic.forever(function () {
    if (USS < 20) {
        for (let index = 0; index < 3; index++) {
            basic.pause(100)
            Update_Sensor()
        }
        Avoid()
    } else if (IRL == 0 && IRR == 0) {
        for (let index = 0; index < 3; index++) {
            basic.pause(100)
            Update_Sensor()
        }
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (IRL == 1 && IRR == 1) {
        if (LD == 0) {
            Hard_Left()
        } else if (LD == 1) {
            Hard_Right()
        }
    } else if (IRL == 1) {
        Right()
    } else if (IRR == 1) {
        Left()
    } else {
    	
    }
})
