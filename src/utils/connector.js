/**
 * Connects a component to the redux store and dispatch functions
 * Proposition: one import to take care of accessing store and actions
 *
 * Provides access to state + actions by rendering children as function
 *
 * Usage:
 * ```
 * <Connector>
 *  {
 *    ({ state, actions }) => {
 *      // state and actions are organized as
 *      // state.someModule.foo, actions.someModule.actions, etc
 *      // do something with state, actions
 *    }
 *  }
 * </Connector>
 * ```
 *
 * To Add Actions:
 * - import actions
 * - add to the `actionList` with a label and value
 */
import { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as appActions } from 'modules/app.module'

class Connector extends Component {
  render() {
    const { state, actions, children } = this.props

    return children({ state, actions })
  }
}

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = (dispatch) => {
  const actionList = [
    // label: String, value: Object
    { label: 'app', value: appActions },
    // add more actions here
  ]

  return {
    actions: actionList.reduce(
      (prev, cur) => ({
        ...prev,
        [cur.label]: bindActionCreators(cur.value, dispatch),
      }),
      {},
    ),
  }
}

Connector.propTypes = {
  state: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func])
    .isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Connector)
