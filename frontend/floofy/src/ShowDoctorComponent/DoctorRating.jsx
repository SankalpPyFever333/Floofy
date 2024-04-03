import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { postDoctorReview } from './postDoctReview';
import Swal from 'sweetalert2';
import { fetchDoctorsReview } from '../AdminModule/Doctors/DoctorsDashboard/fetchDoctorReviews';

export default function DoctorRating({doctorIdToRate}) {
      const [value, setValue] = React.useState(0);

      


      const handleReviewClick = async()=>{
            const postReview = await postDoctorReview(doctorIdToRate);
            
            if(postReview.ok){
                  Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "rating posted",
                        showConfirmButton: false,
                        timer: 1500
                  });
            }
            else{
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Try again later!!",
                  });
            }
      }
      React.useEffect(()=>{
            if(value>0){
                  handleReviewClick();
            }
            localStorage.setItem("DoctorRating", value)


      } , [value]);
      return (
            <Box
                  sx={{
                        '& > legend': { mt: 2 },
                  }}
            >
                  <Typography component="legend">Rate Doctor</Typography>
                  <Rating
                        name="simple-controlled"
                        value={localStorage.getItem("DoctorRating")}
                        onClick={(event, newValue) => {
                              setValue(newValue);
                        }}
                  />
            </Box>
      );
}