import React, {Component} from 'react';
import './ParkingsignIcon.css'

const SvgComponent = ({ svgRef, title, ...props }) => (
    <svg viewBox="0 0 512 512" width="1em" height="1em" ref={svgRef} {...props}>
        <title>{title}</title>
        <path
            d="M136 376c0 8.277 6.723 15 15 15s15-6.723 15-15v-15h-30zm0 0M353.617 161.254A14.997 14.997 0 0 0 339.38 151H172.62a14.997 14.997 0 0 0-14.238 10.254L141.805 211h228.39zm0 0M346 376c0 8.277 6.723 15 15 15s15-6.723 15-15v-15h-30zm0 0"
            data-original="#000000"
            className="active-path"
            data-old_color="#56dbd1"
            fill="#56dbd1"
        />
        <path
            d="M436 0H76C34.648 0 0 33.648 0 75v362c0 41.352 34.648 75 76 75h360c41.352 0 76-33.648 76-75V75c0-41.352-34.648-75-76-75zm0 256v60c0 19.531-12.578 36.023-30 42.238V376c0 24.813-20.188 45-45 45s-45-20.188-45-45v-15H196v15c0 24.813-20.188 45-45 45s-45-20.188-45-45v-17.762C88.578 352.023 76 335.531 76 316v-60c0-14.648 7.14-27.555 18.012-35.777l-13.617-13.618c-5.86-5.859-5.86-15.351 0-21.21s15.351-5.86 21.21 0l12.84 12.84 15.489-46.473A44.95 44.95 0 0 1 172.62 121H339.38a44.95 44.95 0 0 1 42.687 30.762l15.489 46.472 12.84-12.84c5.859-5.859 15.351-5.859 21.21 0s5.86 15.352 0 21.211l-13.617 13.618C428.86 228.445 436 241.352 436 256zm0 0"
            data-original="#000000"
            className="active-path"
            data-old_color="#56dbd1"
            fill="#56dbd1"
        />
        <path
            d="M391 241H121c-8.277 0-15 6.723-15 15v15h45c8.29 0 15 6.71 15 15s-6.71 15-15 15h-45v15c0 8.277 6.723 15 15 15h75v-15c0-8.29 6.71-15 15-15s15 6.71 15 15v15h60v-15c0-8.29 6.71-15 15-15s15 6.71 15 15v15h75c8.277 0 15-6.723 15-15v-15h-45c-8.29 0-15-6.71-15-15s6.71-15 15-15h45v-15c0-8.277-6.723-15-15-15zm0 0"
            data-original="#000000"
            className="active-path"
            data-old_color="#56dbd1"
            fill="#56dbd1"
        />
    </svg>
)

const ParkingsignIcon = React.forwardRef((props, ref) => (
    <SvgComponent svgRef={ref} {...props} />
))

export default ParkingsignIcon
