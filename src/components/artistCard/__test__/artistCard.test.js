import React from 'react';
import ArtistCard from '../artistCard';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

test('<Artistcard> Component test',()=>{
    const component = renderer.create(<ArtistCard thumb_url='../../assets/logo.png' name='salman' facebook='https://facebook.com'/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})

