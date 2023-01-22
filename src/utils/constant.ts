const {location :{
    protocol,
    hostname,
    port
}} = window

export const baseUrl = `${protocol}//${hostname}:${port}`;