// Import necessary components and libraries
import React from 'react';
import { Card, CardContent, TextField, Typography, Button } from '@mui/material';

const BuyNow = () => {
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [deliveryAddress, setDeliveryAddress] = React.useState('');
  const [paymentAmount, setPaymentAmount] = React.useState('');
  const [cashOnDelivery, setCashOnDelivery] = React.useState(false);

  const handlePayment = () => {
    // Implement your payment logic here
    console.log('Processing payment...');
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('Amount:', paymentAmount);
    console.log('Delivery Address:', deliveryAddress);
    console.log('Cash on Delivery:', cashOnDelivery);
  };

  return (
    <Card
      sx={{
        backgroundColor: 'rgba(144, 238, 144, 0.7)', // lightgreen with 70% transparency
        padding: '20px',
        textAlign: 'center',
        width:'800',
        margin:'300px 300px',
        border: '2px solid #008000', // Green border
        borderRadius: '10px', // Rounded corners
      }}
    >
      {/* Header Section */}
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Food App Payment
        </Typography>
      </CardContent>

      {/* Payment Details Section */}
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Payment Details
        </Typography>

        {/* Card Number */}
        <TextField
          label="Card Number"
          variant="outlined"
          Width="500"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          margin="normal"
        />
        <br></br>

        {/* Expiry Date */}
        <TextField
          label="Expiry Date"
          variant="outlined"
          Width="500"
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          margin="normal"
        />
         <br></br>
        {/* Amount */}
        <TextField
          label="Amount"
          variant="outlined"
          Width="500"
          type="text"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
          margin="normal"
        />
          <br></br>
        {/* Delivery Address */}
        <TextField
          label="Delivery Address"
          variant="outlined"
          Width="500"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          margin="normal"
        />

        {/* Payment Method Selection */}
        <Typography variant="body1" gutterBottom sx={{ marginTop: '20px' }}>
          Select Payment Method:
        </Typography>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="online"
            checked={!cashOnDelivery}
            onChange={() => setCashOnDelivery(false)}
          />
          Online Payment
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={cashOnDelivery}
            onChange={() => setCashOnDelivery(true)}
          />
          Cash on Delivery
        </label>

        {/* Extra Content based on Payment Method */}
        {cashOnDelivery && (
          <Typography variant="body1" gutterBottom sx={{ marginTop: '20px' }}>
            Cash on delivery instructions or additional information.
          </Typography>
        )}

        {/* Payment Button */}
        <Button variant="contained" color="primary" onClick={handlePayment} sx={{ marginTop: '20px' }}>
          Pay Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default BuyNow;
