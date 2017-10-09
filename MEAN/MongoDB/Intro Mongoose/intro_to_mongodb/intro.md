Create a database called 'my_first_db'.
Create students collection.
Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
Create 5 students with the appropriate info.
Get all students.
Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
    // db.students.find({home_state:{$in:['Washington', 'California']}})
    // db.students.find({$or:[{home_state: 'Washington'}, {home_state: 'California'}]})
Get all students whose lucky number is:
greater than 3
    // db.students.find({lucky_number: {$gt: 3}}).pretty()
less than or equal to 10
    // db.students.find({lucky_number: {$lte: 10}}).pretty()
between 1 and 9 (inclusive)
    // db.students.find({lucky_number: {$gte: 1, $lte: 9}}).pretty()
    //  db.students.find({$and: [{lucky_number: {$gte: 1}},{lucky_number:{ $lte: 9}}]}).pretty()
Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
    // db.students.update({}, {$set: {interests:['coding', 'brunch', 'MongoDB'] }}, {multi: true})
Add some unique interests for each particular students into each of their interest arrays.
    // db.students.update({name: 'Robin'}, {$addToSet: {interests: 'jazz'}})
    // db.students.update({name: 'Jill'}, {$push: {interests: 'coding'}})
Add the interest 'taxes' into someone's interest array.
    // db.students.update({name: 'Noam'}, {$addToSet: {interests: 'taxes'}})
Remove the 'taxes' interest you just added.
    // db.students.update({name: 'Noam'}, {$pop: {interests: (1)}})
Remove all students who are from California (or Washington).
    // db.students.remove({home_state: 'California' })
Remove a student by name. 
    // db.students.remove({name: 'Jack' })
Remove a student whose lucky number is greater than 5 (JUST ONE)
    // db.students.remove({lucky_number: {$gt: 5}}, true)
Add a field to each student collection called 'number_of_belts' and set it to 0.
    // db.students.update({}, {$set: {number_of_belts: 0}}, {multi: true})
Increment this field by 1 for all students in Washington (Seattle Dojo).
    // db.students.update({home_state: 'Washington'}, {$inc: {number_of_belts: 1}}, {multi: true})
Rename the 'number_of_belts' field to 'belts_earned'
    // db.students.updateMany( {}, { $rename: { "number_of_belts": "belts_earned" } })
Remove the 'lucky_number' field.
    // db.students.updateMany({}, {$unset: {lucky_number: ""}})
Add a 'updated_on' field, and set the value as the current date.
    // db.students.updateMany({}, {$currentDate: {updated_on: true}})
