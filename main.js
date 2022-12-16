// All data find
db.students.aggregate([]).toArray()


// Find data which roll is 9
db.students.aggregate([                                  //db.collection name.aggregate
    {$match: {roll: 9}}
]).pretty()


// Find data which todo status is new
db.lists.aggregate([
    {$match: {ToDoStatus: "New"}}
]).toArray()


// Find data which todo status is new and show only username and todo subject
db.lists.aggregate([
    {$match: {ToDoStatus: "New"}},
    {$project: {_id: 0, UserName: 1, ToDoSubject: 1}}
]).toArray()


// Find data which roll is greater than 10 and lower than 20 or name is bulbul
db.students.aggregate([
    {$match: {$or: [{roll: {$gt: 10, $lt: 20}}, {name: "Bulbul"}]}}
]).toArray();


// Find data which roll is greater than or equal 10 and lower than or equal 50 and name bulbul
db.students.aggregate([
    {$match: {$and: [{roll: {$gte: 10, $lte: 50}}, {name: "Bulbul"}]}}
]).toArray();


// Find data which name is bulbul and roll is 47
db.students.aggregate([                                  //db.collection name.aggregate
    {$match: {name: "Bulbul"}},
    {$match: {roll: 47}}
]).pretty()


// Find data and show total documents
db.students.aggregate([
    {$count: 'total'}
])


// Find data that has b letter inside the name
db.students.aggregate([{$match: {name: {$in: [/b/]}}}]).toArray()


// Find data that has b letter inside the name and show total name
db.students.aggregate([
    {$match: {name: {$in: [/b/]}}},
    {$count: 'total'}
]).toArray()


// Find data that has b, j letter inside the name and show only 5 names
db.students.aggregate(
    [
        {$project: {name: 1}},
        {$match: {name: {$in: [/b/,/j/]}}},
        {$skip: 0},
        {$limit: 5}

]).toArray()


// Find data that has b, j letter inside the name, homes are count and show descendent order
db.students.aggregate([
    {$match: {name: {$in: [/b/,/j/]}}},
    {$group: {_id: "$home", 'total': {$sum: 1}}},
    {$sort: {total: -1}}
]).toArray()


// Find data by roll and show descendent order
db.students.aggregate([
    {$group: {_id: "$roll", 'max': {$max: '$roll'}}},
    {$sort: {max: -1}}
]).toArray()


// Find data by roll and show the sum of all rolls
db.students.aggregate([
    {$group: {_id: 0, 'sum': {$sum: '$roll'}}}
])


db.students.aggregate([
    {$group: {_id: {"name": "$name", "roll": "$roll"}}}
]).toArray()