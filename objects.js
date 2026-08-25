// 1. Using dot and bracket notation, modify the existing object values to replace the information with your own

var me = {
    'name': 'Jake Overall',
    'age': 29,
    'hair color': 'brown'
};

me['name'] = "Deniz Akcal";
me.age = 34;
me["hair color"] = "black";

console.log(me);

console.log("========================================================")

// 2. Iterate over the object to console.log the property or key names
for( const key of Object.keys(me) ) {
    console.log(key);
}
