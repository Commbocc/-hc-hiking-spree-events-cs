interface Event {
  id: string;
  fields: {
    Name: string;
    DateTime: Date;
    Link: string;
    NewUrl: [string];
    LocationName: [string];
    Published: Boolean;
  };
}
