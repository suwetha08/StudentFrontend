import axios from "axios";

const API = "http://localhost:5000/api/students";

export const createStudent = (data) => axios.post(API, data);

export const getAllStudents = () => axios.get(`${API}/allstudents`);

export const getOneStudent = (rollno) => axios.get(`${API}/${rollno}`);

export const updateStudent = (rollno, data) => axios.put(`${API}/${rollno}`, data);

export const deleteStudent = (rollno) => axios.delete(`${API}/${rollno}`);