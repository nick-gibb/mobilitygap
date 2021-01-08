import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <h2>
        The Mobility Gap: Mobility Reductions Needed to Suppress COVID-19
        through the Winter Surge in Canada
      </h2>
      <p>January 5, 2020</p>
      <p>
        <i>Manuscript under review</i>
      </p>
      <p>
        Kevin A. Brown, Jean-Paul R. Soucy, Sarah A. Buchan, Shelby L. Sturrock,
        Isha Berry, Nathan M. Stall, Amir Ghasemi, Nicholas Gibbs, Derek R.
        MacFadden, Nick Daneman
      </p>
      <p>
        <strong>Background. </strong>
        Physical distancing measures will remain the primary means of
        controlling COVID-19 until vaccination coverage is sufficient to achieve
        herd immunity. We used mobile phone mobility measures to quantify the
        mobility level needed to suppress COVID-19 (mobility threshold), and the
        difference relative to current levels (mobility gap).
      </p>
      <p>
        <strong>Methods. </strong>We conducted a pan-Canadian province-level
        longitudinal study of weekly COVID-19 incidence starting March 11, 2020.
        The outcome was weekly case growth defined as the ratio of cases in the
        current and previous week. We examined the effects of weekly average
        time spent outside the home (non-residential mobility) in the prior 2
        weeks using a lognormal regression model accounting for province,
        season, relative volume of park visits, and mean temperature. We
        identified the mobility threshold and reduction needed to suppress
        COVID-19.
      </p>
      <p>
        <strong>Results. </strong>
        Across the 39-week study period, there were 231 province-weeks included,
        with a total of 430,982 persons infected with COVID-19. Non-residential
        mobility dropped rapidly in the spring and reached 80.5% in April 2020.
        After adjustment, each 1% increase in non-residential mobility was
        associated with a 9% increase in the weekly incidence ratio (RR=1.09,
        95%CI: 1.07, 1.11). Decreased mobility levels have been necessary to
        control COVID-19 through the fall (threshold: 91.6% in August versus
        87.7% in November, p&lt;0.001). As of early December, mobility remains
        in excess of threshold levels in Ontario (4.3%), Quebec (3.7%) and
        Alberta (3.0%) but not in Manitoba (-2.8%).
      </p>
      <p>
        <strong>Interpretation. </strong> Mobility strongly and consistently
        predicts weekly case growth, and low levels of mobility are needed to
        control COVID-19 through the winter months. Mobility measures can be
        used to guide the provincial and regional implementation of physical
        distancing measures.
      </p>
    </Layout>
  );
}
