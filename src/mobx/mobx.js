import { observable, action } from "mobx";

class Mobx {
    @observable number;

    constructor() {
        this.number = 0;
    }

    @action
    addNumber = number => {
        this.number = number;
    }
}

const MyMobx = new Mobx();
export { MyMobx };

