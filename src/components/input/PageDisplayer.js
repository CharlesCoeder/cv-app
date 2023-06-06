import React, { Component } from "react";

class PageDisplayer extends Component {
    render(){

        return (
            <div>
                {this.props.page}
            </div>
        )
    }

}

export default PageDisplayer;