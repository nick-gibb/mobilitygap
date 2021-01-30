import { defaults } from "react-chartjs-2";
defaults.global.animation = false;
import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

const poi_colours = {
  grocery_and_pharmacy_percent_change_from_baseline: "#003f5c",
  workplaces_percent_change_from_baseline: "#444e86",
  residential_percent_change_from_baseline: "#955196",
  retail_and_recreation_percent_change_from_baseline: "#dd5182",
  transit_stations_percent_change_from_baseline: "#ff6e54",
  workplaces_percent_change_from_baseline: "#ffa600",
};

export default function Graph({ region_1, region_2 }) {
  const [datasets, setDatasets] = React.useState([]);

  useEffect(() => {
    fetch(`api/google/sub_regions_1/Ontario`, {
      mode: "no-cors",
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(function (data) {
          const formatted_data = {};
          data.forEach((datapoint) => {
            // const datestamp = new Date(datapoint["date"]).toDateString();
            const datestamp = datapoint["date"];

            let label;
            let y;

            Object.keys(poi_colours).forEach((poi) => {
              y = datapoint[poi];
              label = poi + ` (${datapoint["sub_region_1"]})`;

              if (label in formatted_data) {
                formatted_data[label].push({ t: datestamp, y: y });
              } else {
                formatted_data[label] = [{ t: datestamp, y: y }];
              }
            });
          });
          const datasets_temp = [];
          Object.keys(formatted_data).forEach((key) => {
            const colour = poi_colours[key.split(" ")[0]];
            const temp = {
              data: formatted_data[key],
              label: key,
              borderColor: colour,
              pointBorderColor: colour,
              pointBackgroundColor: colour,
              pointHoverBackgroundColor: colour,
              pointHoverBorderColor: colour,
              fill: false,
              borderWidth: 2,
            };
            datasets_temp.push(temp);
          });
          setDatasets(datasets_temp);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, [region_1]);
  console.log(datasets);
  return (
    <Line
      data={{ datasets: datasets }}
      options={{
        title: {
          ticks: { source: "data" },
          display: true,
          text: "Mobility Trends",
        },
        scales: {
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
