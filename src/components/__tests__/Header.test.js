import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { AuthProvider } from "../../utils/AuthContext";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should Load Header Component with login button first", () => {
  render(
    <AuthProvider>
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );

  // Since the Login is a button, not a link, we should use getByRole for a button
  const loginBtn = screen.getByRole("button", { name: /login/i });
  expect(loginBtn).toBeInTheDocument();
});

test("Should Load Cart Component with login button first", () => {
  render(
    <AuthProvider>
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );

  // Correctly query for the login link with a case-insensitive regular expression
  const loginNavLink = screen.getByText(/cart/i);
  expect(loginNavLink).toBeInTheDocument();
});

/*

The /login/i is a regular expression (regex) in JavaScript, and here's what it means:

/login/: This is the pattern the regex is looking for. In this case, it's the text "login". The slashes /.../ denote the start and end of the regex pattern.

i: This is a flag that modifies how the pattern is matched. The i flag stands for "case-insensitive", meaning it will match "login", "Login", "LOGIN", or any other case variation of the word.

So, when you use /login/i in screen.getByRole("link", { name: /login/i }), it tells the testing library to look for a link (<a> tag) whose accessible name matches "login" in a case-insensitive manner. This is particularly useful because the actual text in your component is "Login", with an uppercase "L":

jsx
Copy code
<NavLink to="/login" className="login">
  Login
</NavLink>
By using the /login/i regex, you ensure that your test will correctly find the link regardless of how the text case is used in your component, making your tests more robust against minor changes in text case.
*/
