import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BasicDatePicker({SetstartDate ,SetendDate}) {

      const handleSetStartDate = (date)=>{
            console.log('date' ,new Date(date.$d).toLocaleDateString())
            SetstartDate(new Date(date.$d).toLocaleDateString())
      }

      const handleEndDate = (date)=>{
            SetendDate(new Date(date.$d).toLocaleDateString())
      }

      // const maxSelectableDate = dayjs().toDate()

      return (
            <>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                              <DatePicker className='rounded w-50 shadow m-2 p-2' label="Start Date" onChange={handleSetStartDate} />
                        </DemoContainer>
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                              <DatePicker className='rounded w-50 shadow p-2 m-2' onChange={handleEndDate} label="End Date"  />
                        </DemoContainer>
                  </LocalizationProvider>
            
            </>
      );
}