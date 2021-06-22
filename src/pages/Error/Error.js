import React from 'react';
import PikachuNotFound from "../../img/pikachu-notfound.png";
import { ErrorContainer, Container } from "./style";
import { useHistory } from 'react-router-dom';


export const Error = () => {
    const history = useHistory();
    const handleClick = () => history.push("/");

    return (
        <Container>
            <ErrorContainer align="center">
                <img src={PikachuNotFound} alt="Pikachu assustado" />
                <p>Sorry! The page you are looking for isn't here.</p>
                <button type="button" onClick={handleClick}>Back Home</button>
            </ErrorContainer>
        </Container>

    )
}

export default Error;

