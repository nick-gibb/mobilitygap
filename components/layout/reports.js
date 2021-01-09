import { Header, Placeholder, Statistic } from "semantic-ui-react";
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
  const mobility = Math.floor(Math.random() * 100) + 1;
  const mobility_threshold = Math.floor(Math.random() * 100) + 1;
  const mobility_gap = mobility - mobility_threshold;
  const mobility_gap_sign = mobility_gap < 0 ? "red" : "green";

  const items = [
    { key: "mobility", label: "Mobility", value: mobility },
    {
      key: "threshold",
      label: "Mobility Threshold",
      value: mobility_threshold,
    },
    {
      key: "gap",
      label: "Mobility Gap",
      value: mobility_gap,
      color: mobility_gap_sign,
    },
  ];

  return (
    <Layout title={props.region}>
      <Header as="h2">Mobility Gap: {props.region}</Header>
      <Statistic.Group widths="three" size="small" items={items} />

      <PlaceholderExampleLine />
    </Layout>
  );
}
