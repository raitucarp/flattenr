// flat an object to be more save use
function flat(current, name, object, separator) {
    var data = {}
    // iterate object
    for (var x in object) {
        var key = [name, x].join(separator)
        data[key] = object[x]
    }

    // iterate through data
    for (var i in data) {
        if (typeof data[i] !== "object") {
            current[i] = data[i]
        } else {
            current = flat(current, i, data[i], separator)
        }
    }

    // returning current value
    return current
}

function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}

// matchPattern find pattern in data
var matchPattern = function(data, pattern) {
    var result  = {}
    // iterate thorough data
    for (var i in data) {
        // create context data
        var _data = data[i]

        // if key match with pattern
        if (i.match(pattern)) {
            // add matched data
            result[i] = _data
        }

        // if value match with pattern
        if (_data.toString().match(pattern)) {
            result[i] = _data
        }
    }
    // result
    return result
}


// Flattenr is the main function/class
function Flattenr(data, separator) {
    this.separator = separator || "."
    this.data = {}
    this.original_data = data
    // initialization
    this.do()

    return this
}

Flattenr.prototype.do = function () {
    for(var key in this.original_data) {
        if (typeof this.original_data[key] !== "object") {
            this.data[key] = this.original_data[key]
        } else {
            this.data = flat(this.data, key, this.original_data[key], this.separator)
        }
    }
}

// change separator to a way
Flattenr.prototype.changeSeparator = function (separator) {
    this.separator = separator
    this.do()
}

// get data based on path
Flattenr.prototype.get = function (path) {
    if (typeof path === "undefined") {
        return this.data
    }
    if (typeof this.data[path] === "undefined") {
        return {}
    }

    return this.data[path]
}

// get all object
Flattenr.prototype.getAll = function () {
    return this.data
}

// find implements search element by its key
Flattenr.prototype.find = function (query) {
    var result = {}
    var data = this.data



    // if query is a string
    if (typeof query === "string") {
        var pattern = new RegExp(escapeRegExp(query), "gi")
        result = matchPattern(data, pattern)
        return new QueryResult(result)
    }

    // if type is regexp
    if (query instanceof RegExp) {
        result = matchPattern(data, query)
        return new QueryResult(result)
    }

    // if type is a object
    for (var x in query) {
        var pattern1 =  new RegExp(escapeRegExp(query[x]), "gi")
        var pattern2 = new RegExp(escapeRegExp(x), "gi")

        // iterate through data
        for(var i in data) {
            // if key match with pattern2 and pattern1
            // then add to result
            if (i.match(pattern2) && data[i].toString().match(pattern1)) {
                result[i] = data[i]
            }
        }
    }

    // returning the result
    return new QueryResult(result)
}

// toString implements stringify object by using JSON.stringify
Flattenr.prototype.toString = function () {
    return JSON.stringify(this.data)
}

// get length of object
Flattenr.prototype.length = function () {
    return Object.keys(this.data).length
}

// FlattenData ensable to manipulate the result
function QueryResult(data) {
    this.data = data
    return this
}

QueryResult.prototype.get = function () {
    return this.data
}

// get length of data
QueryResult.prototype.length = function () {
    return Object.keys(this.data).length
}

module.exports = Flattenr
