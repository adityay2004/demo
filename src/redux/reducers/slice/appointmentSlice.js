
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  appointmentList: [],
  lastId: 0,
};

const appointmentSlice = createSlice({
  name: 'appointmentReducer',
  initialState,
  reducers: {
    addAppointmentData: (state, action) => {
      state.lastId += 1;
      const newAppointmentData = {
        id: state.lastId,
        advance: action?.payload?.advance || '',
        age: action?.payload?.age || 0,
        appointmentNo: action?.payload?.appointmentNo || '',
        fees: action?.payload?.fees || '',
        gender: action?.payload?.gender || '',
        morningValue: action?.payload?.morningValue || 0,
        patientName: action?.payload?.patientName || '',
        phoneNumber: action?.payload?.phoneNumber || '',
        remark: action?.payload?.remark || '',
        selectedDate: action?.payload?.selectedDate || '',
        selectedTime: action?.payload?.selectedTime || '',
        uhidNo: action?.payload?.uhidNo || '',
      };

      state.appointmentList.push(newAppointmentData);

    },

    deleteAppointmentData: (state) => {
      state.appointmentList = [];
      state.lastId = 0;

    },
  },
});

export const { addAppointmentData, deleteAppointmentData } = appointmentSlice.actions;
export default appointmentSlice.reducer;
