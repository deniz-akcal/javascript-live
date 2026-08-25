// 1. What is the length of the contacts array?

var contacts = [];

console.log(contacts.length);

console.log("========================================================")

// 2. Add the following people to the contacts array.

var jake = {
    name: 'Jake Overall',
    email: 'jake.overall@boisecodeworks.com',
    title: 'founder'
};

var matt = {
    name: 'Matt Overall',
    email: 'matt.overall@boisecodeworks.com',
    title: 'founder'
};

var tony = {
    name: 'Mark Ohnsman',
    email: 'mark@boisecodeworks.com',
    title: 'instructor'
};

var andrew = {
    name: 'Darryl Kilzer',
    email: 'darryl@boisecodeworks.com',
    title: 'instructor'
};

var tom = {
    name: 'Tom Day',
    email: 'tom@boisecodeworks.com',
    title: 'instructor'
};

contacts.push(jake);
contacts.push(matt);
contacts.push(tony);
contacts.push(andrew);
contacts.push(tom);

console.log("Just checking:");
console.log("contacts: " + contacts);
for(let i = 0; i < contacts.length; i++) {
    for( const [key, value] of Object.entries(contacts[i]) ) {
        console.log("key: " + key);
        console.log("value: " + value);
    }
}

console.log("========================================================")

// 3. Woops after adding all of those people to the same contacts list you realized you need a list just the instructors.
// create a new variable named instructors and populate it using the contacts array.
var instructors = [];

for(let i = 0; i < contacts.length; i++) {
    for( const [key, value] of Object.entries(contacts[i]) ) {
        // console.log("key: " + key);
        // console.log("value: " + value);
        if(key === "title" && value === "instructor") {
            // console.log("key, value: " + key + ", " + value);
            instructors.push(contacts[i]);
        }
    }
}

console.log("Just checking:");
console.log("instructors: " + instructors);
for(let i = 0; i < instructors.length; i++) {
    for( const [key, value] of Object.entries(instructors[i]) ) {
        console.log("key: " + key);
        console.log("value: " + value);
    }
}
