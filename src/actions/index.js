import axios from "axios";
import { FETCH_COLORS, COLOR_SELECTED } from './types';

const ROOT_URL = 'http://www.mocky.io/v2/5a37a7403200000f10eb6a2d';

export function fetchColors() {
    const url = ROOT_URL;
    const request = axios.get(url);

    return {
        type: FETCH_COLORS,
        payload: request
    };
}

export function selectColor(color) {
    return {
        type: COLOR_SELECTED,
        payload: color
    };
}