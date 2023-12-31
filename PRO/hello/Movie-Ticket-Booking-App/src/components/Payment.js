import { useContext } from "react";
import { MovieContext } from "../context/BookingContext";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom"
import { Grid, Divider } from "@mui/material";
import Swal from 'sweetalert2'

const Payment = () => {
    const navigate = useNavigate();
    const { totalAmount, movieData, checkedList } = useContext(MovieContext);
    let result = totalAmount()
    let total = result + 160;
    const moviedetails = movieData;
    let seats = checkedList.join(" ")
    const handleSubmit = () => {
        Swal.fire({
            title: 'Booking Successful',
            icon: 'success',
            width: '300px'
        });
        setTimeout(navigateTO, 600)
    };
    const navigateTO = () => {
        navigate('/')
        window.location.reload();
    }
    return (
        <>
            <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                mt={6}
            >
                <Grid item xs={3}>
                    <Card sx={{ width: 400 }} alignItems="center"
                        justify="center">
                        <CardContent>
                            <Typography variant="h4" component="div" style={{ color: '#1a0699' }} gutterBottom>
                                BOOKING SUMMARY
                            </Typography>
                            <Typography variant="h5" component="h5" style={{ color: '#7a0896' }}>
                                {moviedetails.name}
                            </Typography>
                            <Typography variant="h6" component="h6" style={{ color: 'black' }}>
                                Selected Seats : {seats}
                            </Typography>
                            <Grid item xs={12} style={{ display: "flex", gap: "17rem" }} mt={2}>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Amount
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {result}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ display: "flex", gap: "13.5rem" }}>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Booking Charge
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    160
                                </Typography>
                            </Grid>
                            <Divider />
                            <Grid item xs={12} style={{ display: "flex", gap: "18.5rem" }} mt={2}>
                                <Typography sx={{ mb: 1.5 }} style={{ color: 'black' }}>
                                    Total
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} style={{ color: 'black' }} justify="flex-end">
                                    {total}
                                </Typography>
                            </Grid>
                            <Box textAlign='center' mt={3}>
                                <Button onClick={() => handleSubmit()}
                                    sx={{
                                        color: 'white', backgroundColor: 'red', width: 300, ':hover': {
                                            bgcolor: 'yellow',
                                            color: 'white',
                                        }
                                    }}
                                >CONFIRM BOOKING
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default Payment;