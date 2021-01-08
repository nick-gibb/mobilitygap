import { Header, Placeholder } from "semantic-ui-react";
import Layout from "./layout";

const PlaceholderExampleLine = () => (
  <Placeholder>
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
  </Placeholder>
);

export default function Report(props) {
  return (
    <Layout title={props.region}>
      <Header as="h2">Mobility Gap: {props.region}</Header>
      <PlaceholderExampleLine />
    </Layout>
  );
}
