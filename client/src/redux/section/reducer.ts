import { ReduxActionType, SectionReducerType } from "../../types/redux.types";
import {
  SECTION_CREATE,
  SECTION_DELETE,
  SECTIONS_GET,
  SECTION_UPDATE,
  SECTIONS_GET_SUCCESS,
  SECTION_CREATE_SUCCESS,
  SECTION_UPDATE_SUCCESS,
  SECTION_CREATE_FAIL,
  SECTION_UPDATE_FAIL,
  SECTIONS_GET_FAIL,
  SECTION_DELETE_SUCCESS,
  SECTION_DELETE_FAIL,
} from "./types";

const initialState = {
  isLoaded: false,
  isLoading: false,
  isCreating: false,
  isUpdating: false,
  data: null,
};

export const sectionReducer = (
  state = initialState,
  { type, payload }: ReduxActionType
): SectionReducerType => {
  switch (type) {
    case SECTION_CREATE:
      return { ...state, isCreating: true };
    case SECTION_UPDATE:
      return { ...state, isUpdating: true };
    case SECTION_DELETE:
      return { ...state };
    case SECTIONS_GET:
      return { ...state, isLoading: true };
    case SECTIONS_GET_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isLoaded: true,
      };
    case SECTION_CREATE_SUCCESS:
    case SECTION_UPDATE_SUCCESS:
    case SECTION_DELETE_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        isUpdating: false,
        isCreating: false,
      };
    case SECTIONS_GET_FAIL:
      return {
        ...state,
        data: null,
        isLoading: false,
        isLoaded: false,
      };
    case SECTION_CREATE_FAIL:
    case SECTION_UPDATE_FAIL:
    case SECTION_DELETE_FAIL:
      return { ...state, isUpdating: false, isCreating: false };

    default:
      return state;
  }
};
