import { defaults } from "react-chartjs-2";
defaults.global.animation = false;
import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import axios from "axios";

const poi_colours = {
  grocery_and_pharmacy_percent_change_from_baseline: "#003f5c",
  workplaces_percent_change_from_baseline: "#444e86",
  residential_percent_change_from_baseline: "#955196",
  retail_and_recreation_percent_change_from_baseline: "#dd5182",
  transit_stations_percent_change_from_baseline: "#ff6e54",
  workplaces_percent_change_from_baseline: "#ffa600",
};

const pois = Object.keys(poi_colours);

export default function Graph({ region_1 }) {
  const [displaydata, setDisplaydata] = React.useState([]);
  const [datamart, setDatamart] = React.useState({});

  useEffect(() => {
    const fetchData = async (region_list) => {
      setDisplaydata([]);
      const urls = region_list.map(
        (region) => `api/google/sub_regions_1/${region}`
      );
      const json = (r) => r.json();
      const status = (r) =>
        r.ok ? Promise.resolve(r) : Promise.reject(new Error(r.statusText));
      const toRequest = (url) => fetch(url).then(status).then(json);
      const onError = (e) => {
        console.log("Whoops something went wrong!", e);
      };
      let datasets = [];
      const consumeData = (allData) => {
        const all_formatted_data = [];
        allData.forEach((regionData) => {
          const region_name = regionData[0]["sub_region_1"];
          const formatted_region_data = pois.map((poi) => ({
            label: `${poi} ${region_name}`,
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
            pois.forEach((poi) => {
              y = datapoint[poi];
              //   label = region_labels[poi];

              formatted_region_data.forEach((poi_region, i) => {
                if (poi_region["poi"] == poi) {
                  formatted_region_data[i]["data"].push({ t: datestamp, y: y });
                }
              });
            });
          });
          console.log(formatted_region_data);
          formatted_region_data.forEach((poi_region, i) => {
            setDisplaydata((oldArray) => [...oldArray, poi_region]);
          });

          // all_formatted_data.push(formatted_region_data);
          // setDisplaydata((oldArray) => [...oldArray, formatted_region_data]);
        });
      };

      Promise.all(urls.map(toRequest)).then(consumeData).catch(onError);

      //   const datasets_temp = [];
      //   Object.keys(formatted_data).forEach((key) => {
      //     const colour = poi_colours[key.split(" ")[0]];
      //     const temp = {
      //       data: formatted_data[key],
      //       label: key,
      //       borderColor: colour,
      //       pointBorderColor: colour,
      //       pointBackgroundColor: colour,
      //       region: region,
      //       pointHoverBackgroundColor: colour,
      //       pointHoverBorderColor: colour,
      //       fill: false,
      //       pointRadius: 2,
      //       borderWidth: 2,
      //     };
      //     datasets_temp.push(temp);
      //   });
      //   const test_obj = {};
      //   test_obj[region] = data;

      //   setDatamart((datamart) => ({
      //     ...datamart,
      //     [region]: datasets_temp,
      //   }));
      //   //   datamart1[region_1] = datasets_temp;
    };
    if (!(region_1 === undefined || region_1.length == 0)) {
      fetchData(region_1);
    }
    console.log(datamart);
    // setDisplaydata(datamart);
  }, [region_1]);

  return (
    <Line
      data={{ datasets: displaydata }}
      options={{
        maintainAspectRatio: false,
        responsive: true,

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
