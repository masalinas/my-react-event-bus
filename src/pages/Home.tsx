import Button from '@mui/material/Button';
import useEventBus from "../components/EventBus/useEventBus"

import { Criticality, EventBusMessages } from "../model/EventBus.types";

export const Home = () => {
    const eventBus = useEventBus<EventBusMessages>();

    const handlerSendMesssage = () => {
        eventBus.publish({            
            topic: 'message',
            payload: { criticality: Criticality.Error, 
                       text: "Error from Home", 
                       date: new Date() }
        });
    }
    
    return (      
        <div>
            <h2>Home</h2>
            <div style={{textAlign: "center"}}>
                <Button variant="contained" color="error" onClick={handlerSendMesssage}>Send Error</Button>
            </div>
        </div>          
    );
}