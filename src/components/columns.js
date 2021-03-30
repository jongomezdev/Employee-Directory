export const Columns = [
  {
    Header: 'Avatar',
    accessor: 'results[0].picture.thumbnail',
  },
  {
    Header: 'Full Name',
    accessor: 'results[0].name.first  results[0].name.last',
  },
  {
    Header: 'Location',
    accessor: 'results[0].location.state',
  },
  {
    Header: 'Email',
    accessor: 'results[0].email',
  },
  {
    Header: 'Phone',
    accessor: 'results[0].cell',
  },
];

// +https://randomuser.me/api/?results=500?inc=picture,name,location,email,phone
