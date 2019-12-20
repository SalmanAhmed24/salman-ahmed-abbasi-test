import React from 'react';
//import {  BrowserRouter } from 'react-router-dom';
import SingleEventComponent from '../singleEventComponent';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';


test('<SingleEventComponent> testing',()=>{
    const venue = 
        {
            country:"pakistan",
            city:"islamabd",
            name:"name",
        }
    

    const component = renderer.create(<SingleEventComponent venue={venue} date="mm-dd-yyyy"/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();    
})