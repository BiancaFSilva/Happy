import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/global.css';
import '../styles/pages/orphanagesMap.css';

import mapMarkerImg from '../img/map-marker.svg';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Ribeirão Pires</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map  center={[-23.7054551,-46.417906]} zoom={14} style={{ width: '100%', height: '100%' }} > 
              {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> 
            </Map>

            <Link to="/" className="create-orphanage"> 
                <FiPlus  size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;