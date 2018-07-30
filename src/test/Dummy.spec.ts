import { expect } from "chai";
import "mocha";
import Flattenr from "../Flattenr";
import dummy = require("./data/dummy.json");

describe("Dummy data", () => {
  const flatData = new Flattenr(dummy, "/");

  it("should instance of Flattenr", () =>
    expect(flatData).instanceof(Flattenr));

  it("should contain 6/age with value 29", () => {
    expect(flatData.get("6/age")).to.be.equal(29);
  });
});
