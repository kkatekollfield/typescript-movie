import Movie from './Movie';

describe('Movie', () => {
    let movie: Movie;

    beforeEach(() => {
        movie = new Movie(
            1,
            'Мстители',
            'The Avengers',
            2012,
            'США',
            'фантастика, боевик, фэнтези, приключения',
            137,
            500
        );
    });

    test('создаётся объект с правильными полями', () => {
        expect(movie.id).toBe(1);
        expect(movie.name).toBe('Мстители');
        expect(movie.originalName).toBe('The Avengers');
        expect(movie.year).toBe(2012);
        expect(movie.country).toBe('США');
        expect(movie.genre).toBe('фантастика, боевик, фэнтези, приключения');
        expect(movie.time).toBe(137);
        expect(movie.price).toBe(500);
    });
});