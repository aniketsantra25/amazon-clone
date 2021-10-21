import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();

// Build a Provider
export const StateProvider = {{reducer, initialState, children}} => 