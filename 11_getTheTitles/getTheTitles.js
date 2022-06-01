const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(arreglo) {
    const titles = arreglo.map((objetoInterno) => objetoInterno.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
