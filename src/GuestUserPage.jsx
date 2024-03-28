import React, { useState } from 'react';
import {Button, Container, TextField} from '@mui/material';
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import GuestBody from "./GuestBody";

function RegisteredUserPage() {
    return (
       <Container>
            <GuestBody/>
       </Container>
    );
}

export default RegisteredUserPage;
