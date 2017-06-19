var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {

   login: function(req, res, next) {
       for (var i = 0; i < users.length; i++) {

           if (req.body.name === users[i].name &&
           req.body.password === users[i].password) {
               req.session.currentUser = users[i]
              return res.send({ userFound: true })
           }
           else {
             return res.send({ userfound: false })
           }

       }

   }
}

// module.exports = {
//  login: function(req, res) {
//    if (req.body.name)  {
//      users.find(function(cur, idx, arr)  {
//        console.log(cur.name, req.body.name, cur.password, req.body.password);
//        if (req.body.name === cur.name && req.body.password === cur.password) {
//          console.log(cur);
//          req.session.currentUser = cur;
//
//          return res.status(200).json({ userFound: true });
//        }
//      })
//    }
//    else {
//      return res.status(500).json({ userFound: false})
//    }
//  }
// };
