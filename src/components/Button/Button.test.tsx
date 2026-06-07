import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';
import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" onClick={() => alert(1)} />);
  });

  test("should have default type 'button'", () => {
    render(<Button label="Test" />);
    const button = screen.getByRole('button', { name: /test/i });
    expect(button).toHaveAttribute('type', 'button');
  });

  test("should have type 'submit' when specified", () => {
    render(<Button label="Submit" type="submit" />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveAttribute('type', 'submit');
  });

  test("should have type 'reset' when specified", () => {
    render(<Button label="Reset" type="reset" />);
    const button = screen.getByRole('button', { name: /reset/i });
    expect(button).toHaveAttribute('type', 'reset');
  });
});