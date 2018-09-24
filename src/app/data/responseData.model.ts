export class ResponseData {
  private _status: string;

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  private _data: string;

  get data(): string {
    return this._data;
  }

  set data(value: string) {
    this._data = value;
  }

  private _message: string;

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
