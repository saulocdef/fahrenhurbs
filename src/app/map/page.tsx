"use client";
import { DSVRowArray } from 'd3';
import { Layout } from 'plotly.js-dist-min';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Map() {
    useEffect(() => {
        async function loadAndPlot() {
            const Plotly = (await import('plotly.js-dist-min')).default;
            const d3 = await import('d3');

            function unpackNumbers(rows: d3.DSVRowArray<string>, key: string): number[] {
                return rows.map(function (row) {
                    return +row[key];
                })
            };

            function mountHoverLabel(rows: d3.DSVRowArray<string>): string[] {
                const hoverLabels: string[] = [];
                rows.forEach(row => {
                    const label = `<b>${row['nome_cidade']}</b> <br><br>` +
                        `<b>Trends in exposition growth:</b> <br>` +
                        `Increase in exposition: ${row['coef_pdays']} <br>` +
                        `Increase in hot days: ${row['coef_totDays']} <br>` +
                        `Increase main cause: ${getPrincipalCausa(parseFloat(row['coef_attrib_norm']))} <br>`;
                    hoverLabels.push(label);
                });
                return hoverLabels;
            }

            function getPrincipalCausa(valor: number) {
                return valor > 0.5 ? 'population growth' : 'Increase in the frequency of extreme hot days';
            }

            const rows: DSVRowArray<string> = await d3.json('/dados.json') as DSVRowArray<string>;
            const data: Plotly.Data[] = [{
                type: 'scattergeo',
                mode: 'markers',
                lon: unpackNumbers(rows, 'longitude'),
                lat: unpackNumbers(rows, 'latitude'),
                marker: {
                    size: unpackNumbers(rows, 'coef_pdays'),
                    sizemode: 'diameter',
                    sizemin: 3,
                    sizeref: Math.max(...unpackNumbers(rows, 'coef_pdays')) / (50),
                    color: unpackNumbers(rows, 'coef_pdays'),
                    colorscale: 'Reds',
                    showscale: true,
                    symbol: 'circle',
                    colorbar: {
                        x: 0.5, // center horizontally
                        y: -0.2, // position below the map
                        orientation: 'h', // horizontal colorbar
                        thickness: 30,
                        len: 0.7,
                        xanchor: 'center',
                    },
                },
                text: mountHoverLabel(rows),
                hoverinfo: 'text'
            }];

            const layout: Partial<Layout> = {
                geo: {
                    scope: 'south america',
                    projection: {
                        type: 'mercator'
                    },
                    showland: true,
                    landcolor: 'rgba(122, 128, 122, 1)',
                    countrycolor: 'rgba(228, 235, 227, 1)',
                    bgcolor: '#7aa5a8ff',
                    showframe: true,
                },
                autosize: true,
                hovermode: 'closest',
                margin: { r: 0, t: 0, b: 0, l: 0 },
                paper_bgcolor: '#ffeed8',
            };

            Plotly.newPlot('map', data, layout);
        }
        loadAndPlot();
    }, []);

    return (
        <>
            <style jsx global>{`
            body {
                background: #ffeed8;
            }
            `}</style>
            <div className="rounded-md bg-green-700 text-white py-2 px-8 mb-10 mt-20 text-center max-w-xl mx-auto">
                <h1 className="text-2xl font-bold text-center">
                    Growth rate of exposure to extreme heat
                </h1>
            </div>
            <div
                id="map"
                style={{
                    margin: '0 auto',
                    width: '50%',
                    height: '100%',
                    display: 'block',
                    
                }}
                className="map-container"
            ></div>
            <Link
                href="/"
                style={{
                    position: 'fixed',
                    left: '24px',
                    bottom: '24px',
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: '#156b19',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 1000,
                    textDecoration: 'none',
                }}
                aria-label="Home"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 24 24">
                    <path d="M3 11.5V21a1 1 0 0 0 1 1h5v-6h6v6h5a1 1 0 0 0 1-1v-9.5a1 1 0 0 0-.293-.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 11.5z"/>
                </svg>
            </Link>
            <style jsx>{`
            @media (max-width: 600px) {
            .map-container {
                width: 100% !important;
                max-width: none;
            }
            }
            `}</style>
        </>
    );
}