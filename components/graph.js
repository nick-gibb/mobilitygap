import { defaults } from "react-chartjs-2";
defaults.global.animation = false;
import { Scatter } from "react-chartjs-2";
import React, { useEffect } from "react";
const poi_colours = {
  grocery_and_pharmacy_percent_change_from_baseline: "#003f5c",
  workplaces_percent_change_from_baseline: "#444e86",
  residential_percent_change_from_baseline: "#955196",
  retail_and_recreation_percent_change_from_baseline: "#dd5182",
  transit_stations_percent_change_from_baseline: "#ff6e54",
  workplaces_percent_change_from_baseline: "#ffa600",
};

const poi_labels = {
  grocery_and_pharmacy_percent_change_from_baseline: "Grocery and pharmacy",
  workplaces_percent_change_from_baseline: "Workplaces",
  residential_percent_change_from_baseline: "Residential",
  retail_and_recreation_percent_change_from_baseline: "Retail and recreation",
  transit_stations_percent_change_from_baseline: "Transit stations",
  workplaces_percent_change_from_baseline: "Workplaces",
};

// const pois = Object.keys(poi_colours);

export default function Graph({ region_1, pois }) {
  const [displaydata, setDisplaydata] = React.useState([]);

  useEffect(() => {
    console.log(displaydata);
    if (region_1 === undefined || region_1.length == 0 || !pois) {
      setDisplaydata([]);
      return;
    }
    let displayed_pois = Object.keys(
      Object.keys(pois).reduce((o, key) => {
        pois[key] !== false && (o[key] = pois[key]);
        return o;
      }, {})
    );
    const query_pois = "?pois=" + displayed_pois.join(",");
    const fetchData = async (region_list) => {
      // setDisplaydata([]);
      const urls = region_list.map(
        (region) => `api/google/sub_regions_1/${region}${query_pois}`
      );
      const json = (r) => r.json();
      const status = (r) =>
        r.ok ? Promise.resolve(r) : Promise.reject(new Error(r.statusText));
      const toRequest = (url) => fetch(url).then(status).then(json);
      const onError = (e) => {
        console.log("Whoops something went wrong!", e);
      };
      let datasets = [];
      setDisplaydata([]);
      const consumeData = (allData) => {
        allData.forEach((regionData) => {
          const region_name = regionData[0]["sub_region_1"];
          const formatted_region_data = displayed_pois.map((poi) => ({
            label: `${region_name} - ${poi_labels[poi]}`,
            region_name: region_name,
            poi: poi,
            data: [],
            borderColor: poi_colours[poi],
            pointBorderColor: poi_colours[poi],
            pointBackgroundColor: poi_colours[poi],
            pointHoverBackgroundColor: poi_colours[poi],
            pointHoverBorderColor: poi_colours[poi],
            fill: false,
            pointRadius: 2,
            borderWidth: 2,
          }));
          regionData.forEach((datapoint) => {
            const datestamp = datapoint["date"]; // One date for many POI values
            let y;
            displayed_pois.forEach((poi) => {
              y = datapoint[poi];
              formatted_region_data.forEach((poi_region, i) => {
                if (poi_region["poi"] == poi) {
                  formatted_region_data[i]["data"].push({ t: datestamp, y: y });
                }
              });
            });
          });

          formatted_region_data.forEach((poi_region, i) => {
            setDisplaydata((oldArray) => [...oldArray, poi_region]);
          });
        });
      };

      Promise.all(urls.map(toRequest)).then(consumeData).catch(onError);
    };
    if (!(region_1 === undefined || region_1.length == 0)) {
      fetchData([region_1]);
    }
  }, [region_1, pois]);

  return displaydata.length == 0 ? (
    ""
  ) : (
    <Scatter
      data={{ datasets: displaydata }}
      options={{
        maintainAspectRatio: false,
        responsive: true,

        title: {
          ticks: { source: "data" },
          // display: true,
          text: "Mobility Trends",
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Mobility relative to baseline",
              },
            },
          ],
          xAxes: [
            {
              type: "time",
              time: {
                unit: "month",
              },
            },
          ],
        },
      }}
    />
  );
}
