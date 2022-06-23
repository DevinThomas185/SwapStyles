import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert'

function Welcome() {
    const [showWelcome, setShowWelcome] = useState(true);

    if (showWelcome) {
        return (
            <Alert 
            variant="info"
            dismissible
            onClose={() => setShowWelcome(false)}>
                <Alert.Heading align="center">
                    Welcome to SwapStyles!
                </Alert.Heading>
                <p>
                    SwapStyles aims to improve the end-of-lifecycle process for clothes by promoting trading them with others. Events promote in-person 
                    swaps whilst allowing the opportunity to list items online for others to trade for. You are able to browse items to swap in, list 
                    items to be swapped away, create events and search for events using the navigation bar at the top.   
                </p>
                <hr />
                <p align="center">
                    <small>
                        Thank you for using SwapStyles from Adam, Devin, Josh and Raaif
                    </small>
                </p>
            </Alert>
        );
    }
}

export default Welcome;