import React, { useState } from 'react';
import {Button, Container, TextField} from '@mui/material';
import Header from "../Header";
import Footer from "../Footer";
import Body from "../Body";
import CategoryComponent from "../component/CategoryComponent";
import ProductsComponent from "../component/ProductsComponent";

function ProductsListingPage() {
    return (
        <Container>
            <ProductsComponent/>
        </Container>
    );
}

export default ProductsListingPage;