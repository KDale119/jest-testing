/**
 * @jest-environment jsdom
 */
import {fireEvent, render} from "@testing-library/react";
import Counter from "@/pages/components/Counter";
import React from "react";

describe("Main", () => {
    it("renders a button counter component", () => {
        const { getByText, getByTestId } = render(<Counter/>);

        fireEvent.click(getByText('Increment'));
        expect(getByTestId('count')).toHaveTextContent('Current Count: 1');


        fireEvent.click(getByText('Increment'));
        expect(getByTestId('count')).toHaveTextContent('Current Count: 2');
        
    });
});

//if the click actually works