db.students.aggregate([                                  //db.collection name.aggregate
    {$match: {roll: 9}}
]).pretty()



db.lists.aggregate([
    {$match: {ToDoStatus: "New"}}
]).toArray()



db.lists.aggregate([
    {$match: {ToDoStatus: "New"}},
    {$project: {_id: 0, UserName: 1, ToDoSubject: 1}}
]).toArray()



db.students.aggregate([
    {$match: {$or: [{roll: {$gt: 10, $lt: 20}}, {name: "Bulbul"}]}}
]).toArray();



db.students.aggregate([
    {$match: {$and: [{roll: {$gte: 10, $lte: 50}}, {name: "Bulbul"}]}}
]).toArray();



db.students.aggregate([                                  //db.collection name.aggregate
    {$match: {name: "Bulbul"}},
    {$match: {roll: 47}}
]).pretty()