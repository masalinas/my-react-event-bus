import Button from '@mui/material/Button';
import useEventBus from "../components/EventBus/useEventBus"

import { Criticality, EventBusMessages } from "../model/EventBus.types";

export const About = () => {
    const eventBus = useEventBus<EventBusMessages>();

    const handlerSendMesssage = () => {
        eventBus.publish({            
            topic: 'message',
            payload: { criticality: Criticality.Warning, 
                       text: "Warning from About", 
                       date: new Date() }
        });
    }

    return (      
        <div>
            <h2>About</h2>
            <div style={{textAlign: "center"}}>
                <Button variant="contained" color="warning" onClick={handlerSendMesssage}>Send Warning</Button>
            </div>
        </div>          
    );
}