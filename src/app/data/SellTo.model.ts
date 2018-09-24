export class SellTo {
  constructor(email: string, name: string, address: string, company: string, phone: string) {
    this._email = email;
    this._name = name;
    this._address = address;
    this._company = company;
    this._phone = phone;
  }

  private _email: string;

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _address: string;

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  private _company: string;

  get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
  }

  private _phone: string;

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }
}
