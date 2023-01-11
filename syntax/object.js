var members = ['kim', 'park', 'lee'];
console.log(members[1]); // park
var i = 0;
while(i < members.length) {
    console.log('array loop', members[i])
    i = i + 1;
}

var roles = {
    'programmer':'kim',
    'designer':'park',
    'manager': 'lee',
}
console.log(roles.designer); // park

for(var key in roles) {
    console.log('object => ', key, ', value => ', roles[key]);
}