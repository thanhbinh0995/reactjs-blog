/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { Counter } from '../src/Counter';

describe('Counter', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<Counter counter={1} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
