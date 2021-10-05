console.log(process.env.NODE_ENV);
require("dotenv").config();
const db = require("../config/database");
const routes = require("../routes/index");
const {
  Users,
  Students,
  Modules,
  StudentModules,
  SocialNetworks,
} = require("../models/_models");
db.authenticate()
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

//Users and Students creating
Users.bulkCreate([
  {
    login: "fakedata1",
    password: "fakedata",
    isAdmin: false,
  },
  {
    login: "fakedata2",
    password: "fakedata",
    isAdmin: false,
  },
  {
    login: "fakedata3",
    password: "fakedata",
    isAdmin: false,
  },
  {
    login: "fakedata4",
    password: "fakedata",
    isAdmin: false,
  },
  {
    login: "fakedata5",
    password: "fakedata",
    isAdmin: false,
  },
])
  .then(
    Users.findOne({
      where: {
        login: "fakedata1",
      },
    }).then((user1) => {
      Students.create({
        fullName: user1.login,
        user_id: user1.id,
      });
    })
  )
  .then(
    Users.findOne({
      where: {
        login: "fakedata2",
      },
    }).then((user2) => {
      Students.create({
        fullName: user2.login,
        user_id: user2.id,
      });
    })
  )
  .then(
    Users.findOne({
      where: {
        login: "fakedata3",
      },
    }).then((user3) => {
      Students.create({
        fullName: user3.login,
        user_id: user3.id,
      });
    })
  )
  .then(
    Users.findOne({
      where: {
        login: "fakedata4",
      },
    }).then((user4) => {
      Students.create({
        fullName: user4.login,
        user_id: user4.id,
      });
    })
  )
  .then(
    Users.findOne({
      where: {
        login: "fakedata5",
      },
    }).then((user5) => {
      Students.create({
        fullName: user5.login,
        user_id: user5.id,
      });
    })
  );

// Creating modules
Modules.bulkCreate([
  {
    title: "fakedata1",
    color: "fakedata1",
  },
  {
    title: "fakedata2",
    color: "fakedata2",
  },
  {
    title: "fakedata3",
    color: "fakedata3",
  },
  {
    title: "fakedata4",
    color: "fakedata4",
  },
  {
    title: "fakedata5",
    color: "fakedata5",
  },
]);

// Creating student modules
setTimeout(() => {
  StudentModules.bulkCreate([
    {
      moduleId: 1,
      studentId: 1,
    },
    {
      moduleId: 2,
      studentId: 2,
    },
    {
      moduleId: 3,
      studentId: 3,
    },
    {
      moduleId: 4,
      studentId: 4,
    },
    {
      moduleId: 5,
      studentId: 5,
    },
  ]);
}, 3000);

// Creating social networks
setTimeout(() => {
  SocialNetworks.bulkCreate([
    {
      instagram: "fakedata1",
      telegram: "fakedata1",
      student_id: 1,
    },
    {
      instagram: "fakedata2",
      telegram: "fakedata2",
      student_id: 2,
    },
    {
      instagram: "fakedata3",
      telegram: "fakedata3",
      student_id: 3,
    },
    {
      instagram: "fakedata4",
      telegram: "fakedata4",
      student_id: 4,
    },
    {
      instagram: "fakedata5",
      telegram: "fakedata5",
      student_id: 5,
    },
  ]);
}, 3000);
