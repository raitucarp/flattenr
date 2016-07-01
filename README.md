# Introduction #

Flattenr is a utility that make a JSON data to flat map. Be more safe and readable. Change standard JSON format such this one:

```json
{
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
```

to this:
```json
{
    "today.0": "a",
    "today.1": "b",
    "today.2": "c",
    "today.3": "d",
    "tomorrow.0": "e",
    "tomorrow.1": "f",
    "tomorrow.2": "g",
    "tomorrow.3": "h",
    "next_week.0": "i",
    "next_week.1": "j",
    "next_week.2": "k",
    "next_week.3": "l"
}
```

# Why choose the flatten way? #

In my opinion, hashmap is good structured data type. When encounter with nested, and very deep JSON data flattenr will help us to create hashmap data type. I use it as a data formatter for my personal project.


# Usage #

Flattenr.js can be installed using npm or bower. To install flattenr.js via npm:

```
npm install flattenr --save
```

Suppose I have standard formatted JSON data from [http://www.json-generator.com/](http://www.json-generator.com/):

```javascript
var objects = [
    {
        "id": 0,
        "guid": "cc38bed5-5fd4-44a8-896c-8429a73fffa1",
        "isActive": false,
        "balance": "$2,781.00",
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": "Head Wade",
        "gender": "male",
        "company": "Zolarex",
        "email": "headwade@zolarex.com",
        "phone": "+1 (878) 548-3497",
        "address": "264 Quay Street, Mathews, Michigan, 7116",
        "about": "Mollit qui id nisi in excepteur fugiat. Ut tempor proident pariatur veniam exercitation elit est. Ex pariatur eu consectetur do et laborum minim.\r\n",
        "registered": "1999-05-29T18:44:25 -07:00",
        "latitude": 45.04479,
        "longitude": 114.016977,
        "tags": [
            "veniam",
            "aliqua",
            "laborum",
            "proident",
            "eu",
            "ullamco",
            "do"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Villarreal Mcpherson"
            },
            {
                "id": 1,
                "name": "Horton Rosa"
            },
            {
                "id": 2,
                "name": "Small Malone"
            }
        ],
        "randomArrayItem": "lemon"
    },
    {
        "id": 1,
        "guid": "d1fad964-63c5-4dd5-a2a1-ea306ad1967e",
        "isActive": false,
        "balance": "$2,569.00",
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": "Georgina Dawson",
        "gender": "female",
        "company": "Gallaxia",
        "email": "georginadawson@gallaxia.com",
        "phone": "+1 (862) 478-2597",
        "address": "770 Ridgewood Avenue, Makena, South Carolina, 4979",
        "about": "Occaecat ullamco dolore exercitation laborum anim. Sunt incididunt duis cillum aute consequat anim irure reprehenderit occaecat. Occaecat id magna aliqua incididunt sunt enim fugiat dolor tempor mollit irure sint id ullamco. Magna Lorem cillum et sint pariatur amet. Commodo velit ex qui elit magna.\r\n",
        "registered": "1996-01-11T11:31:11 -07:00",
        "latitude": 69.709229,
        "longitude": -141.610235,
        "tags": [
            "Lorem",
            "et",
            "aute",
            "adipisicing",
            "culpa",
            "commodo",
            "eiusmod"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Morris Rosales"
            },
            {
                "id": 1,
                "name": "Lara Reilly"
            },
            {
                "id": 2,
                "name": "Steele Fitzpatrick"
            }
        ],
        "randomArrayItem": "lemon"
    },
    {
        "id": 2,
        "guid": "57db458e-b831-465d-b8b8-9726b85611bf",
        "isActive": true,
        "balance": "$3,345.00",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Bean Stark",
        "gender": "male",
        "company": "Zilidium",
        "email": "beanstark@zilidium.com",
        "phone": "+1 (958) 506-3057",
        "address": "994 Rugby Road, Clinton, Idaho, 3249",
        "about": "Fugiat nulla ullamco est irure sunt deserunt do mollit nulla eu mollit irure. Esse do Lorem minim nostrud commodo deserunt nisi qui dolor. Id ut exercitation ipsum ut. Dolore anim excepteur nulla anim aute nostrud aliqua dolor ex consequat id tempor reprehenderit. Qui non pariatur exercitation nisi in. Ex minim sint deserunt ex qui.\r\n",
        "registered": "1997-10-04T16:58:03 -07:00",
        "latitude": -55.883112,
        "longitude": -69.844223,
        "tags": [
            "deserunt",
            "velit",
            "eiusmod",
            "ullamco",
            "Lorem",
            "enim",
            "eu"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mooney Curry"
            },
            {
                "id": 1,
                "name": "Dolores Campbell"
            },
            {
                "id": 2,
                "name": "Bridgett Young"
            }
        ],
        "randomArrayItem": "cherry"
    },
    {
        "id": 3,
        "guid": "55bfadf9-320e-4523-b7c3-f5415ed28fd5",
        "isActive": false,
        "balance": "$1,856.00",
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": "Lolita Roman",
        "gender": "female",
        "company": "Pivitol",
        "email": "lolitaroman@pivitol.com",
        "phone": "+1 (870) 480-3483",
        "address": "595 Fulton Street, Sabillasville, Colorado, 5843",
        "about": "In officia cillum nostrud mollit occaecat consequat ullamco voluptate veniam id voluptate. Nisi minim minim minim anim ut do magna eu irure occaecat ea sit velit exercitation. Nostrud incididunt cillum irure tempor ex ex officia culpa qui anim quis sunt labore aliquip. Amet minim consectetur nulla aliquip anim velit tempor ullamco aliqua velit excepteur deserunt sunt. Commodo consequat exercitation eiusmod eiusmod nisi mollit aute laborum irure laborum consectetur exercitation.\r\n",
        "registered": "2005-04-26T18:32:03 -07:00",
        "latitude": 38.922275,
        "longitude": -86.762296,
        "tags": [
            "consectetur",
            "occaecat",
            "velit",
            "amet",
            "tempor",
            "eiusmod",
            "id"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Nielsen Charles"
            },
            {
                "id": 1,
                "name": "Gabriela Jenkins"
            },
            {
                "id": 2,
                "name": "Russo Willis"
            }
        ],
        "randomArrayItem": "lemon"
    },
    {
        "id": 4,
        "guid": "487bf1fa-a837-4bb0-ace5-9af814b60b32",
        "isActive": true,
        "balance": "$3,705.00",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": "Diane Velez",
        "gender": "female",
        "company": "Ginkogene",
        "email": "dianevelez@ginkogene.com",
        "phone": "+1 (844) 582-3820",
        "address": "982 Agate Court, Nash, Hawaii, 7910",
        "about": "Minim irure nulla est elit magna occaecat dolore officia ipsum et incididunt laborum sint. Minim aliquip laborum aliqua in nulla do officia. Nulla et excepteur deserunt velit commodo ad aliqua aliqua incididunt anim irure quis ut cillum. Ut elit ad id duis aliquip ad in esse eiusmod labore. Mollit ex aute enim ad ex duis elit veniam id sunt do ipsum aute laboris. Dolor fugiat ea fugiat reprehenderit nisi incididunt Lorem laborum aute anim in voluptate.\r\n",
        "registered": "1998-05-31T14:18:09 -07:00",
        "latitude": -73.719046,
        "longitude": 131.088866,
        "tags": [
            "sint",
            "nisi",
            "sunt",
            "sint",
            "aliquip",
            "ex",
            "labore"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Kristi Stafford"
            },
            {
                "id": 1,
                "name": "Berry Holcomb"
            },
            {
                "id": 2,
                "name": "Strong Lott"
            }
        ],
        "randomArrayItem": "lemon"
    },
    {
        "id": 5,
        "guid": "907644af-19bc-42f8-aa0a-9e40abbf0bdf",
        "isActive": true,
        "balance": "$2,211.00",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Bradshaw Vazquez",
        "gender": "male",
        "company": "Recognia",
        "email": "bradshawvazquez@recognia.com",
        "phone": "+1 (998) 428-2316",
        "address": "790 Jerome Street, Tolu, Oklahoma, 5220",
        "about": "Incididunt occaecat deserunt anim fugiat nulla nulla ea anim culpa nulla veniam sunt tempor. Nostrud minim consequat dolore do elit culpa dolor occaecat. Elit irure officia tempor nostrud adipisicing aliqua magna nisi aute consequat consequat consequat. Non amet commodo voluptate labore magna ad reprehenderit velit tempor.\r\n",
        "registered": "2002-11-01T09:30:17 -07:00",
        "latitude": -84.470438,
        "longitude": -99.96739,
        "tags": [
            "duis",
            "qui",
            "aute",
            "culpa",
            "pariatur",
            "id",
            "velit"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Aileen Maddox"
            },
            {
                "id": 1,
                "name": "Garcia Mcintyre"
            },
            {
                "id": 2,
                "name": "Irwin Lambert"
            }
        ],
        "randomArrayItem": "cherry"
    },
    {
        "id": 6,
        "guid": "f6d803a2-c894-4372-90c4-64a302bc0d34",
        "isActive": true,
        "balance": "$2,306.00",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": "Obrien Cohen",
        "gender": "male",
        "company": "Hawkster",
        "email": "obriencohen@hawkster.com",
        "phone": "+1 (891) 564-3992",
        "address": "339 Harwood Place, Levant, Kansas, 6522",
        "about": "Proident officia amet do nisi aliquip. Fugiat non eu cupidatat fugiat amet ullamco id ut sunt consectetur. Nostrud culpa nostrud aute aliqua mollit aute. Ex reprehenderit eu cupidatat aliquip quis est eiusmod ipsum culpa sunt cillum occaecat laboris. Labore elit ut enim voluptate consequat nulla aliquip do.\r\n",
        "registered": "1988-10-27T06:40:24 -07:00",
        "latitude": 68.574415,
        "longitude": -90.802859,
        "tags": [
            "consectetur",
            "et",
            "aliqua",
            "irure",
            "laborum",
            "veniam",
            "ullamco"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Trudy Silva"
            },
            {
                "id": 1,
                "name": "Kathie Olsen"
            },
            {
                "id": 2,
                "name": "Cathy Bullock"
            }
        ],
        "randomArrayItem": "cherry"
    }
]
```

Now, we can convert that JSON to key-value map:
```javascript
	var flattenr = require("flattenr");

    // see above, I will not paste it again here.
	var objects = ".."

	// This time I will use / as a separator character
	var f = new Flattenr(objects, "/");
```

Ok, now we can now get the data using get() method:
```javascript
	console.log("get()", "=>", f.get());
```

It will log:
```bash
	get() => { '0/id': 0,
  '0/guid': 'cc38bed5-5fd4-44a8-896c-8429a73fffa1',
  '0/isActive': false,
  '0/balance': '$2,781.00',
  '0/picture': 'http://placehold.it/32x32',
  '0/age': 23,
  '0/name': 'Head Wade',
  '0/gender': 'male',
  '0/company': 'Zolarex',
  '0/email': 'headwade@zolarex.com',
  '0/phone': '+1 (878) 548-3497',
  '0/address': '264 Quay Street, Mathews, Michigan, 7116',
  '0/about': 'Mollit qui id nisi in excepteur fugiat. Ut tempor proident pariatur veniam exercitation elit est. Ex pariatur eu consectetur do et laborum minim.\r\n',
  '0/registered': '1999-05-29T18:44:25 -07:00',
  '0/latitude': 45.04479,
  '0/longitude': 114.016977,
  '0/tags/0': 'veniam',
  '0/tags/1': 'aliqua',
  '0/tags/2': 'laborum',
  '0/tags/3': 'proident',
  '0/tags/4': 'eu',
  '0/tags/5': 'ullamco',
  '0/tags/6': 'do',
  '0/friends/0/id': 0,
  '0/friends/0/name': 'Villarreal Mcpherson',
  '0/friends/1/id': 1,
  '0/friends/1/name': 'Horton Rosa',
  '0/friends/2/id': 2,
  '0/friends/2/name': 'Small Malone',
  '0/randomArrayItem': 'lemon',
  '1/id': 1,
  '1/guid': 'd1fad964-63c5-4dd5-a2a1-ea306ad1967e',
  '1/isActive': false,
  '1/balance': '$2,569.00',
  '1/picture': 'http://placehold.it/32x32',
  '1/age': 27,
  '1/name': 'Georgina Dawson',
  '1/gender': 'female',
  '1/company': 'Gallaxia',
  '1/email': 'georginadawson@gallaxia.com',
  '1/phone': '+1 (862) 478-2597',
  '1/address': '770 Ridgewood Avenue, Makena, South Carolina, 4979',
  '1/about': 'Occaecat ullamco dolore exercitation laborum anim. Sunt incididunt duis cillum aute consequat anim irure reprehenderit occaecat. Occaecat id magna aliqua incididunt sunt enim fugiat dolor tempor mollit irure sint id ullamco. Magna Lorem cillum et sint pariatur amet. Commodo velit ex qui elit magna.\r\n',
  '1/registered': '1996-01-11T11:31:11 -07:00',
  '1/latitude': 69.709229,
  '1/longitude': -141.610235,
  '1/tags/0': 'Lorem',
  '1/tags/1': 'et',
  '1/tags/2': 'aute',
  '1/tags/3': 'adipisicing',
  '1/tags/4': 'culpa',
  '1/tags/5': 'commodo',
  '1/tags/6': 'eiusmod',
  '1/friends/0/id': 0,
  '1/friends/0/name': 'Morris Rosales',
  '1/friends/1/id': 1,
  '1/friends/1/name': 'Lara Reilly',
  '1/friends/2/id': 2,
  '1/friends/2/name': 'Steele Fitzpatrick',
  '1/randomArrayItem': 'lemon',
  '2/id': 2,
  '2/guid': '57db458e-b831-465d-b8b8-9726b85611bf',
  '2/isActive': true,
  '2/balance': '$3,345.00',
  '2/picture': 'http://placehold.it/32x32',
  '2/age': 33,
  '2/name': 'Bean Stark',
  '2/gender': 'male',
  '2/company': 'Zilidium',
  '2/email': 'beanstark@zilidium.com',
  '2/phone': '+1 (958) 506-3057',
  '2/address': '994 Rugby Road, Clinton, Idaho, 3249',
  '2/about': 'Fugiat nulla ullamco est irure sunt deserunt do mollit nulla eu mollit irure. Esse do Lorem minim nostrud commodo deserunt nisi qui dolor. Id ut exercitation ipsum ut. Dolore anim excepteur nulla anim aute nostrud aliqua dolor ex consequat id tempor reprehenderit. Qui non pariatur exercitation nisi in. Ex minim sint deserunt ex qui.\r\n',
  '2/registered': '1997-10-04T16:58:03 -07:00',
  '2/latitude': -55.883112,
  '2/longitude': -69.844223,
  '2/tags/0': 'deserunt',
  '2/tags/1': 'velit',
  '2/tags/2': 'eiusmod',
  '2/tags/3': 'ullamco',
  '2/tags/4': 'Lorem',
  '2/tags/5': 'enim',
  '2/tags/6': 'eu',
  '2/friends/0/id': 0,
  '2/friends/0/name': 'Mooney Curry',
  '2/friends/1/id': 1,
  '2/friends/1/name': 'Dolores Campbell',
  '2/friends/2/id': 2,
  '2/friends/2/name': 'Bridgett Young',
  '2/randomArrayItem': 'cherry',
  '3/id': 3,
  '3/guid': '55bfadf9-320e-4523-b7c3-f5415ed28fd5',
  '3/isActive': false,
  '3/balance': '$1,856.00',
  '3/picture': 'http://placehold.it/32x32',
  '3/age': 26,
  '3/name': 'Lolita Roman',
  '3/gender': 'female',
  '3/company': 'Pivitol',
  '3/email': 'lolitaroman@pivitol.com',
  '3/phone': '+1 (870) 480-3483',
  '3/address': '595 Fulton Street, Sabillasville, Colorado, 5843',
  '3/about': 'In officia cillum nostrud mollit occaecat consequat ullamco voluptate veniam id voluptate. Nisi minim minim minim anim ut do magna eu irure occaecat ea sit velit exercitation. Nostrud incididunt cillum irure tempor ex ex officia culpa qui anim quis sunt labore aliquip. Amet minim consectetur nulla aliquip anim velit tempor ullamco aliqua velit excepteur deserunt sunt. Commodo consequat exercitation eiusmod eiusmod nisi mollit aute laborum irure laborum consectetur exercitation.\r\n',
  '3/registered': '2005-04-26T18:32:03 -07:00',
  '3/latitude': 38.922275,
  '3/longitude': -86.762296,
  '3/tags/0': 'consectetur',
  '3/tags/1': 'occaecat',
  '3/tags/2': 'velit',
  '3/tags/3': 'amet',
  '3/tags/4': 'tempor',
  '3/tags/5': 'eiusmod',
  '3/tags/6': 'id',
  '3/friends/0/id': 0,
  '3/friends/0/name': 'Nielsen Charles',
  '3/friends/1/id': 1,
  '3/friends/1/name': 'Gabriela Jenkins',
  '3/friends/2/id': 2,
  '3/friends/2/name': 'Russo Willis',
  '3/randomArrayItem': 'lemon',
  '4/id': 4,
  '4/guid': '487bf1fa-a837-4bb0-ace5-9af814b60b32',
  '4/isActive': true,
  '4/balance': '$3,705.00',
  '4/picture': 'http://placehold.it/32x32',
  '4/age': 40,
  '4/name': 'Diane Velez',
  '4/gender': 'female',
  '4/company': 'Ginkogene',
  '4/email': 'dianevelez@ginkogene.com',
  '4/phone': '+1 (844) 582-3820',
  '4/address': '982 Agate Court, Nash, Hawaii, 7910',
  '4/about': 'Minim irure nulla est elit magna occaecat dolore officia ipsum et incididunt laborum sint. Minim aliquip laborum aliqua in nulla do officia. Nulla et excepteur deserunt velit commodo ad aliqua aliqua incididunt anim irure quis ut cillum. Ut elit ad id duis aliquip ad in esse eiusmod labore. Mollit ex aute enim ad ex duis elit veniam id sunt do ipsum aute laboris. Dolor fugiat ea fugiat reprehenderit nisi incididunt Lorem laborum aute anim in voluptate.\r\n',
  '4/registered': '1998-05-31T14:18:09 -07:00',
  '4/latitude': -73.719046,
  '4/longitude': 131.088866,
  '4/tags/0': 'sint',
  '4/tags/1': 'nisi',
  '4/tags/2': 'sunt',
  '4/tags/3': 'sint',
  '4/tags/4': 'aliquip',
  '4/tags/5': 'ex',
  '4/tags/6': 'labore',
  '4/friends/0/id': 0,
  '4/friends/0/name': 'Kristi Stafford',
  '4/friends/1/id': 1,
  '4/friends/1/name': 'Berry Holcomb',
  '4/friends/2/id': 2,
  '4/friends/2/name': 'Strong Lott',
  '4/randomArrayItem': 'lemon',
  '5/id': 5,
  '5/guid': '907644af-19bc-42f8-aa0a-9e40abbf0bdf',
  '5/isActive': true,
  '5/balance': '$2,211.00',
  '5/picture': 'http://placehold.it/32x32',
  '5/age': 21,
  '5/name': 'Bradshaw Vazquez',
  '5/gender': 'male',
  '5/company': 'Recognia',
  '5/email': 'bradshawvazquez@recognia.com',
  '5/phone': '+1 (998) 428-2316',
  '5/address': '790 Jerome Street, Tolu, Oklahoma, 5220',
  '5/about': 'Incididunt occaecat deserunt anim fugiat nulla nulla ea anim culpa nulla veniam sunt tempor. Nostrud minim consequat dolore do elit culpa dolor occaecat. Elit irure officia tempor nostrud adipisicing aliqua magna nisi aute consequat consequat consequat. Non amet commodo voluptate labore magna ad reprehenderit velit tempor.\r\n',
  '5/registered': '2002-11-01T09:30:17 -07:00',
  '5/latitude': -84.470438,
  '5/longitude': -99.96739,
  '5/tags/0': 'duis',
  '5/tags/1': 'qui',
  '5/tags/2': 'aute',
  '5/tags/3': 'culpa',
  '5/tags/4': 'pariatur',
  '5/tags/5': 'id',
  '5/tags/6': 'velit',
  '5/friends/0/id': 0,
  '5/friends/0/name': 'Aileen Maddox',
  '5/friends/1/id': 1,
  '5/friends/1/name': 'Garcia Mcintyre',
  '5/friends/2/id': 2,
  '5/friends/2/name': 'Irwin Lambert',
  '5/randomArrayItem': 'cherry',
  '6/id': 6,
  '6/guid': 'f6d803a2-c894-4372-90c4-64a302bc0d34',
  '6/isActive': true,
  '6/balance': '$2,306.00',
  '6/picture': 'http://placehold.it/32x32',
  '6/age': 29,
  '6/name': 'Obrien Cohen',
  '6/gender': 'male',
  '6/company': 'Hawkster',
  '6/email': 'obriencohen@hawkster.com',
  '6/phone': '+1 (891) 564-3992',
  '6/address': '339 Harwood Place, Levant, Kansas, 6522',
  '6/about': 'Proident officia amet do nisi aliquip. Fugiat non eu cupidatat fugiat amet ullamco id ut sunt consectetur. Nostrud culpa nostrud aute aliqua mollit aute. Ex reprehenderit eu cupidatat aliquip quis est eiusmod ipsum culpa sunt cillum occaecat laboris. Labore elit ut enim voluptate consequat nulla aliquip do.\r\n',
  '6/registered': '1988-10-27T06:40:24 -07:00',
  '6/latitude': 68.574415,
  '6/longitude': -90.802859,
  '6/tags/0': 'consectetur',
  '6/tags/1': 'et',
  '6/tags/2': 'aliqua',
  '6/tags/3': 'irure',
  '6/tags/4': 'laborum',
  '6/tags/5': 'veniam',
  '6/tags/6': 'ullamco',
  '6/friends/0/id': 0,
  '6/friends/0/name': 'Trudy Silva',
  '6/friends/1/id': 1,
  '6/friends/1/name': 'Kathie Olsen',
  '6/friends/2/id': 2,
  '6/friends/2/name': 'Cathy Bullock',
  '6/randomArrayItem': 'cherry' }
```

OK. That's it

----------
Now, I want to get value from key:
```javascript
console.log("get("3/company")", "=>", f.get("3/company"));
```

it will logs:

```
	get("3/company") => Pivitol
```

----------
What about find a data based on a specific key?
```javascript
console.log("find("nulla")", "=>", f.find("nulla"));
```
Result:
```bash
find("nulla") => {
    '2/about': 'Fugiat nulla ullamco est irure sunt deserunt do mollit nulla eu mollit irure. Esse do Lorem minim nostrud commodo deserunt nisi qui dolor. Id ut exercitation ipsum ut. Dolore anim excepteur nulla anim aute nostrud aliqua dolor ex consequat id tempor reprehenderit. Qui non pariatur exercitation nisi in. Ex minim sint deserunt ex qui.\r\n',
    '3/about': 'In officia cillum nostrud mollit occaecat consequat ullamco voluptate veniam id voluptate. Nisi minim minim minim anim ut do magna eu irure occaecat ea sit velit exercitation. Nostrud incididunt cillum irure tempor ex ex officia culpa qui anim quis sunt labore aliquip. Amet minim consectetur nulla aliquip anim velit tempor ullamco aliqua velit excepteur deserunt sunt. Commodo consequat exercitation eiusmod eiusmod nisi mollit aute laborum irure laborum consectetur exercitation.\r\n',
    '4/about': 'Minim irure nulla est elit magna occaecat dolore officia ipsum et incididunt laborum sint. Minim aliquip laborum aliqua in nulla do officia. Nulla et excepteur deserunt velit commodo ad aliqua aliqua incididunt anim irure quis ut cillum. Ut elit ad id duis aliquip ad in esse eiusmod labore. Mollit ex aute enim ad ex duis elit veniam id sunt do ipsum aute laboris. Dolor fugiat ea fugiat reprehenderit nisi incididunt Lorem laborum aute anim in voluptate.\r\n',
    '5/about': 'Incididunt occaecat deserunt anim fugiat nulla nulla ea anim culpa nulla veniam sunt tempor. Nostrud minim consequat dolore do elit culpa dolor occaecat. Elit irure officia tempor nostrud adipisicing aliqua magna nisi aute consequat consequat consequat. Non amet commodo voluptate labore magna ad reprehenderit velit tempor.\r\n',
    '6/about': 'Proident officia amet do nisi aliquip. Fugiat non eu cupidatat fugiat amet ullamco id ut sunt consectetur. Nostrud culpa nostrud aute aliqua mollit aute. Ex reprehenderit eu cupidatat aliquip quis est eiusmod ipsum culpa sunt cillum occaecat laboris. Labore elit ut enim voluptate consequat nulla aliquip do.\r\n' }
```

----------

Or we can find very specific key value pairs, find some balance around $2,xxx:
```javascript
console.log(f.find({balance: "$2,"}).get())
```
Result:
```json
{
    "0/balance": "$2,781.00",
    "1/balance": "$2,569.00",
    "5/balance": "$2,211.00",
    "6/balance": "$2,306.00"
}
```

## Documentation ##

### new Flattenr(data, [separator]); ###

Data is a JSON object. While separator is optional, default is ```.``` (dot). But you can use your own separator to be more readable, such as / or :

Flattenr returns flatten object, ```f```

### f.get(string) ###

String is a path of your flat json. For example, ``` get("6/balance") ```

### f.find(string) ###

Search key or value based on regular expression from string. for example ``` f.find("about")``` will returns data that contains key and value, that match the string.

It returns FlattenData. You can get the data with ```.get()``` method, for example:
```javascript
var v = f.find("data")
v.get()
```

### f.q({key: value}) ###

Same as ```f.find()``` with string as argument, but it pass key-value pairs instead of string. for example:
```javascript
	f.q({balance: "$2,"})
```

## License ##
The MIT License (MIT)

Copyright (c) 2014 Ribhararnus Pracutiar

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
