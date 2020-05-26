// TODO: Your code goes here

function Vehicle(color, engine) {
    this._color = color;
    this._engine = engine;
    this._maxSpeed = 70;
    this.max_current_speed;
    this._currentSpeed = 0;
    this._model = 'unknown model';
    this._workengine = false;
    this._limit_engine = false;
    this.upgradeEngine = function (newEngine, maxSpeed) {
        if (!this._workengine) {
            this._engine = newEngine;
            this._maxSpeed = maxSpeed;
        }
    }
    this.getInfo = function () {
        return { engine: this._engine, color: this._color, maxSpeed: this._maxSpeed, model: this._model };
    }
    this.log_after_stop = function () {
        console.log(`Vehicle is stopped. Maximum speed during the drive was ${this.max_current_speed}`);
    }
    this.log_after_start = function () {
        return
    }
    this.engine_work_limit = function () {
        return
    }
    this.drive = function () {
        if (!this._workengine) {
            this.log_after_start();
            this._workengine = true;
            clearInterval(this.sp)
            this.start = setInterval(() => {
                this._currentSpeed += 20;
                this.max_current_speed = this._currentSpeed;
                console.log(this._currentSpeed);
                if (this._currentSpeed > this._maxSpeed) {
                    console.log('speed is too high, SLOW DOWN!');
                    if (this._limit_engine) {
                        if (this._currentSpeed >= this._maxSpeed + 30) {
                            this.stop();
                            console.log('Engine overheating');
                        }
                    }
                }
            }, 2000);
        } else {
            console.log('Already driving');
        }
    }
    this.stop = function () {
        if (this._workengine) {
            this._workengine = false;
            clearInterval(this.start);
            this.sp = setInterval(() => {
                this._currentSpeed -= 20;
                console.log(this._currentSpeed);
                if (this._currentSpeed <= 0) {
                    clearInterval(this.sp);
                    this.log_after_stop();
                }
            }, 2000);
        } else {
            console.log('Already slows down');
        }
    }
}

function Car(model, color, eng) {
    Vehicle.call(this, color, eng);
    this._maxSpeed = 80;
    this._model = model;
    this.log_after_stop = function () {
        console.log(`Car ${this._model} is stopped. Maximum speed during the drive ${this.max_current_speed}`);

    }
    this.changeColor = function (color) {
        console.log(this._color);
        if (this._color !== color) {
            this._color = color;
        } else {
            console.log('color is all ready');
        }
    }
}
function Motorcycle(model, color, eng) {
    Vehicle.call(this, color, eng);
    this._maxSpeed = 90;
    this._model = model;
    this._limit_engine = true;
    this.log_after_start = function () {
        console.log('Let’s drive');
    }
    this.log_after_stop = function () {
        console.log(`Motorcycle ${this._model} is stopped. Good drive`);

    }

}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;
