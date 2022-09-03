const fs = require('fs');
const usersDir = __dirname + '/' + '../data/userDB.json';
// console.log(usersDir);



module.exports.getAllUser = (req, res, next) => {
    let users = fs.readFileSync(usersDir);
    let parsedUsers = JSON.parse(users);
    let limit = req.query.limit;
    if (limit) {
        res.send(parsedUsers.slice(0, limit))
    } else res.send(parsedUsers);
}
module.exports.getRandomUser = (req, res, next) => {
    res.send('Get a Random User')
}
module.exports.saveUser = (req, res, next) => {
    let users = fs.readFileSync(usersDir);
    let parsedUsers = JSON.parse(users);
    const lastId = parsedUsers[parsedUsers.length - 1].id;
    const user = req.body;
    if (user.gender && user.name && user.contact && user.address && user.photoUrl) {
        user.id = lastId + 1;
        parsedUsers.push(user);
        fs.writeFileSync(usersDir, JSON.stringify(parsedUsers))
        res.send(user)
    } else res.send('Please Provide All the required data!')
}
module.exports.updateUser = (req, res, next) => {
    res.send('update User')
}
module.exports.bulkUpdateUser = (req, res, next) => {
    res.send('Bulk Update User')
}
module.exports.deleteUser = (req, res, next) => {
    res.send('Delete User')
}