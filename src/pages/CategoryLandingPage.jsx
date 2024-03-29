import React, { useState } from 'react';
import { Container } from '@mui/material';
import CategoryComponent from "../component/CategoryComponent";
import { useParams } from 'react-router-dom';

function CategoryLandingPage() {
    const { category } = useParams();
    return (
        <Container>
            <CategoryComponent category={category}/>
        </Container>
    );
}

export default CategoryLandingPage;