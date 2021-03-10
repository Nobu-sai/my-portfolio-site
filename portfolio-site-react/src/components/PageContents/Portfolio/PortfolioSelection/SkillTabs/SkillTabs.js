import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkillTab from './SkillTab';
import './SkillTabs.css'

class Tabs extends Component {
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

    // let listItems = ""

    // children.map((child)=>{
    //   if(Array.isArray(child)) {
    //     child.map((item)=> {
    //       const { label } = item.props
    //       listItems += 
    //         `      
    //         ${    
    //           <SkillTab
    //             activeTab={activeTab}
    //             key={label}
    //             label={label}
    //             onClickTabItem={onClickTabItem}
    //             portfolioSearchKeyHander={portfolioSearchKeyHander }
    //           />
 
    //         }
    //        `
    //     })
    //   } else {
    //     const { label } = child.props;
    //     listItems += 
    //       `     
    //       ${ 
    //         <SkillTab
    //         activeTab={activeTab}
    //         key={label}
    //         label={label}
    //         onClickTabItem={onClickTabItem}
    //         portfolioSearchKeyHander={portfolioSearchKeyHander }
    //       />
    //       }
    //       `
    //   }
    // })

    return (
      <div className="tabs">
        <ol className="tab-list">
          {/* {listItems} */}
          {
            children.map((child) => {            
              console.log(child)
              // console.log(child.props)    
              
              // let label = ""

              if(Array.isArray(child)) {
                // console.log(child)
                child.map((item)=>{
                  // label = item.props.label;
                  console.log(item.props)
                  const { label } = item.props    
                  console.log(label)
                  console.log(typeof label)

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
              } 
              // else {
              //   // label = child.props.label;
              //   const { label } = child.props; 
              //   // console.log(label)

              //   return (
              //     <SkillTab
              //       activeTab={activeTab}
              //       key={label}
              //       label={label}
              //       onClickTabItem={onClickTabItem}
              //       portfolioSearchKeyHander={portfolioSearchKeyHander }
              //     />
              //   );
              // }
                // return (
                //   <SkillTab
                //     activeTab={activeTab}
                //     key={label}
                //     label={label}
                //     onClickTabItem={onClickTabItem}
                //     portfolioSearchKeyHander={portfolioSearchKeyHander }
                //   />
                // );
              
              })
              // const { label } = child.props; 
              // console.log(label)

              // return (
              //   <SkillTab
              //     activeTab={activeTab}
              //     key={label}
              //     label={label}
              //     onClickTabItem={onClickTabItem}
              //     portfolioSearchKeyHander={portfolioSearchKeyHander }
              //   />
              // );
          }
        </ol>
        <div className="category-content">
 
        </div>
      </div>
    );
  }
}

export default Tabs;