import { set } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import { useParams } from 'react-router';


function ProductView({product}){
    
    
  
    


    return(
        <Container>
            <h1>{product.name}</h1>
            

        </Container>

    )

}

export default ProductView;