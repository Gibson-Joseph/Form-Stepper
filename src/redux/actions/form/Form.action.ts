import { ADD_FORM_DATA } from "../../action-types/Form.types";
import { FORM_PAGE } from "../../action-types/Form.types";

export const formPage = (data: any) => ({
  payload: data,
  type: FORM_PAGE,
});

export const addFormData = (data: any) => ({
  payload: data,
  type: ADD_FORM_DATA,
});
