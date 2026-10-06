import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getTotalPrice(): number {
        let totalPrice = 0;
        for (const item of this._items) {
            totalPrice += item.price;
        }
        return totalPrice;
    }

    getTotalPriceWithDiscount(discount: number): number {
        const totalPrice = this.getTotalPrice();
        return totalPrice - (totalPrice * discount / 100);
    }

    deleteItem(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}