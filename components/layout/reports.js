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
  const {
    mobility,
    mobility_threshold,
    mobility_gap,
    mobility_gap_sign,
  } = props;

  return (
    <Layout title={props.region}>
      <Header as="h2">Mobility Gap: {props.region}</Header>
      <Statistic.Group
        widths="three"
        size="small"
        items={[
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
        ]}
      />

      <PlaceholderExampleLine />
    </Layout>
  );
}
