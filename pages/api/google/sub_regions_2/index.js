const database = require("../../../../lib/db");
const pgp = database.pgp;
const db = database.db;

export default async (req, res) => {
  try {
    const { country_region, pois } = req.query;

    let sql;
    if (pois) {
      if (pois == "none") {
        sql = pgp.as.format(
          "SELECT distinct sub_region_2 FROM public.canada WHERE country_region=$1 AND sub_region_1 is not null",
          country_region
        );
      } else {
        const pois_ls = pois.split(",");
        sql = pgp.as.format(
          "SELECT country_region, sub_region_1, sub_region_2, date, ${columns:name} FROM public.canada WHERE country_region=$/country_region/ AND sub_region_2 is not null",
          { columns: pois_ls, country_region }
        );
      }
    } else {
      sql = pgp.as.format(
        "SELECT country_region, sub_region_1, sub_region_2, date, retail_and_recreation_percent_change_from_baseline, grocery_and_pharmacy_percent_change_from_baseline, parks_percent_change_from_baseline, transit_stations_percent_change_from_baseline, workplaces_percent_change_from_baseline, residential_percent_change_from_baseline FROM public.canada WHERE country_region=$/country_region/ AND sub_region_2 is not null",
        { country_region }
      );
    }
    const post = await db.any("$1:raw", sql);

    res.status(200).json(post);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
