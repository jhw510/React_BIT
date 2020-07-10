import {createStore} from 'redux'
import {createBrowserHistory} from 'history'
import reducers from "../reducers";

export const history = createBrowserHistory

function configureStore() {
    return createStore(
        reducers(history),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__RE
    )
}