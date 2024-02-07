import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//We can group test cases here in describe also
/*
describe("Contact us Page Test Cases", () => {
  test("Should load contact us component", () => {
    // Render
    render(<Contact />);
    // getByRole expects to find a single element. This is a common issue when using the Testing Library with components that render multiple elements with the same role.
    // Remeber all correct (Case sensitive)

    //Query
    const heading = screen.getByRole("heading", { name: "Get in Touch" });

    //Assert
    expect(heading).toBeInTheDocument();
  });

  test("Should load TextArea inside Contact Us Component", () => {
    render(<Contact />);
    const textarea = screen.getByRole("textbox", { name: "Your message" });
    expect(textarea).toBeInTheDocument();
  });

  test("Should load two input boxes on Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // getAllByRole returns an array of elements, and the toBeInTheDocument matcher is designed to be used with a single element, not an array.
    expect(inputBoxes.length).toBe(3);
  });
});
*/

test("Should load contact us component", () => {
  // Render
  render(<Contact />);
  // getByRole expects to find a single element. This is a common issue when using the Testing Library with components that render multiple elements with the same role.
  // Remeber all correct (Case sensitive)

  //Query
  const heading = screen.getByRole("heading", { name: "Get in Touch" });

  //Assert
  expect(heading).toBeInTheDocument();
});

test("Should load TextArea inside Contact Us Component", () => {
  render(<Contact />);
  const textarea = screen.getByRole("textbox", { name: "Your message" });
  expect(textarea).toBeInTheDocument();
});

//Instead of test we can write it also
it("Should load two input boxes on Contact component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  // getAllByRole returns an array of elements, and the toBeInTheDocument matcher is designed to be used with a single element, not an array.
  expect(inputBoxes.length).toBe(3);
});
