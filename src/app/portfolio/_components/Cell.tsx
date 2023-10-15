import React, { FunctionComponent } from "react";

export type CellProps = {
  row: 1 | 2;
  col: 1 | 2;
  classNameProp?: string;
  children: React.ReactNode;
};

const Cell: FunctionComponent<CellProps> = ({
  row,
  col,
  classNameProp = "",
  children,
}) => {
  return (
    <div
      className={`col-span-${col} row-span-${row} group relative overflow-hidden rounded-2xl bg-white ${classNameProp}`}
    >
      {children}
    </div>
  );
};

export default Cell;