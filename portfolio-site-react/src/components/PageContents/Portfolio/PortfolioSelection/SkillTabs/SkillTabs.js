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

  portfolioSearchKeyHandler  = (tab) => {
    return this.props.portfolioSearchKeyHandler(tab)
  }


  render() {
    const {
      onClickTabItem,
      portfolioSearchKeyHandler,      
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;


    return (
      <div className="tabs">
        <div className="tab-list"> 
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
                      portfolioSearchKeyHandler={portfolioSearchKeyHandler }
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
                    portfolioSearchKeyHandler={portfolioSearchKeyHandler }
                  />
                );
              }
            })     
          }
       
        </div>
                
      </div>
    );
  }
}

export default SkillTabs;