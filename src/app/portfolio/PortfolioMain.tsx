import React, { FunctionComponent } from "react";
import Image from "next/image";
import ImageComponent from "./_components/Image";
import Cell from "./_components/Cell";
import Info from "./_components/Info";
import { portfolioData, TportfolioData } from "@/data/PortfolioData";

export type PortfolioMainProps = {
  //no props
};

const testStyle = "border-[1px] border-[rgba(0,0,0,0.1)]";

const PortfolioMain: FunctionComponent<PortfolioMainProps> = ({}) => {
  return (
    <div className="mx-auto grid aspect-[2/3] max-w-[992px] grid-cols-4 grid-rows-6 gap-4 p-4">
      <Cell row={2} col={2} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
        <Info />
      </Cell>

      <Cell row={1} col={1} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>

      <Cell row={2} col={1} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>

      <Cell row={2} col={1} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>

      <Cell row={1} col={2} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>

      <Cell row={1} col={1} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>

      <Cell row={2} col={2} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>

      <Cell row={1} col={2} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>

      <Cell row={2} col={2} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>

      <Cell row={1} col={2} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>
    </div>
  );
};

export default PortfolioMain;

{
  /* <div
        className={`group relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-white ${testStyle}`}
      >
        <ImageComponent props={portfolioData[0]} />
      </div>

      <div
        className={`group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-white ${testStyle}`}
      >
        <ImageComponent props={portfolioData[0]} />
      </div>

      <div
        className={`group relative col-span-1 row-span-2 overflow-hidden rounded-2xl bg-white ${testStyle}`}
      >
        <ImageComponent props={portfolioData[0]} />
      </div>

      <div
        className={`group relative col-span-1 row-span-2 overflow-hidden rounded-2xl bg-white ${testStyle}`}
      >
        <ImageComponent props={portfolioData[0]} />
      </div>

      <div
        className={`group relative col-span-2 row-span-1 overflow-hidden rounded-2xl bg-white ${testStyle}`}
      >
        <ImageComponent props={portfolioData[0]} />
      </div>

      <div
        className={`group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-white ${testStyle}`}
      >
        <ImageComponent props={portfolioData[0]} />
      </div>

      <div
        className={`group relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-white ${testStyle}`}
      >
        <ImageComponent props={portfolioData[0]} />
      </div>

      <div
        className={`group relative col-span-2 row-span-1 overflow-hidden rounded-2xl bg-white ${testStyle}`}
      >
        <ImageComponent props={portfolioData[0]} />
      </div>

      <div
        className={`group relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-white ${testStyle}`}
      >
        <ImageComponent props={portfolioData[0]} />
      </div>

      <div
        className={`group relative col-span-2 row-span-1 overflow-hidden rounded-2xl bg-white ${testStyle}`}
      >
        <ImageComponent props={portfolioData[0]} />
      </div> */
}