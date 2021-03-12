import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkillTab from './SkillTab';
import './SkillTabs.css'

class SkillTabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }
  
  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  portfolioSearchKeyHander  = (tab) => {
    return this.props.portfolioSearchKeyHander(tab)
  }


  render() {
    const {
      onClickTabItem,
      portfolioSearchKeyHander,      
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;


    return (
      <div className="tabs">
        <ol className="tab-list"> 
          {
            children.map((child) => {          
              
              if(Array.isArray(child)) {
                // child is the Array of <div label={skill}></div>
                return child.map((item)=>{                  
                  const { label } = item.props;                     
                  return (
                    <SkillTab
                      activeTab={activeTab}
                      key={label}
                      label={label}
                      onClickTabItem={onClickTabItem}
                      portfolioSearchKeyHander={portfolioSearchKeyHander }
                    />
                  )
                })               
              } else {
                const { label } = child.props; 

                return (
                  <SkillTab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClickTabItem={onClickTabItem}
                    portfolioSearchKeyHander={portfolioSearchKeyHander }
                  />
                );
              }
            })     
          }
       
        </ol>
        <div className="category-content">
 
        </div>
      </div>
    );
  }
}

export default SkillTabs;