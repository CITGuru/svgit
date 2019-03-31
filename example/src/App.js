import React, { Component } from 'react'

import SVGIT from 'svgit'

export default class App extends Component {
  render () {
    return (
      <div>
        <SVGIT 
        width="120" 
        height="120" 
        title="Custom title"
        selector={{index:4, attrs: { fill:"yellow" }}}
        selectors={[
          {index:1, attrs: { width: "20", height: "30", fill:"#3f51b5" }},
          {index:4, attrs: { fill:"#3f51b5" }},
        ]}
        onLoad={function(){
          console.log("Yea")
        }}
        src='https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/page_not_found_su7k.svg' />
      </div>
    )
  }
}
