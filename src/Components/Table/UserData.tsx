
import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios'
import { Link } from 'react-router-dom';




// type data = {
//     id: number;
//     userid: number;
//     emailid: string;
//     username: string;
//     address: string;
//     phoneno: number;
//     likesports: string;
// };


function TableData() {
    const [data, setData] = React.useState<any[]>([])

    useEffect(() => {
        (
            async () => {
                const res: any = await axios.get('http://localhost:5000/data')
                if (res.data) {
                    setData(res.data)
                } else {
                    setData([])
                }
            }
        )();
    }, [])

    return (
        <div>

            <Typography variant='h3' align='center' className='text-center text-danger mt-5'>Data Fetching</Typography>



            <TableContainer>
                <Table sx={{
                    minWidth: 650, marginTop: '50px'
                }} aria-label="Fetching Data through Api">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">UserID</TableCell>
                            <TableCell align="center">UserName</TableCell>
                            <TableCell align="center">EmailId</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">PhoneNo</TableCell>
                            <TableCell align="center">LikeSports</TableCell>
                            <TableCell align="center">Edit</TableCell>
                            <TableCell align="center">Delete</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((value: any) => (
                            <TableRow

                            >
                                <TableCell component="td" align="center">
                                    {value.UserId}
                                </TableCell>
                                <TableCell component="td" align="center">
                                    {value.UserName}
                                </TableCell>
                                <TableCell align="center">{value.EmailId}</TableCell>
                                <TableCell align="center">{value.Address}</TableCell>
                                <TableCell align="center">{value["PhoneNo."]}</TableCell>
                                <TableCell align="center">{value.LikeSports}</TableCell>
                                <TableCell align="center">
                                    <Link to={`edituser/${value.UserId}`} >
                                        <BorderColorIcon />
                                    </Link>
                                </TableCell>
                                <TableCell align="center"><DeleteIcon /></TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>




            {/* <Box className='container-xl mt-5'>

<Typography variant="h4"  align="center" component="div" sx={{ flexGrow: 1 }}>Add Data</Typography>
<Box className='mt-5'>
            <TableCell  align="center">  <InputUnstyled /></TableCell>
            <TableCell align="center">  <InputUnstyled /></TableCell>
            <TableCell align="center">  <InputUnstyled /></TableCell>
            <TableCell align="center">  <InputUnstyled /></TableCell>
            <TableCell align="center">  <InputUnstyled /></TableCell>
            <TableCell align="center">  <InputUnstyled /></TableCell>
            </Box>
            </Box>
             */}
        </div>
    )


}

export default TableData