//https://docs.mapbox.com/mapbox-gl-js/example/mouse-position/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'mapbox-gl/src/css/mapbox-gl.css';
import ReactMapGL from 'react-map-gl';

export default class Mapbox_dash extends Component {
state = {
    year: 2015,
    data: null,
    hoveredFeature: null,
    viewport: {
      width: 800,
      height: 800,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };
render() {
const {id,mouse_position,viewport,MAPBOX_TOKEN,setProps} = this.props
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle= "mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => this.setState({viewport})}
        onClick={event => {
            const {
              features,
              srcEvent: {offsetX, offsetY}
            } = event;
            setProps({mouse_position:{x_prop:offsetX,y_prop:offsetY}})
            console.log(mouse_position)
            }
        }
      >
      </ReactMapGL>
    );
  }
}

Mapbox_dash.defaultProps = {viewport:{width: 800,
      height: 800,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8},
      MAPBOX_TOKEN :"pk.eyJ1IjoiYWxpc2hvYmVpcmkiLCJhIjoiY2ozYnM3YTUxMDAxeDMzcGNjbmZyMmplZiJ9.ZjmQ0C2MNs1AzEBC_Syadg"

      };

Mapbox_dash.propTypes = {
    id: PropTypes.string,
    mouse_position: PropTypes.shape({x_prop: PropTypes.number,
    y_prop: PropTypes.number}),
    viewport: PropTypes.shape({width: PropTypes.number,
    height: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number}),
    MAPBOX_TOKEN:PropTypes.string,
    setProps: PropTypes.func
};


/*
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'mapbox-gl/src/css/mapbox-gl.css';
import ReactMapGL from 'react-map-gl';
const MAPBOX_TOKEN = "pk.eyJ1IjoiYWxpc2hvYmVpcmkiLCJhIjoiY2ozYnM3YTUxMDAxeDMzcGNjbmZyMmplZiJ9.ZjmQ0C2MNs1AzEBC_Syadg"

export default class Mapbox_dash extends Component {
state = {
    year: 2015,
    data: null,
    hoveredFeature: null,
    viewport: {
      width: 800,
      height: 800,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };
render() {
const {viewport} = this.state;
const {id,mouse_position,setProps} = this.props
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle= "mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => this.setState({viewport})}
        onHover={event => {
            const {
              features,
              srcEvent: {offsetX, offsetY}
            } = event;
            setProps({mouse_position:{x_prop:offsetX,y_prop:offsetY}})
            console.log(mouse_position)
            }
        }
      >
      </ReactMapGL>
    );
  }
}

Mapbox_dash.defaultProps = {};
Mapbox_dash.propTypes = {
    id: PropTypes.string,
    mouse_position: PropTypes.shape({x_prop: PropTypes.number,
    y_prop: PropTypes.number}),

    setProps: PropTypes.func
};
*/
/*
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'mapbox-gl/src/css/mapbox-gl.css';
import ReactMapGL from 'react-map-gl';
const MAPBOX_TOKEN = "pk.eyJ1IjoiYWxpc2hvYmVpcmkiLCJhIjoiY2ozYnM3YTUxMDAxeDMzcGNjbmZyMmplZiJ9.ZjmQ0C2MNs1AzEBC_Syadg"

export default class Mapbox_dash extends Component {
state = {
    year: 2015,
    data: null,
    hoveredFeature: null,
    viewport: {
      width: 800,
      height: 800,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

componentDidMount(){

}
componentWillMount(){}

  _renderTooltip() {
    const {hoveredFeature, x, y} = this.state;
    console.log(x,y)


    return (
      hoveredFeature && (
        <div className="tooltip" style={{left: x, top: y}}>
          <div>State: {hoveredFeature.properties.name}</div>
          <div>Median Household Income: {hoveredFeature.properties.value}</div>
          <div>Percentile: {(hoveredFeature.properties.percentile / 8) * 100}</div>
        </div>
      )
    );
  }

render() {
const {viewport} = this.state;
const {id,x_prop,y_prop,setProps} = this.props


    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle= "mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => this.setState({viewport})}
        onHover={event => {
            const {
              features,
              srcEvent: {offsetX, offsetY}
            } = event;
            //const hoveredFeature = features && features.find(f => f.layer.id === 'data');

            console.log(offsetX)
            //console.log(x_prop)
            //this.setState({hoveredFeature, x: offsetX, y: offsetY});
            setProps({x_prop:offsetX,y_prop:offsetY})
            console.log(x_prop)
            }
  }
      >
      {this._renderTooltip()}

      </ReactMapGL>
    );
  }
}

Mapbox_dash.defaultProps = {};
Mapbox_dash.propTypes = {
    id: PropTypes.string,
    x_prop: PropTypes.number,
    y_prop: PropTypes.number,
    setProps: PropTypes.func
};
*/
/*

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'mapbox-gl/src/css/mapbox-gl.css';
import MapGL from 'react-map-gl';
const MAPBOX_TOKEN = "pk.eyJ1IjoiYWxpc2hvYmVpcmkiLCJhIjoiY2ozYnM3YTUxMDAxeDMzcGNjbmZyMmplZiJ9.ZjmQ0C2MNs1AzEBC_Syadg"

class MapboxReact extends Component{
componentDidMount(){

}
componentWillMount(){}
render(){const {id, label, value1} = this.props;
        return (
            <div id={id}>
                <MapGL
                  width="50%"
                  height="50%"
                  mapStyle="mapbox://styles/mapbox/dark-v9"
                  mapboxApiAccessToken={MAPBOX_TOKEN}
                  onHover={this._onHover}
                >
                </MapGL>
                <input
                    value={value1}
                />
            </div>
        );
}
}
MapboxReact.propTypes = {
    id: PropTypes.string,
    value1: PropTypes.string
    }
export default class Mapbox_dash extends Component {
    render() {
        const {id, value1} = this.props;
        return (
            <div>
                <MapboxReact
                    id = {id}
                    value1 = {value1}
                />
            </div>
        );
    }
}

Mapbox_dash.defaultProps = {};
Mapbox_dash.propTypes = {
    id: PropTypes.string,
    value1: PropTypes.string
};
*/
/*
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'mapbox-gl/src/css/mapbox-gl.css';
import MapGL from 'react-map-gl';
const MAPBOX_TOKEN = "pk.eyJ1IjoiYWxpc2hvYmVpcmkiLCJhIjoiY2ozYnM3YTUxMDAxeDMzcGNjbmZyMmplZiJ9.ZjmQ0C2MNs1AzEBC_Syadg"

class MapboxReact extends Component{
componentDidMount(){

}
componentWillMount(){}
render(){const {id, label, setProps, value1} = this.props;
        return (
            <div id={id}>
                <MapGL
                  width="50%"
                  height="50%"
                  mapStyle="mapbox://styles/mapbox/dark-v9"
                  mapboxApiAccessToken={MAPBOX_TOKEN}
                  onHover={this._onHover}
                >
                </MapGL>
                <input
                    value={value1}
                />
            </div>
        );
}
}
MapboxReact.propTypes = {
    id: PropTypes.string,
    value1: PropTypes.string,
    setProps: PropTypes.func
    }


export default class Mapbox_dash extends Component {
    render() {
        const {id, setProps, value1} = this.props;
        return (
            <div>
                <MapboxReact
                    id = {id}
                    value1 = {value1}
                />
            </div>
        );
    }
}

Mapbox_dash.defaultProps = {};
Mapbox_dash.propTypes = {
    id: PropTypes.string,
    value1: PropTypes.string,
    setProps: PropTypes.func
};
*/