import {
  ADD_FORM_DATA,
  REMOVE_FORM_DATA,
  FORM_PAGE,
} from "../action-types/Form.types";
import { StateType } from "../model/State.type";

const INITIAL_STATE: StateType = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  password: "",
  gender: "",
  phoneNo: "",
  course: "",
  language: [],
  college: "",
  checked: false,
  activePage: 0,
};

function formReducer(state = INITIAL_STATE, action: any): any {
  let myPayload = { ...action.payload };

  switch (action.type) {
    case FORM_PAGE: {
      return {
        ...state,
        activePage: action.payload,
      };
    }

    case ADD_FORM_DATA: {
      return {
        ...state,
        firstName: myPayload.firstName,
        lastName: myPayload.lastName,
        age: myPayload.age,
        email: myPayload.email,
        password: myPayload.password,
        gender: myPayload.gender,
        phoneNo: myPayload.phoneNo,
        course: myPayload.course,
        college: myPayload.college,
        checked: myPayload.checked,
        language: myPayload.language,
      };
    }

    case REMOVE_FORM_DATA: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
}
export default formReducer;
