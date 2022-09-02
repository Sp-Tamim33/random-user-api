module.exports.getAllUser = (req, res, next) => {
    res.send('Get All User')
}
module.exports.getRandomUser = (req, res, next) => {
    res.send('Get a Random User')
}
module.exports.saveUser = (req, res, next) => {
    res.send('Save User')
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