import { Header, Placeholder, Statistic } from "semantic-ui-react";
import Layout from "./layout";

const items = [
  { key: "mobility", label: "Mobility", value: "80" },
  { key: "threshold", label: "Mobility Threshold", value: "64" },
  { key: "gap", label: "Mobility Gap", value: "16" },
];

const StatisticExampleGroupShorthand = () => (
  <Statistic.Group widths="three" size="small" items={items} />
);

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
      <StatisticExampleGroupShorthand />
      <PlaceholderExampleLine />
    </Layout>
  );
}
