#!/usr/bin/env node

var fs = require('fs'),
    csv = require('csv'),
    prompt = require('prompt'),
    keys = [], records = [],
    dmuLabel = 'DescriptionOfMapUnits file (CSV)',
    cssLabel = 'Output CartoCSS file';

prompt.get([dmuLabel, cssLabel], function (err, result) {
    var carto = fs.createWriteStream(result[cssLabel]);
    
    csv()
        .from.path(result[dmuLabel])
        .on('record', function (row, index) {
            if (index === 0) { keys = row; }
            else {
                var thisItem = {};
                row.forEach(function (cell, i) {
                    thisItem[keys[i]] = cell;
                });
                records.push(thisItem);
            }
        })
        .on('end', function () {
            carto.write('#mapunitpolys {\n');
            records.forEach(function (unit) {
                var delimiter = /[^0-9]/.exec(unit.AreaFillRGB),
                    rgb = unit.AreaFillRGB.split(delimiter);
                carto.write('  [MapUnit=\'' + unit.MapUnit + '\'] {');
                carto.write(' polygon-fill: rgb(' + rgb.join(',') + '); }\n');
            });
            carto.write('}');
        });
});

