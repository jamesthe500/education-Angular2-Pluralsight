export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string; //String for now, could come back and change to a date object
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

// could define a class for the business object here as well
// usefull if we had some functionality needed throughout the app
/* for example:
export class Product implements IProduct {

    constructor(public productId: number,
    public price: number){}

    calculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }
}
*/
