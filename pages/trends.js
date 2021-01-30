import Layout from "../components/layout/layout";
import React from "react";
import { Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Line } from "react-chartjs-2";
import { Dropdown, Segment } from "semantic-ui-react";

const database = require("../lib/db");
const pgp = database.pgp;
const db = database.db;

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

export async function getStaticProps() {
  const sql = pgp.as.format(
    "SELECT distinct sub_region_2 FROM public.canada WHERE country_region=$1 AND sub_region_1 is not null AND sub_region_2 is not null order by sub_region_2",
    "Canada"
  );

  const queryResult = await db.any("$1:raw", sql);

  const sql_provinces = pgp.as.format(
    "SELECT distinct sub_region_1 FROM public.canada WHERE country_region=$1 AND sub_region_1 is not null AND sub_region_2 is not null order by sub_region_1",
    "Canada"
  );

  const query_province_result = await db.any("$1:raw", sql_provinces);
  console.log(query_province_result);

  return {
    props: { queryResult, query_province_result },
  };
}

export default function Trends(props) {
  const options = props["queryResult"].map((csd) => {
    return {
      key: csd["sub_region_2"],
      value: csd["sub_region_2"],
      text: csd["sub_region_2"],
    };
  });
  const province_options = props["query_province_result"].map((csd) => {
    return {
      key: csd["sub_region_1"],
      value: csd["sub_region_1"],
      text: csd["sub_region_1"],
    };
  });
  console.log(province_options);
  return (
    <Layout title={"Trends"}>
      <Container text>
        <Header as="h1" content="Mobility Trends" />

        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: "Awesome Mobility Trends",
            },
          }}
        />
        <Dropdown
          placeholder="Province"
          fluid
          multiple
          search
          selection
          options={province_options}
        />
        <Dropdown
          style={{ marginTop: 5 }}
          placeholder="Census subdivision"
          fluid
          multiple
          search
          selection
          options={options}
        />
      </Container>
    </Layout>
  );
}
