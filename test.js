import test from "ava"

const dummy1 = require("./test_data/data1.json")
const amazonData = require("./test_data/amazon.json")
const flattenr = require("./index")

test("Flatten a dummy data", t => {
    var f = new flattenr(dummy1, "/")
    var twoThousandsBalance = f.find({balance: "$2,"})

    t.is(true, f instanceof flattenr, "Failed to create a flattenr data")
    t.is(f.separator, "/", "separator is not equal")
    t.is(twoThousandsBalance.length(), 4)
    t.pass()
})

test("Flatten an Amazon Product data", t => {
    var f = new flattenr(amazonData, ".")
    var asin = f.find("Item.0.ASIN.0")

    t.is(true, f instanceof flattenr, "Failed to create a flattenr data")
    t.is(f.separator, ".", "separator is not equal")
    t.is(asin.length(), 1)
    t.pass()
})

test("Simple data", t=> {
    var data = {
        "today": [
            "a", "b", "c", "d"
        ],
        "tomorrow": [
            "e", "f", "g", "h"
        ],
        "next_week": [
            "i", "j", "k", "l"
        ]
    }
    var f = new flattenr(data)
    t.is(f.separator, ".")
    t.pass()
})
