import { render, screen } from "@testing-library/react";
import RestaurantCard, { vegRestaurantCard } from "../RestaurantCard";
import { BrowserRouter } from "react-router-dom";
import mockData from "../__mocks__/resCardMock.json";
import "@testing-library/jest-dom";

//describe is a Jest method used to group together related tests in a test suite. The first argument is a string describing the test suite, and the second argument is a function containing the individual tests.
describe("RestaurantCard", () => {
  //mockData is an object that mimics the props the RestaurantCard component expects. It represents a restaurant's data, including its name, cuisines, average rating, cost for two, service level agreement (SLA) for delivery time, and an id.

  test("renders RestaurantCard component with provided props", () => {
    render(
      <BrowserRouter>
        <RestaurantCard {...mockData} />
      </BrowserRouter>
    );

    // Check if the restaurant name is displayed
    expect(screen.getByText(/Mock Restaurant/i)).toBeInTheDocument();

    // Check if the cuisines are displayed
    expect(screen.getByText(/Italian,Mexican/i)).toBeInTheDocument();

    // Check if the average rating is displayed
    expect(screen.getByText(/4.5⭐/i)).toBeInTheDocument();

    // Check if the cost for two is displayed
    expect(screen.getByText(/500/i)).toBeInTheDocument();

    // Check if the delivery time is displayed
    expect(screen.getByText(/30 MIN 🛵/i)).toBeInTheDocument();
  });
});

const VegRestaurantCard = vegRestaurantCard(RestaurantCard);

test("Should render VegRestaurantCard with provided props", () => {
  render(
    <BrowserRouter>
      <VegRestaurantCard {...mockData} />
    </BrowserRouter>
  );

  // Check for the "Veg Only" label
  expect(screen.getByText("Veg Only")).toBeInTheDocument();

  // Check if the restaurant name is displayed
  expect(screen.getByText(/Mock Restaurant/i)).toBeInTheDocument();

  // You can add more assertions here if needed
});
