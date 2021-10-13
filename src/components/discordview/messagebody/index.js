import { connect } from 'react-redux'
import { setMessageBody } from 'constants/actions'
import { parse, jumboify } from 'lib/markdown'
import MessageBody from './messagebody'

const mapStateToProps = (state) => {
  return {
    parsedContent: parse(state.messageBody, true, {}, jumboify),
    content: state.messageBody
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (content) => {
      dispatch(setMessageBody(content))
    }
  }
}

const MessageBodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBody)

export default MessageBodyContainer