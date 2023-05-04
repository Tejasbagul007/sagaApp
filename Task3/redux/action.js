import { UPDATE_FORM_DATA } from './constant';

// export const updateFormData = data => ({
//   type: UPDATE_FORM_DATA,
//   payload: data,
// });


export const updateFormData = (name, email) => ({
    type: UPDATE_FORM_DATA,
    payload: { name, email },
  });
