import React, { Component } from 'react'
import {render} from 'react-dom'
import BetClickInfo from "./BetClickInfo"
import BetPlacementResponse from "./BetPlacementResponse"
import ComboBet from "./ComboBet"


export default class BetPlacementContainer extends Component{

     constructor(props){
         super(props)
         this.state = {ChildrenComponent : props.ChildrenComponent}
     }
     
     renderChildrenComponent(ChildrenComponent){
         this.setState({ChildrenComponent : ChildrenComponent})
     }
     
     render (){
         var Children = BetPlacementComponentFactory.getComponentsObjs(this.state.ChildrenComponent, this)
     
         return(
             <div>
                 {Children}
             </div>
         )
     }

}

const ComponentDict = {
    'BetClickInfo' : BetClickInfo,
    'BetPlacementResponse' : BetPlacementResponse,
    'ComboBet' : ComboBet
}

class BetPlacementComponentFactory {

      constructor(){
          this.ComponentDict= {
              'BetClickInfo' : BetClickInfo,

          }
      }

      static getComponentsObjs(componentsNames, parentComponent){
          var components = []

          componentsNames.map((child, index) => {
              var Child = ComponentDict[child];
              components.push(<Child key={index} parentComponent={parentComponent}/>)
          })

        return components
    }
}

