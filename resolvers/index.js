const userResolvers = require("./user");

const books = [
    {
      title: 'Salahuddin Ayyubi',
      author: 'Fazil Ahmad',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  
  const users = [
    {
      id: 1,
      name: "Umair Syed",
      username: "umairian",
      email: "umair@gmail.com"
    },
    {
      id: 2,
      name: "Owais Syed",
      username: "owais",
      email: "owais@gmail.com"
    },
    {
      id: 1,
      name: "Hashir Syed",
      username: "hashirhs8",
      email: "hashir@gmail.com"
    }
  ]
  
  const resolvers = {
    Query: {
      books: () => books,
      user: userResolvers.getOne,
      users: userResolvers.getAll,
      // user: (parent, args, contextValue, info) => {
      //   console.log(args)
      //   return users[args.id];
      // }
    },
  };

  module.exports = resolvers;