import { expect } from "chai";
import "mocha";
import Flattenr from "../Flattenr";
import dummy = require("./data/amazon.json");

describe("Amazon Advertising Dummy Data", () => {
  const flatData = new Flattenr(dummy);

  it("should find ASIN", () => {
    const asin = flatData.find("Item.0.ASIN.0");

    expect(flatData).to.be.instanceof(Flattenr);
    expect(flatData.separator).to.be.equal(".");
    expect(Object.keys(asin).length).to.be.equal(1);
    expect(asin["ItemLookupResponse.Items.0.Item.0.ASIN.0"]).to.be.equal(
      "0679722769"
    );
  });
});
