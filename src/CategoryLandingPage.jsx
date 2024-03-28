import React, { useState } from 'react';
import {Button, Container, TextField} from '@mui/material';
import CategoryComponent from "./component/CategoryComponent";

function CategoryLandingPage() {
    return (
        <Container>
            <CategoryComponent/>
        </Container>
    );
}

export default CategoryLandingPage;