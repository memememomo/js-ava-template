export default class {
    constructor(name) {
        this.name = name;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    walk() {
        console.log(this._name + 'が歩いています');
    }
}
