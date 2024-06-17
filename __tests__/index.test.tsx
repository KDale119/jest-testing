/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";

import Home from "@/pages/home";

describe("Home", () => {
  it("renders home component", () => {
    const { getByText } = render(<Home />);

    expect(getByText('Counter')).toBeInTheDocument();
  });
});
