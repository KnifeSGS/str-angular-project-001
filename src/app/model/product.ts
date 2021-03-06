export class Product {

    id: number = 0;
    catId: number = 0;
    name: string = '';
    description: string = '';
    image: string = '';
    price: number = 0;
    onsaleprice: number = 0;
    stock: number = 0;
    featured: boolean = false;
    active: boolean = true;
    onsale: boolean = false;

    constructor(properties?: Product) {
        if (properties) {
            this.id = properties.id || 0;
            this.catId = properties.catId || 0;
            this.name = properties.name || '';
            this.description = properties.description || '';
            this.image = properties.image || '';
            this.price = properties.price || 0;
            this.onsaleprice = properties.onsaleprice || 0;
            this.stock = properties.stock || 0;
            this.featured = properties.featured || false;
            this.active = properties.active || true;
            this.onsale = properties.onsale || false;
        }
    }
}


