let LD = 0
let IRL = 0
let IRR = 0
let USS = 0
let Line_Check = 0
let Count = 0
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
    Line_Check = 0
    if (LD == 0) {
        if (Line_Check == 0) {
            while (USS < 20) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 90)
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
                }
                basic.pause(100)
            }
        }
        if (Line_Check == 0) {
            for (let index = 0; index < 10; index++) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
                }
                basic.pause(100)
            }
        }
        if (Line_Check == 0) {
            for (let index = 0; index < 5; index++) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 90)
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
                }
                basic.pause(100)
            }
        }
        if (Line_Check == 0) {
            for (let index = 0; index < 20; index++) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
                    basic.pause(2000)
                }
                basic.pause(100)
            }
        }
        if (Line_Check == 0) {
            for (let index = 0; index < 5; index++) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 90)
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
                }
                basic.pause(100)
            }
        }
        if (Line_Check == 0) {
            for (let index = 0; index < 10; index++) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
                }
                basic.pause(100)
            }
        }
    } else if (LD == 1) {
        while (USS < 20) {
            Update_Sensor()
            if (IRL == 0 || IRR == 0) {
                Line_Check = 1
                break;
            } else {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 90)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            }
            basic.pause(100)
        }
        if (Line_Check == 0) {
            for (let index = 0; index < 10; index++) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
                }
                basic.pause(100)
            }
        }
        if (Line_Check == 0) {
            for (let index = 0; index < 5; index++) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 90)
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
                }
                basic.pause(100)
            }
        }
        if (Line_Check == 0) {
            for (let index = 0; index < 20; index++) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
                    basic.pause(2000)
                }
                basic.pause(100)
            }
        }
        if (Line_Check == 0) {
            for (let index = 0; index < 5; index++) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 90)
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
                }
                basic.pause(100)
            }
        }
        if (Line_Check == 0) {
            for (let index = 0; index < 10; index++) {
                Update_Sensor()
                if (IRL == 0 || IRR == 0) {
                    Line_Check = 1
                    break;
                } else {
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
                }
                basic.pause(100)
            }
        }
    }
}
basic.forever(function () {
    Update_Sensor()
    if (USS < 25) {
        for (let index = 0; index < 2; index++) {
            basic.pause(100)
            Update_Sensor()
        }
        Avoid()
    } else if (Count > 75) {
        Update_Sensor()
        if (randint(0, 1) == 0) {
            LD = 0
        } else {
            LD = 1
        }
        Count = 0
    } else if (IRL == 0 && IRR == 0) {
        for (let index = 0; index < 3; index++) {
            basic.pause(100)
            Update_Sensor()
        }
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (IRL == 1 && IRR == 1) {
        if (LD == 0) {
            Hard_Left()
            Count += 1
        } else if (LD == 1) {
            Hard_Right()
            Count += 1
        }
    } else if (IRL == 1) {
        Right()
        Count = 0
    } else if (IRR == 1) {
        Left()
        Count = 0
    }
})
loops.everyInterval(100, function () {
    Update_Sensor()
})
