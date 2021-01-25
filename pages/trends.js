import Layout from "../components/layout/layout";
import React from "react";
import { Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Line } from "react-chartjs-2";
import { Dropdown } from "semantic-ui-react";

const data = {
  datasets: [
    {
      data: [
        {
          x: 10,
          y: 20,
        },
        {
          x: 15,
          y: 10,
        },
      ],
      label: "Ontario",
    },
    {
      data: [
        {
          x: 10,
          y: 15,
        },
        {
          x: 15,
          y: 8,
        },
      ],
      label: "Alberta",
    },
  ],
};

export default function Trends() {
  return (
    <Layout title={"Trends"}>
      <Container text>
        <Header as="h1" content="Mobility Trends" />
        <Dropdown placeholder="Province" fluid multiple search selection />
        <Dropdown
          placeholder="Census subdivision"
          fluid
          multiple
          search
          selection
        />
        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: "Awesome Mobility Trends",
            },
          }}
        />
      </Container>
    </Layout>
  );
}
