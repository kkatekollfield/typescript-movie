import Movie from './domain/Movie';
import Cart from './service/Cart';

const cart = new Cart();

const avengers = new Movie(
    1,
    'Мстители',
    'The Avengers',
    2012,
    'США',
    'фантастика, боевик, фэнтези, приключения',
    137,
    500
);

cart.add(avengers);
console.log(cart.items);