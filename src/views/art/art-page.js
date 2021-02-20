import React from 'react';

import { connect } from 'react-redux';
import { addArt } from '../../redux/art/art-actions'

import './art-page.scss';

const ArtPage = ({ addArt }) => {

  return (
    <div className='art-page'>
      <div className='art-items'>
        <div onClick={() => addArt("This art item")} className='art-item'>
          <img src='https://format-com-cld-res.cloudinary.com/image/private/s--PK6Qtjbg--/c_limit,g_center,h_65535,w_2500/fl_keep_iptc.progressive,q_95/v1/2eb0fde8a820cc97ae65f4f944341858/Eye_Peacock_sm.jpg?2500' alt='' />
        </div>
        <div onClick={() => addArt("Different art item")} className='art-item'>
          <img src='https://format-com-cld-res.cloudinary.com/image/private/s--UgIqpyG4--/c_limit,g_center,h_65535,w_2500/fl_keep_iptc.progressive,q_95/v1/f14f32be30c0dfd6632226c7654ca5c8/Eye_Mandala_etching.jpg?2500' alt='' />
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addArt: art => dispatch(addArt(art))
});

export default connect(null, mapDispatchToProps)(ArtPage);