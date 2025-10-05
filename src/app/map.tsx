import Plotly from 'plotly.js';
import * as d3 from 'd3';

export default function Map() {
    function unpack(rows, key) {
        return rows.map(function (row) {
            return row[key];
        })
    };

    d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/earthquakes-23k.csv',
        function (err, rows) {
            var data = [{
                lon: unpack(rows, 'Longitude'), lat: unpack(rows, 'Latitude'), radius: 10,
                z: unpack(rows, 'Magnitude'), type: "densitymap", coloraxis: 'coloraxis',
                hoverinfo: 'skip'
            }];

            var layout = {
                map: { center: { lon: 60, lat: 30 }, style: "outdoors", zoom: 2 },
                coloraxis: { colorscale: "Viridis" }, title: { text: "Earthquake Magnitude" },
                width: 600, height: 400, margin: { t: 30, b: 0 }
            };

            Plotly.newPlot('myDiv', data, layout);
        })


    return (
        <div id="myDiv" style={{ width: '100%', height: '100%' }}>
            <h1>Map</h1>
        </div>
    );
}
