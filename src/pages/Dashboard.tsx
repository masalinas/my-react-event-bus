import Button from '@mui/material/Button';
import useEventBus from "../components/EventBus/useEventBus"

import { Criticality, EventBusMessages } from "../model/EventBus.types";

export const Dashboard = () => {
    const eventBus = useEventBus<EventBusMessages>();

    const handlerSendMesssage = () => {
        eventBus.publish({            
            topic: 'message',
            payload: { criticality: Criticality.Info, 
                       text: "Info from Dashboard", 
                       date: new Date() }
        });
    }

    return (      
        <div>
            <h2>Dashboard</h2>
            <div style={{textAlign: "center"}}>
                <Button variant="contained" color="success" onClick={handlerSendMesssage}>Send Info</Button>
            </div>
        </div>          
    );
}