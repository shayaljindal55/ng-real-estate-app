
export interface Properties {
    id: number,
    type: string,
    price: string,
    address: string,
    description: string,
    bedrooms: number,
    bathrooms: number,
    area: string,
    image: string
}

export interface HttpError {
    statusText: string;
}

export interface CatchError extends CatchErrorParams {
}

export interface CatchErrorParams {
    error: '', status: '', message: ''
}