/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Counter } from '../src/Counter';
import CounterWrap from '../src/CounterWrap';

describe('CounterWrap', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<CounterWrap />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the inner Counter', () => {
        const wrapper = mount(<CounterWrap />);
        expect(wrapper.find(Counter).length).toEqual(1);
    });

    it('passes all props to Counter', () => {
        const wrapper = mount(<CounterWrap />);
        const counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.find('p').text()).toEqual('1');
    });
});
