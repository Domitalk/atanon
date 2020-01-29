import React from 'react'

class Reaction extends React.Component {
    render() {
        return (
            <div>
                {this.props.post.heart}: hearts
                {this.props.post.smile}: smiles 
                {this.props.post.sad}: sads 
                {this.props.post.angry}: angries 
                {/* reaction */}
            </div>
        )
    }
}

export default Reaction