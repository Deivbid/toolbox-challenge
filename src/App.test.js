//ACTION
import * as action from './store/actions/textAction';
import * as types from './store/actions/types';
//REDUCER
import reducer from './store/reducers/textReducer';
//TOOLS
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

beforeEach(function () {
  moxios.install()
})

afterEach(function () {
  moxios.uninstall()
})

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
it('should dispatch actions of input text', () => {
  	const expectedActions = {type: types.GET_TEXT, payload: 'Hola'};

   // Mock an end point and response for requests to /test
  moxios.stubRequest('/test', {
    status: 200,
    responseText: 'the mocked result'
  })      

    const store = mockStore({});
    store.dispatch(action.getText('Hola')).then(() => {
    	expect(store.getActions()).toEqual([expectedActions]);
   	});
 });
});

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
});

