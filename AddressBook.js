// Welcome to address book problem
// UC 1 : Ability to create contact class and its object with certain fields
class Contact {
    // constructor
    // Spread operator used to provide multiple dynamic parameters to constructor
    constructor(...params) {
            this.firstName = params[0];
            this.lastName = params[1];
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
            this.zip = params[5];
            this.phoneNo = params[6];
            this.email = params[7];
        }
        //getter and setter for firstName
    get firstName() { return this._firstName; }
    set firstName(firstName) { this._firstName = firstName; }
        //getter and setter for lastName
    get lastName() { return this._lastName; }
    set lastName(lastName) { this._lastName = lastName; }
        //getter and setter for address
    get address() { return this._address; }
    set address(address) { this._address = address; }
        //getter and setter for city
    get city() { return this._city; }
    set city(city) { this._city = city; }
        //getter and setter for state
    get state() { return this._state; }
    set state(state) { this._state = state; }
        //getter and setter for zip
    get zip() { return this._zip; }
    set zip(zip) { this._zip = zip; }
        // getter and setter for PhoneNo
    get phoneNo() { return this._phoneNo; }
    set phoneNo(phoneNo) { this._phoneNo = phoneNo; }
        // getter and setter for email
    get email() { return this._email; }
    set email(email) { this._email = email; }
        // overriding toString() method
    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address +
            ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone No : " + this.phoneNo + ", Email : " + this.email;
    }
}
try {
    let contact = new Contact("Bharat", "Weasly", "UN", "LosAngles", "LA", "0127654", "0168898989898", "weasly@gmail.com");
    console.log(contact.toString());
} catch (e) {
    console.error(e)
}