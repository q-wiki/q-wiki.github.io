import React from 'react';
import PropTypes from 'prop-types'

// E.G. : document => Icon name, wird in props übergeben
// svg content in https://www.svgminify.com/ kopieren und alle <paths> <polygon> in array schreiben, s. unten
// am besten dann bei Icons ne width und height mit als prop übergeben, hab aber nen default auf 100
const icons = {
    documents: {
    	paths: [
    		"m60.859 112.53c-6.853 0-6.853 10.646 0 10.646h81.875c6.865 0 6.865-10.646 0-10.646h-81.875z", "m142.73 137.7h-81.875c-6.853 0-6.853 10.634 0 10.634h81.875c6.866 0 6.866-10.634 0-10.634z", "m142.73 161.02h-81.875c-6.853 0-6.853 10.633 0 10.633h81.875c6.866-1e-3 6.866-10.633 0-10.633z", "m142.73 186.18h-81.875c-6.853 0-6.853 10.629 0 10.629h81.875c6.866-1e-3 6.866-10.629 0-10.629z", "m141.17 209.93h-81.89c-6.848 0-6.848 10.633 0 10.633h81.89c6.845-1e-3 6.845-10.633 0-10.633z", "m25.362 58.087v198.52h152.88v-170.98l-28.406-27.543h-124.47zm139.66 185.31h-126.44v-172.09h104.44v20.97h21.988v151.12h0.01z"],
		polygons: [
            "51.204 27.667 51.204 50.645 64.427 50.645 64.427 40.88 168.88 40.88 168.88 61.85 190.87 61.85 190.87 212.97 185.06 212.97 185.06 226.19 204.09 226.19 204.09 55.205 175.68 27.667", "202.84 0 78.363 0 78.363 22.983 91.581 22.983 91.581 13.218 196.03 13.218 196.03 34.188 218.02 34.188 218.02 185.31 212.22 185.31 212.22 198.52 231.25 198.52 231.25 27.543"
		]
	}
};

const Icon = props => (
    <svg width={props.width?props.width:100} height={props.height?props.height:100} viewBox="0 0 1024 1024">
		{icons[props.icon].paths.map(function(path, p){
			return <path d={icons[props.icon].paths[p]}/>
		})}
        {icons[props.icon].polygons.map(function(path, p){
            return <polygon points={icons[props.icon].polygons[p]}/>
        })}
    </svg>
);

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
};

export default Icon;