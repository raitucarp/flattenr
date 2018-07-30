import QueryResult from "./QueryResult";

type JSONVal = string | number | boolean | null;
export interface FlatJSON {
  [key: string]: JSONVal;
}

export interface JSON {
  [key: string]: any;
}

class Flattenr {
  private originalData: JSON;
  private separator: string = ".";
  private data: Map<string, JSONVal> = new Map();
  constructor(data: JSON, separator: string = ".") {
    this.originalData = data;
    this.separator = separator;
    this.makeFlat();
  }

  private createKeyName(originalDataKey: string, keyname?: string): string {
    return keyname
      ? [keyname, originalDataKey].join(this.separator)
      : originalDataKey;
  }

  private makeFlat(originalData?: JSON, keyname?: string) {
    const sourceData = originalData ? originalData : this.originalData;

    for (let originalDataKey in sourceData) {
      const value = sourceData[originalDataKey];
      const keyname_ = this.createKeyName(originalDataKey, keyname);

      if (typeof value !== "object") {
        this.data.set(keyname_, value);
        continue;
      }

      this.makeFlat(value, keyname_);
    }
  }

  JSON(): FlatJSON {
    let data: FlatJSON = {};
    this.data.forEach((value: JSONVal, key: string) => (data[key] = value));
    return data;
  }

  toString(): string {
    return JSON.stringify(this.JSON());
  }

  setSeparator(separator: string): void {
    this.separator = separator;
  }

  size(): number {
    return this.data.size;
  }

  get(key: string): JSONVal {
    return this.data.get(key) || null;
  }

  find(query: string | RegExp): FlatJSON {
    if (typeof query === "string") QueryResult(query);

    if (query instanceof RegExp) {
      const pattern = new RegExp(escapeRegExp(query), "gi");
      result = matchPattern(data, pattern);
    }
  }
}

export default Flattenr;
