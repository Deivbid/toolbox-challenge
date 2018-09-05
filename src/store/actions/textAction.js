import { GET_TEXT } from './types';
import axios from 'axios';

export const getText = (text) => {

return (dispatch) => {
	let obj = {text: text};
	const productsAPI = "http://192.168.0.22:3000/getText";
	return axios.post(productsAPI, obj)
		.then(res => {
			dispatch({
    			type: GET_TEXT,
    			payload: res.data,
  			});
		});

	}
}