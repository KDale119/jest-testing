/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Counter from "@/pages/components/Counter";
import React from "react";

describe("Counter", () => {
    it("renders the count value correctly", () => {
        const {getByTestId} = render(<Counter/>);
        expect(getByTestId('count')).toHaveTextContent('Current Count: 0');
        
    });
});

//if counter goes up & down
//redner counter try to find right button get button count value test
//when you click is that value 