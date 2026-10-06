import Cart from './Cart';
import Movie from '../domain/Movie';

describe('Cart', () => {
    test('новая корзина пуста', () => {
        const cart = new Cart();
        expect(cart.items.length).toBe(0);
    });

    test('можно добавить Movie в корзину', () => {
        const cart = new Cart();
        const movie = new Movie(
            1,
            'Мстители',
            'The Avengers',
            2012,
            'США',
            'фантастика',
            137,
            500
        );
        cart.add(movie);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toBe(movie);
    });
});