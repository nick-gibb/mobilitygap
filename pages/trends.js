import Layout from "../components/layout/layout";
import Graph from "../components/graph";
import React from "react";
import { Container, Form, Header } from "semantic-ui-react";
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
  const [pois, setPois] = useState({
    grocery_and_pharmacy_percent_change_from_baseline: false,
    workplaces_percent_change_from_baseline: false,
    residential_percent_change_from_baseline: true,
    retail_and_recreation_percent_change_from_baseline: false,
    transit_stations_percent_change_from_baseline: false,
    workplaces_percent_change_from_baseline: false,
  });

  const options = props["queryResult"].map((csd) => {
    return {
      key: csd["sub_region_2"],
      value: csd["sub_region_2"],
      text: csd["sub_region_2"],
    };
  });
  const province_options = props["query_province_result"].map((csd) => {
    if (csd["sub_region_1"] == "Ontario") {
      console.log("FOUND IT!!");
    }
    return {
      key: csd["sub_region_1"],
      value: csd["sub_region_1"],
      text: csd["sub_region_1"],
    };
  });

  const handleCheck = (e, data) => {
    const name = data.name;

    setPois((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  // toggle = () =>
  // this.setState((prevState) => ({ checked: !prevState.checked }));

  return (
    <Layout title={"Trends"}>
      <Container text>
        <Header as="h1" content="Google Mobility Trends" />

        <Form>
          <Form.Dropdown
            placeholder="Search..."
            label="Provinces"
            fluid
            multiple
            onChange={(e, { value }) => setRegion_1(value)}
            search
            selection
            options={province_options}
          />
          {/* <Form.Dropdown
            placeholder="Search..."
            fluid
            multiple
            onChange={(e, { value }) => setRegion_2([value])}
            search
            label="Census subdivisions"
            selection
            options={options}
          /> */}
          <Form.Field>
            <label>Points-of-interest:</label>
          </Form.Field>
          <Form.Group inline>
            <Form.Checkbox
              name="retail_and_recreation_percent_change_from_baseline"
              label="Retail"
              checked={pois.retail_and_recreation_percent_change_from_baseline}
              onChange={handleCheck}
            />
            <Form.Checkbox
              name="grocery_and_pharmacy_percent_change_from_baseline"
              checked={pois.grocery_and_pharmacy_percent_change_from_baseline}
              onChange={handleCheck}
              label="Grocery and pharmacy"
            />
            <Form.Checkbox
              name="workplaces_percent_change_from_baseline"
              label="Workplaces"
              checked={pois.workplaces_percent_change_from_baseline}
              onChange={handleCheck}
            />
            <Form.Checkbox
              label="Residential"
              name="residential_percent_change_from_baseline"
              checked={pois.residential_percent_change_from_baseline}
              onChange={handleCheck}
            />
            <Form.Checkbox
              label="Transit"
              name="transit_stations_percent_change_from_baseline"
              checked={pois.transit_stations_percent_change_from_baseline}
              onChange={handleCheck}
            />
          </Form.Group>
        </Form>
        <Container style={{ position: "relative", height: 400 }}>
          <Graph region_1={region_1} pois={pois} />
        </Container>
      </Container>
    </Layout>
  );
}
