import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="app-component-image"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  image_src: '/photo%20(cds_2754%20c)-200w.jpg',
  image_alt: 'image',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
