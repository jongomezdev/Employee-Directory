import styled from 'styled-components';

const TableStyle = styled.div`
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #3e00b3;
    color: white;
  }
`;

export default TableStyle;
