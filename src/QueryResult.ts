import { FlatJSON } from "./Flattenr";

export default class Query<T> {
  private result: FlatJSON;
  constructor(keystring: string, data: any) {
    const pattern = this.escapeRegExp(keystring);
    this.result = this.matchPattern(data, pattern);
  }

  private escapeRegExp(pattern: string): RegExp {
    return new RegExp(
      pattern.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    );
  }

  private matchPattern(data: any, pattern: RegExp): FlatJSON {
    let result: FlatJSON = {};

    for (let key in data) {
      const value = data[key];

      if (key.match(pattern)) result[key] = value;
      if (value.toString().match(pattern)) result[key] = value;
    }

    return result;
  }

  size() {
    return this.result.length;
  }

  get(): FlatJSON {
    return this.result;
  }
}
