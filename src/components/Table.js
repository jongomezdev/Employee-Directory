// import React, { useMemo } from 'react';
// import { useTable } from 'react-table';
// import TableStyle from '../styles/table';
// import Data from './Data';
// import { COLUMNS } from './columns';

// function Table() {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => Data, []);
//   const tableInstance = useTable({
//     columns,
//     data,
//   });

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = tableInstance;

//   return (
//     <TableStyle>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </TableStyle>
//   );
// }

// export default Table;
