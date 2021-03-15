import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
class SkillTab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClickTabItem = () => {
    const { label, onClickTabItem } = this.props;
    onClickTabItem(label);
  }

  portfolioSearchKeyHander = () => {
    const { label, portfolioSearchKeyHander } = this.props;
    portfolioSearchKeyHander(label)
      // The clicked Tab's SkillTab.js/label Props is Sent to SkillTabs/addSearchSkills() Method/tab Param
      // -> which sends the label to PortfoliSelection.js/addSearchSkills Props which is sent Portfolio.js/portfolioSearchSkillsHandler() Method which ADDS the clicked skill to the LIST of skills to use to search for portfolio in Firestore. 
  }

  render() {
    const {
      onClickTabItem,
      portfolioSearchKeyHander,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active'
    }
 

    return (
      <div
        className={className}
          // Default = 'tab-list-item'
          // For ACTIVE one = 'tab-list-item tab-list-active'
        onClick={() => {
          onClickTabItem();
          portfolioSearchKeyHander();
        }}
      >
        {label}
      </div>
    );
  }
}

export default SkillTab;