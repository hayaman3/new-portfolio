import React, { FunctionComponent } from "react";
import Section from "@/_components/Section";
import Title from "@/_components/Title";
import Subtitle from "@/_components/Subtitle";

export type ActivityProps = {
  //no props
};

const Activity: FunctionComponent<ActivityProps> = ({}) => {
  return (
    <Section id="activity">
      <Title>Github Activity</Title>
      <Subtitle>
        <span className="inline-block">
          <a
            href="https://github.com/hayaman3"
            target="_blank"
            rel="noopener noreferrer"
            className="after:block after:w-6 after:border-b after:border-solid after:border-b-title after:content-[''] hover:text-black"
          >
            github.com/hayaman3
          </a>
        </span>
      </Subtitle>
      <div className="scrollbar overflow-x-auto p-4">
        <img
          src="https://ghchart.rshah.org/hayaman3"
          alt="Github activity chart"
          className="mx-auto min-w-[550px] rounded-[0.8rem] border border-solid border-[rgba(0,0,0,0.1)] bg-white p-4"
        />
      </div>
    </Section>
  );
};

export default Activity;
