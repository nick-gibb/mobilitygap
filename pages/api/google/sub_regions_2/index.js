const database = require("../../../../lib/db");
const pgp = database.pgp;
const db = database.db;

export default async (req, res) => {
  try {
    let { country_region } = req.query;

    let sql;

    if (!country_region) {
      country_region = "Canada";
    }

    sql = pgp.as.format(
      "SELECT distinct sub_region_2 FROM public.canada WHERE country_region=$1 AND sub_region_1 is not null",
      country_region
    );

    const post = await db.any("$1:raw", sql);

    res.status(200).json(post);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
