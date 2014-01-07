function Flattenr(objects, separator) {
	var x;
	var flatten = {length: 0};
	var that = this;
	
	if (typeof separator === 'undefined') {
		separator = '.';
	} else {
		separator = separator.toString();
	}
	
	var flat = function (current, name, object) {
		var x, f = {}, y;
		for (x in object) {
			f[name + separator + x] = object[x];
		}
	
		for (y in f) {
			if (typeof f[y] !== 'object') {
				current[y] = f[y];
				current.length++;
			} else {
				current = flat(current, y, f[y]);
			}
		}
		return current;
	};
	
	var init = function () {
		for (var x in objects) {
			if (typeof objects[x] !== 'object') {
				flatten[x] = objects[x];
				flatten.length++;
			} else {
				flatten = flat(flatten, x, objects[x]);
			}
		}
	};
	
	this.q = function (criteria) {
		var qResult = {length: 0}, i;
		if (typeof criteria !== 'object') {
			criteria = new RegExp(criteria, 'g');
			for (i in flatten) {
				if (i.match(criteria) || flatten[i].toString().match(criteria)) {
					qResult[i] = flatten[i];
					qResult.length++;
				}
			}
			return qResult;
		} else {
            for (var c in criteria) {
                regexpCriteria = new RegExp(criteria[c], 'g');
                c = new RegExp(c, 'g');
                //console.log(c);
                //console.log(regexpCriteria);
                for (i in flatten) {
                    if (i.match(c) && flatten[i].toString().match(regexpCriteria)) {
                        qResult[i] = flatten[i];
                        qResult.length++;
                    }
                }
			}
            return qResult;
		}
	};
	
	this.get = function (item) {
		if (typeof item === 'undefined') {
			return flatten;
		} else {
			return (typeof flatten[item] === 'undefined') ? null : flatten[item];
		}
	};
	
	this.toString = function () {
		return JSON.stringify(this.flatten);
	};
	
	init();
    return this;
}

module.exports = Flattenr;