import React from 'react';
import TableStyle from '../styles/table';
// import Parent from '../components/Parent';

export default function Table(props) {
  return (
    <TableStyle>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">First, Last</th>
            <th scope="col">Location</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((user) => (
            <tr>
              <th scope="row">
                <img src={user.picture.thumbnail} alt={user.name.first} />
              </th>
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.location.state}</td>
              <td>{user.email}</td>
              <td>{user.cell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableStyle>
  );
}
