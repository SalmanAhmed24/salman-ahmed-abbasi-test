import React from 'react';
import {  BrowserRouter } from 'react-router-dom';
import Artist from '../artist';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

test('<Artist> Component test',()=>{
    const component = renderer.create(<BrowserRouter>
                                        <Artist thumb_url='../../assets/logo.png' name='salman' facebook='https://facebook.com' />
                                    </BrowserRouter> );
    let tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();

})