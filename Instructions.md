#How to make dash component from javascript
1. run boilerplate
cookiecutter https://github.com/plotly/dash-component-boilerplate.git
use capital letter for component
2. download and install javascript package

npm install --save react-map-gl
npm install babel-plugin-transform-class-properties  --save

add "plugins": ["transform-class-properties"] to .babelrc
3. Run demo js to see if the component works
npm run start
4. Build dash component:
npm run build:all
5. Try the component in python:
run usage.py

3. Edit file dash_mapbox.react: add the following line to the file
import mapboxgl from 'mapbox-gl'
4. Address: http://127.0.0.1:8080/

Example page:
https://docs.mapbox.com/mapbox-gl-js/example/mouse-position/
