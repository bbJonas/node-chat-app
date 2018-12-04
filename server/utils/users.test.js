const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]
  });


  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'TestRoom1'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });


  it('should remove a user', () => {
    var seedArray = users.users;
    var resUser = users.removeUser('1');

    expect(resUser).toEqual(seedArray[0]);
    expect(users.users).toEqual([seedArray[1], seedArray[2]]);
  });


  it('should not remove a user', () => {
    var seedArray = users.users;
    var resUser = users.removeUser('11245');

    expect(resUser).toBe('User not found.');
    expect(users.users).toEqual(seedArray);
  });


  it('should find a user', () => {
    var resUser = users.getUser('3');

    expect(resUser).toEqual(users.users[2])
  });


  it('should not find user', () => {
    var resUser = users.getUser('1011');

    expect(resUser).toBe('User not found.');
  });


  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });


  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });

});
