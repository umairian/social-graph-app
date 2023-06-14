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

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = resolvers;