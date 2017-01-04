import {List, fromJS} from 'immutable'
import {
  CLIENT_RESULT_POST
} from '../action/client_action'
const ACTION_HANDLERS = {
  [CLIENT_RESULT_POST]: (state, action) => (
    state.merge({...state, result: action.result})
  )
}

const initialState = fromJS({
  fecting: false,
  result: ''
})
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
