import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate successful login (replace with your authentication logic)
        console.log(`Email: ${email}, Password: ${password}`);
        // Redirect to profile page (replace with actual routing logic)

        navigate('/profile');
    };

    return (
        <div>
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        margin="normal"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Login
                    </Button>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default SignInPage;
