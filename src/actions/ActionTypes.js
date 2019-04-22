/*
Action 종류 선언, 앞에 export를 붙여서 
나중에 한번에 불러올 수 있음
import * as types from './ActionTypes'로 할 숭 씨음
*/

export const CREATE = 'CREATE';
export const REMOVE = 'REMOVE';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';
// 액션 선언의 컨벤션은 대문자!
