import { Header } from "semantic-ui-react";
import Layout from "./layout";

export default function Report(props) {
  return (
    <Layout title={props.region}>
      <Header as="h2">Mobility Gap: {props.region}</Header>
    </Layout>
  );
}
