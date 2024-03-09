import React from "react";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import Toast from "./Toast";
import Avatar from "../Avatar";

afterEach(() => {
  cleanup();
});

describe("Toast", () => {
  it("Render Success Toast", () => {
    render(<Toast type="success" variant="expanded" />);
    const element = screen.getByTestId("toast-success-expanded-header");
    expect(element.textContent).toBe("Success");
  });

  it("Render Error Toast", () => {
    render(<Toast type="error" variant="expanded" />);
    const element = screen.getByTestId("toast-success-expanded-header");
    expect(element.textContent).toBe("Attention");
  });

  it("Render Message Toast", () => {
    render(<Toast type="message" avatarProps={{ title: "Jeet S." }} />);
    const element = screen.findByText("Jeet S.");
    expect(element).toBeDefined();
  });

  it("Close Success Toast", async () => {
    render(<Toast type="success" variant="expanded" />);
    const element = screen.getByTestId("toast-close-btn");
    expect(element).toBeDefined();
    fireEvent.click(element);
    waitFor(() => expect(screen.getByTestId("toast-close-btn")).toThrow());
  });
});
