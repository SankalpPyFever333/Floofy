import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchAppointmentHistory } from './fetchDoctorsAppointment';


export default function ShowAppointmentHistory({doctorId}) {

      const [rows,setRows] = React.useState([]);

      async function fetchAppointments(){
            const fetchedAppointmentResponse = await fetchAppointmentHistory(doctorId);
            const jsonAppointmentResponse = await fetchedAppointmentResponse.json();
            console.log("Appointment is : ", jsonAppointmentResponse);
            setRows(jsonAppointmentResponse.appointmentHistory.map((appointment) => ({
                  UserName: appointment.User.username,
                  Status: appointment.Status,
                  AppointmentDate: new Date(appointment.AppointmentDate).toLocaleDateString(),
                  PaymentStatus: appointment.Payment.paymentStatus,
                  ReasonForAppointment: appointment.ReasonForAppointment
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
                                    <TableCell align="right">Payment Status</TableCell>
                                    <TableCell align="right">Reason of Appointment</TableCell>
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
                                          <TableCell align="right">{row.PaymentStatus}</TableCell>
                                          <TableCell align="right">{row.ReasonForAppointment}</TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
            </TableContainer>
      );
}