import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Sapogov from './SpeechDistribution/Sapogov';
import Yarkho from './SpeechDistribution/Yarkho';

class SpeechDistribution extends Component {
  render () {
    const {segments} = this.props;

    return (
      <div style={{width: '100%'}}>
        <div className="speech-dist-container d-flex">
          <div style={{position: 'relative', width: '90%'}}>
            <Sapogov segments={segments}/>
          </div>
          <div style={{position: 'relative', width: '90%'}}>
            <Yarkho segments={segments}/>
          </div>
        </div>
        <br/>
        <p>
          {'Cf. '}
          <a href="https://www.zotero.org/groups/940512/dlina/items/itemKey/BU7ZB3LY">
            Sapogov 1974
          </a>
          {', '}
          <a href="http://rvb.ru/philologica/04/04iarxo.htm">Yarkho 1997</a>
        </p>
      </div>
    );
  }
}

SpeechDistribution.propTypes = {
  segments: PropTypes.array.isRequired
};

export default SpeechDistribution;