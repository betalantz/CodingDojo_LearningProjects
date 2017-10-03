

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let i = 0; i < students.length; i++) {
    console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort);
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for(let group in users){
    console.log(group.toUpperCase());
    for(let k = 0; k < users[group].length; k++) {
        let current = users[group][k];
        console.log((k+1) + " - " + current.last_name.toUpperCase() + ", " + current.first_name.toUpperCase() + " - " + (current.first_name.length + current.last_name.length));
    }
}
