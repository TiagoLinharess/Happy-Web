import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMoon } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import MapMarkerImg from '../../images/map-marker.svg';

import '../../styles/pages/orphanages-map.css';

const OrphanagesMap: React.FC = () => {
  const [theme, setTheme] = useState('streets-v11');

  useEffect(() => {
    const timeHour = new Date().getHours();
    
    if (timeHour > 17 || timeHour < 5) {
      setTheme('dark-v10');
    } else {
      setTheme('streets-v11');
    }
  }, []);

  function changeTheme() {

    if (theme === 'streets-v11') {
      setTheme('dark-v10');
    } else {
      setTheme('streets-v11');
    }
  }

  return (
      <div id="page-map">
          <aside>
              <header>
                  <img src={MapMarkerImg} alt="MapMarker"/>

                  <h2>Escolha um orfanato no mapa</h2>

                  <p>Muitas crianças estão esperando a sua visita</p>
              </header>

              <footer>
                  <strong>
                        Rio de Janeiro
                  </strong>
                  <span>
                        Rio de Janeiro
                  </span>
              </footer>
          </aside>

          <Map 
            center={[-22.9271458,-43.3719571]}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/${theme}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
          </Map>

          <button className="create-orphanage change-theme" onClick={changeTheme}>
            <FiMoon size={32} color="#fff"/>
          </button>

          <Link to="/" className="create-orphanage">
            <FiPlus size={32} color="#fff"/>
          </Link>
      </div>
  );
}

export default OrphanagesMap;