import { FlatJSON, JSON } from "./Flattenr";

export type SearchQuery = string | RegExp | JSON;

interface ISearch {
  query: SearchQuery;
  result: FlatJSON;
  size(): number;
}

abstract class Search<T> implements ISearch {
  protected targetData: JSON;
  query: T;

  constructor(searchQuery: T, targetData: JSON) {
    this.query = searchQuery;
    this.targetData = targetData;
  }

  protected escapeRegExp(pattern: string): string {
    return pattern.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

  protected matchPattern(data: any, pattern: RegExp): FlatJSON {
    let result: FlatJSON = {};

    for (let key in data) {
      const value = data[key];

      if (key.match(pattern)) result[key] = value;
      if (value.toString().match(pattern)) result[key] = value;
    }

    return result;
  }

  size(): number {
    return Object.keys(this.result).length;
  }

  result: FlatJSON = {};
  protected abstract doSearch(): void;
}

export class FindByString extends Search<string> {
  constructor(searchQuery: string, targetData: JSON) {
    super(searchQuery, targetData);
    this.doSearch();
  }

  doSearch() {
    const pattern = super.escapeRegExp(this.query);
    const reQuery = new RegExp(pattern, "gi");
    this.result = super.matchPattern(this.targetData, reQuery);
  }
}

export class FindByRegExp extends Search<RegExp> {
  constructor(searchQuery: RegExp, targetData: JSON) {
    super(searchQuery, targetData);
    this.doSearch();
  }

  doSearch() {
    this.result = super.matchPattern(this.targetData, this.query);
  }
}

export class FindByObject extends Search<JSON> {
  constructor(searchQuery: JSON, targetData: JSON) {
    super(searchQuery, targetData);
    this.doSearch();
  }

  doSearch() {
    for (let key in this.query) {
      const value = this.query[key];

      const patternFromKey = new RegExp(super.escapeRegExp(key), "gi");
      const patternFromValue = new RegExp(super.escapeRegExp(value), "gi");

      for (let key in this.targetData) {
        this.matchWithPatterns(patternFromKey, patternFromValue);
      }
    }
  }

  private matchWithPatterns(...pattern: RegExp[]) {
    for (let key in this.targetData) {
      const isMatchWithKey = key.match(pattern[0]);
      const isMatchWithValue = this.targetData[key]
        .toString()
        .match(pattern[1]);

      if (isMatchWithKey && isMatchWithValue)
        this.result[key] = this.targetData[key];
    }
  }
}

export class FindFactory {
  constructor(private query: SearchQuery, private targetData: JSON) {}

  getFinder(): ISearch | null {
    if (typeof this.query === "string")
      return new FindByString(this.query, this.targetData);

    if (this.query instanceof RegExp)
      return new FindByRegExp(this.query, this.targetData);

    if (typeof this.query === "object")
      return new FindByObject(this.query, this.targetData);

    return null;
  }
}
