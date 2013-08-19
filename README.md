# dmu2css

Reads an [NCGMP09 DescriptionOfMapUnits table](http://ncgmp09.github.io/core-content.html#descriptionofmapunits) from a .csv file and writes a [CartoCSS](http://www.mapbox.com/tilemill/docs/manual/carto/) stylesheet that can be used in [Tilemill](http://www.mapbox.com/tilemill/).

## Install

    npm install -g dmu2css
    
## Run

Just `dmu2css`.

You will be prompted for two pieces of information:

1. DescriptionOfMapUnits file (CSV): Enter the path to a DescriptionOfMapUnits .csv file
2. Output CartoCSS file: Enter the path to where you'd like it to write your CartoCSS file
