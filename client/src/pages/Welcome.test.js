import React from 'react';
import Welcome from './Welcome';
import ReactDOM from 'react-dom'

it('Should render a div saying Hello World', () => {
    let div = document.createElement('div');
    div.innerHTML = "Hello World";
    ReactDOM.render(<Welcome />, div);
    expect(div.innerHTML).toBe('<div>Hello World</div>')
})