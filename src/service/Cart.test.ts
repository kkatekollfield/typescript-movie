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

describe('Cart — дополнительные методы', () => {
    let cart: Cart;
    let movie1: Movie;
    let movie2: Movie;

    beforeEach(() => {
        cart = new Cart();
        movie1 = new Movie(1, 'Мстители', 'The Avengers', 2012, 'США', 'фантастика', 137, 500);
        movie2 = new Movie(2, 'Тор', 'Thor', 2011, 'США', 'фантастика', 115, 300);
    });

    test('getTotalPrice считает сумму без скидки', () => {
        cart.add(movie1);
        cart.add(movie2);
        expect(cart.getTotalPrice()).toBe(800);
    });

    test('getTotalPrice возвращает 0 для пустой корзины', () => {
        expect(cart.getTotalPrice()).toBe(0);
    });

    test('getTotalPriceWithDiscount считает сумму со скидкой 10%', () => {
        cart.add(movie1);
        cart.add(movie2);
        expect(cart.getTotalPriceWithDiscount(10)).toBe(720);
    });

    test('getTotalPriceWithDiscount со скидкой 0% возвращает полную сумму', () => {
        cart.add(movie1);
        expect(cart.getTotalPriceWithDiscount(0)).toBe(500);
    });

    test('deleteItem удаляет товар по id', () => {
        cart.add(movie1);
        cart.add(movie2);
        cart.deleteItem(1);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0].id).toBe(2);
    });

    test('deleteItem ничего не делает, если id не найден', () => {
        cart.add(movie1);
        cart.deleteItem(999);
        expect(cart.items.length).toBe(1);
    });
});