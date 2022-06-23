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
                    Welcome to {window.Title}!
                </Alert.Heading>
                <p>
                    {window.Title} aims to improve the end-of-lifecycle process for clothes by promoting trading them with others. Events promote in-person 
                    swaps whilst allowing the opportunity to list items online for others to trade for. You are able to browse items to swap in, list 
                    items to be swapped away, create events and search for events using the navigation bar at the top.
                </p>
                <p>
                    Swaps do not need to occur as a 1-to-1 basis. If you decide to list an item online, anyone can swap it in and you will gain 1 token.
                    You can then use this token to swap in any item that you'd like. Items listed at an event should be taken to the event on the day,
                    which can be traded for according to the event's rules.
                </p>
                <hr />
                <p align="center">
                    <small>
                        Thank you for using {window.Title} from Adam, Devin, Josh and Raaif
                    </small>
                </p>
            </Alert>
        );
    }
}

export default Welcome;