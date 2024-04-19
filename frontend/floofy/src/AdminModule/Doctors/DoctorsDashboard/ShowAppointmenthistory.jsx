import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchAppointmentHistory } from './fetchDoctorsAppointment';
import WhatsApplOgo  from "../../../Assets/WhatAppLogo.webp";

export default function ShowAppointmentHistory({doctorId}) {

      const [rows,setRows] = React.useState([]);

      async function fetchAppointments(){
            const fetchedAppointmentResponse = await fetchAppointmentHistory(doctorId);
            const jsonAppointmentResponse = await fetchedAppointmentResponse.json();
            console.log("Appointment is : ", jsonAppointmentResponse);
            setRows(jsonAppointmentResponse.appointmentHistory.map((appointment) => ({
                  UserName: appointment.User,
                  Status: appointment.Status,
                  AppointmentDate: new Date(appointment.AppointmentDate).toLocaleDateString(),
                  TimeOfAppointment: appointment.TimeOfAppointment,
                  PaymentStatus: appointment.paymentAmount,
                  ReasonForAppointment: appointment.ReasonForAppointment,
                  ContactNumber: appointment.ContactNumber
            })));


            console.log("Rows Appointment is" , rows)

      }
      React.useEffect(()=>{
            fetchAppointments();
      },[])


      return (
            
            <TableContainer component={Paper}>
                  <h5 style={{fontWeight:"bolder"}} >Appointment history</h5>
                  <Table sx={{ minWidth: 650}} aria-label="caption table">
                        <TableHead>
                              <TableRow>
                                    <TableCell>Username</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Appointment Date</TableCell>
                                    <TableCell align="right">Time(24H Format)</TableCell>
                                    <TableCell align="right">Payment</TableCell>
                                    <TableCell align="right">Message</TableCell>
                                    <TableCell align="right">Reason of Appointment</TableCell>
                                    <TableCell align="right">Contact Number</TableCell>
                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {rows.map((row) => (
                                    
                                    <TableRow key={row.name}>
                                          <TableCell component="th" scope="row">
                                                {row.UserName}
                                          </TableCell>
                                          <TableCell align="right">{row.Status}</TableCell>
                                          <TableCell align="right">{row.AppointmentDate}</TableCell>
                                          <TableCell align="right">{row.TimeOfAppointment}</TableCell>
                                          <TableCell align="right">{row.PaymentStatus}</TableCell>
                                          <TableCell align="right">
                                                <a href={`https://api.whatsapp.com/send?phone=${row.ContactNumber}&text=Join%20our%20Google%20Meet%20meeting:%20https://meet.google.com/hao-mayb-prb`} target="_blank" rel="noopener noreferrer">
                                                      <img src={WhatsApplOgo} alt="WhatsApp Logo" style={{ width: "2rem" }} />
                                                </a>
                                          </TableCell>
                                          
                                          <TableCell align="right">{row.ReasonForAppointment}</TableCell>
                                          <TableCell align="right">{row.ContactNumber}</TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
            </TableContainer>
      );
}