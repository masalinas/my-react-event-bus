export enum Criticality {
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
  }

export interface Message {
    criticality: Criticality;
    text: string;
    date: Date;
}

// ... more message structures here

export interface EventBusMessages {
    message: Message;
    // ... rest of messages here
}