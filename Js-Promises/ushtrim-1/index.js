// Krijoni nje function qe kthen nje promise ,
// promise permban nje fakeApi const qe ka te dhena per user secili user ka nje id,
// therrisni kete function duke i kaluar id e userit

var returnUser = (user) => {
  return new Promise((res, rej) => {
    const fakeApi = {
      user1: { id: "1234567", name: "name1", surname: "surname1" },
      user2: { id: "7654321", name: "name2", surname: "surname2" },
    };
    const foundUser = fakeApi[user];
    if (foundUser) {
      res(foundUser);
    } else {
      rej("No user found");
    }
  });
};

returnUser("user1").then(
  (response) => {
    console.log(response);
  },
  (error) => {
    alert(error);
  }
);