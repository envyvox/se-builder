import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

class Clipboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewType: 0,
            viewCommand: "Name"
        }
    }

    render() {
        return (
            <div>
                <div className="cmd-name">
                    <h6>Spacing has been removed for compatibility with slash commands.<br/>
                        Just click Copy and then paste generated json into command.</h6>
                    <CopyToClipboard text={this.props.value}>
                        <button className="cmd-btn cmd-action whitney">Copy 🔗</button>
                    </CopyToClipboard>
                </div>
            </div>
        )
    }
}

export default Clipboard
