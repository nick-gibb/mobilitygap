import Layout from "../components/layout/layout";
import Graph from "../components/graph";
import React from "react";
import { Container, Form, Checkbox } from "semantic-ui-react";
import { useState } from "react";
const database = require("../lib/db");
const pgp = database.pgp;
const db = database.db;

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

  return {
    props: { queryResult, query_province_result },
  };
}

export default function Trends(props) {
  const [region_1, setRegion_1] = useState([]);
  const [region_2, setRegion_2] = useState([]);

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

  return (
    <Layout title={"Trends"}>
      <Container text>
        {/* <Header as="h1" content="Mobility Trends" /> */}

        <Form>
          <Form.Dropdown
            placeholder="Search..."
            label="Provinces"
            fluid
            multiple
            onChange={(e, { value }) => setRegion_1([value])}
            search
            selection
            options={province_options}
          />
          <Form.Dropdown
            placeholder="Search..."
            fluid
            multiple
            onChange={(e, { value }) => setRegion_2([value])}
            search
            label="Census subdivisions"
            selection
            options={options}
          />
          <Form.Group inline>
            <Form.Field>
              <label>POIs:</label>
            </Form.Field>
            <Form.Checkbox label="Retail" />
            <Form.Checkbox label="Grocery and pharmacy" />
            <Form.Checkbox label="Workplaces" />
            <Form.Checkbox label="Residential" />
            <Form.Checkbox label="Transit" />
          </Form.Group>

          {/* grocery_and_pharmacy_percent_change_from_baseline: "#003f5c",
  workplaces_percent_change_from_baseline: "#444e86",
  residential_percent_change_from_baseline: "#955196",
  retail_and_recreation_percent_change_from_baseline: "#dd5182",
  transit_stations_percent_change_from_baseline: "#ff6e54",
  workplaces_percent_change_from_baseline: "#ffa600", */}
        </Form>
        <Container style={{ position: "relative", height: 400 }}>
          <Graph region_1={region_1} region_2={region_2} />
        </Container>
      </Container>
    </Layout>
  );
}
