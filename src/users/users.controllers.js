const usersDB = []
let id = 1

/*{
    id: 1,
    first_name: 'Adolfo',
    last_name: 'Ruiz',
    email: 'adolfo.ruiz@academlo.com',
    password: 'root',
    birthday: '1991/08/26'
}*/

const findAllUsers = () => {
    return usersDB
}

const findUserById = (id) => {
    const filteredUser = usersDB.find(user => user.id == id)
    return filteredUser
}

const createNewUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        pasword: obj.password,
        birthday: obj.birthday
    }       
    usersDB.push(newUser)
    return newUser
}


module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
}