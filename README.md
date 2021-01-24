## To start

`npm run dev`

## API

#### `GET` requests

[`/api/google/country_regions`](https://mobilitygap.ca/api/google/country_regions): Returns all national-level data. For now, only Canadian data is available.

[`/api/google/country_regions/[country_region]`](https://mobilitygap.ca/api/google/country_regions/Canada): Returns all national-level data. For now, only Canadian data is available.

[`/api/google/sub_regions_1/`](https://mobilitygap.ca/api/google/sub_regions_1?country_region=Canada): Returns all mobility data at the subregion-level (e.g. provinces). Must specify country_region as parameter, e.g. append `?country_region=Canada`. If `pois=none` is provided, returns a list of sub_regions_1 (e.g. all the provinces). Can also filter by point-of-interest by providing a comma-separated list of pois, e.g. `poi=grocery_and_pharmacy_percent_change_from_baseline`.

[`/api/google/sub_regions_1/[sub_region_1]`](https://mobilitygap.ca/api/google/sub_regions_1/Ontario): Returns all mobility data for the specified subregion (e.g. Ontario). Can filter by point-of-interest as above.

[`/api/google/sub_regions_2?country_region=Canada`](https://mobilitygap.ca/api/google/sub_regions_2?country_region=Canada): Returns list of sub_regions_2 (i.e. census subdivisions) for the provided country_region (e.g. Canada)

[`/api/google/sub_regions_2/[sub_region_2]`](https://mobilitygap.ca/api/google/sub_regions_2/Division%20No.%201%20-%20Medicine%20Hata): Returns mobility data for specified sub_region_2 (i.e. census divisions). Can also filter by point-of-interest as above.
