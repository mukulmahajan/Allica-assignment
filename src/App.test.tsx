import { render } from "@testing-library/react";
import App from "./App";

jest.mock("axios", () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

test("renders Dashboard", () => {
  render(<App />);
});
