import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';



function AddUser() {
    const [name, setName] = React.useState<string>("");
    const [emailId, setEmailId] = React.useState<string>("");
    const [phoneno, setPhoneno] = React.useState<string>("");
    const [userName, setUserName] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("");
    const [likesports, setLikeSports] = React.useState<string>("");

    const handleEmailChange = (e: any) => {
        setEmailId(e.target.value);
    };


    const handlenameChange = (e: any) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e: any) => {
        e.prevantDefault()
        // console.log(name);
        // console.log("Verify your name succesfully");
        // console.log(emailId);
        // console.log("Verify Email Sucessfully");
        // document.write('Login Successfully' + name + emailId);
        // document.write(name);
        // document.write(emailId);

        const finalData = {
            UserName: userName,
            EmailId: emailId,
            Address: address,
            PhoneNo: phoneno,
            LikeSports: likesports
        }

        const res = await axios.post('http://localhost:5000/data', finalData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box display={"flex"} flexDirection="column">

                <Box
                    display={"flex"}
                    flexDirection="column"
                    alignSelf="center"
                    width="500px"
                    margin="40px"
                >

                    <TextField
                        required
                        id="Username"
                        variant="filled"
                        label="Username"
                        placeholder="&#x2709;"
                        type="text"
                        size="small"
                        value={name}
                        onChange={(e: any) => handlenameChange(e)}
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "24px",

                            "& .MuiInputBase-root": {
                                fontSize: "18px",
                            },
                        }}
                    />

                    <TextField
                        required
                        id="emailId"
                        variant="filled"
                        label="Email Id"
                        placeholder="&#x2709;"
                        type="email"
                        size="small"
                        value={emailId}
                        onChange={(e: any) => handleEmailChange(e)}
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "24px",
                            marginTop: '15px',

                            "& .MuiInputBase-root": {
                                fontSize: "18px",
                            },
                        }}
                    />
                    <TextField
                        required
                        id="emailId"
                        variant="filled"
                        label="Email Id"
                        placeholder="&#x2709;"
                        type="email"
                        size="small"
                        value={emailId}
                        onChange={(e: any) => handleEmailChange(e)}
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "24px",
                            marginTop: '15px',

                            "& .MuiInputBase-root": {
                                fontSize: "18px",
                            },
                        }}
                    />
                    <TextField
                        required
                        id="emailId"
                        variant="filled"
                        label="Email Id"
                        placeholder="&#x2709;"
                        type="email"
                        size="small"
                        value={emailId}
                        onChange={(e: any) => handleEmailChange(e)}
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "24px",
                            marginTop: '15px',

                            "& .MuiInputBase-root": {
                                fontSize: "18px",
                            },
                        }}
                    />
                    <TextField
                        required
                        id="emailId"
                        variant="filled"
                        label="Email Id"
                        placeholder="&#x2709;"
                        type="email"
                        size="small"
                        value={emailId}
                        onChange={(e: any) => handleEmailChange(e)}
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "24px",
                            marginTop: '15px',

                            "& .MuiInputBase-root": {
                                fontSize: "18px",
                            },
                        }}
                    />


                    <Button
                        sx={{
                            background: 'skyblue',
                            margin: "12px 2px 12px 5px",
                            height: "50px",
                            borderRadius: "24px !important",
                            fontWeight: "700",
                            "&.MuiButton-root:hover": {
                                WebkitTextDecorationStyle: "none",

                                backgroundColor: "grey !important",
                            },
                        }}
                        type='submit'
                    >
                        <Typography variant="h5" color="white">
                            Submit
                        </Typography>
                    </Button>

                </Box>
            </Box>
        </form>



    );

}





export default AddUser
