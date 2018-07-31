import { expect } from "chai";
import "mocha";
import Flattenr from "../Flattenr";
import dummy = require("./data/dummy.json");

describe("Dummy data", () => {
  const separator = "/";
  const flatData = new Flattenr(dummy, separator);

  it("should instance of Flattenr and has same separator", () => {
    expect(flatData).instanceof(Flattenr);
    expect(flatData.separator).to.be.equal(separator);
  });

  it("should contain 6/age with value 29", () => {
    expect(flatData.get("6/age")).to.be.equal(29);
  });

  it("should capable to find with string, regexp and object", () => {
    const twoThousandsBalance = flatData.find({ balance: "$2," });

    expect(Object.keys(twoThousandsBalance).length).to.be.equal(4);
  });
});
