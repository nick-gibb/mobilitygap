import { Header } from "semantic-ui-react";

const PageTitle = ({ titleText, subheader }) => (
  <Header as="h3" content={titleText} dividing subheader={subheader} />
);

export default PageTitle;
