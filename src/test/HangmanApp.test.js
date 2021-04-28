import React from 'react';
import HangmanApp from '../components/HangmanApp.jsx';
import renderer from 'react-test-renderer';

// test('renders correctly', () => {
//     const tree = renderer
//     .create(<HangmanApp />)
//     .toJSON();
//     expect(tree).toMatchSnapshot();
// });

test('look up ace', () => {
    const ace = [
        'a playing card with a single spot on it, ranked as the highest card in its suit in most card games',
        'a person who excels at a particular sport or other activity',
        '(in tennis and similar games) a service that an opponent is unable to return and thus wins a point'
    ];
    return fetch("http://api.open-notify.org/iss-now.json")
        .then(res => res.json())
        .then(data => {
            //console.log(data.message);
            const result = data.message;
            expect(result).toBe("success");
        });
});

test('the fetch fails with an error', () => {
    //expect.assertions(1);
    return fetch('/exists/ace').catch(e => expect(e).toMatch('error'));
  });