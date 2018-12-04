[{
  id: 'aslkfmnsag2slagna3p49tsdkgv',
  name: 'Jonas',
  room: 'TestRoom1'
}]

// addUser(id, name, roomName)
// removeUser(id)
// getUser(id)
// getUserList(roomName)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.users.find(user => user.id === id);
    if (!user) {
      return 'User not found.';
    }
    this.users = this.users.filter(user => user.id !== id);
    return user;
  }
  getUser (id) {
    var user = this.users.find(user => user.id === id);
    if (!user) {
      return 'User not found.';
    }
    return user;
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} years old.`;
//   }
// }
//
// var me = new Person('Jonas', 25);
// var description = me.getUserDescription();
// console.log(description);
