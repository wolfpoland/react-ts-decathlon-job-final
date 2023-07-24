export class Action {
  readonly type: string;

  constructor(type: string, public payload = null) {
    this.type = type;

  }

  plainAction(): any {
    const motherAction = {
      type: this.type,
      payload: this.payload
    }

    return (motherAction)

  }
}