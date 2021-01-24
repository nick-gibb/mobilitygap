const database = require("../../../../lib/db");
const db = database.db;

export default async (req, res) => {
  try {
    const { country_region, pois } = req.query;
    let requested_pois = [];
    if (pois) {
      requested_pois = pois.split(",");
    } else {
      requested_pois = [
        "retail_and_recreation_percent_change_from_baseline",
        "grocery_and_pharmacy_percent_change_from_baseline",
        "parks_percent_change_from_baseline",
        "transit_stations_percent_change_from_baseline",
        "workplaces_percent_change_from_baseline",
        "residential_percent_change_from_baseline",
      ];
    }

    const post = await db.any(
      "SELECT ${columns:name} FROM public.canada WHERE country_region=${country_region} AND sub_region_1 is null AND sub_region_2 is null",
      {
        columns: ["country_region", "date", ...requested_pois],
        country_region,
      }
    );

    res.status(200).json(post);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
