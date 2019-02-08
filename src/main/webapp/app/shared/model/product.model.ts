import { Moment } from 'moment';

export interface IProduct {
    id?: number;
    name?: string;
    description?: string;
    imageUrl?: string;
    price?: number;
    stock?: number;
    createDate?: Moment;
}

export class Product implements IProduct {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public imageUrl?: string,
        public price?: number,
        public stock?: number,
        public createDate?: Moment
    ) {}
}
