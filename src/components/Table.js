import React from "react";

export const Table = ({ data, column = [], isLoading }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((el, i) => (
            <th style={{ width: el.width }} key={el.accessorKey}>
              {el.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={3} className="table-loader">
              Loading . . .
            </td>
          </tr>
        ) : (
          data.map((val, i) => {
            return (
              <tr key={i}>
                {column.map((el) => (
                  <td key={i + el.accessorKey}>{val[el.accessorKey]}</td>
                ))}
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};
