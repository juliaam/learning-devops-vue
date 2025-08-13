import { describe, it } from "vitest";
import {render, fireEvent } from '@testing-library/vue'

import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders component", async () => {
    const screen = render(HelloWorld);

    screen.getByText("Contagem: 0");

    const sumButton = screen.getByText("Somar");
    const decreaseButton = screen.getByText("Diminuir");

    await fireEvent.click(sumButton);
    await fireEvent.click(sumButton);

    screen.getByText("Contagem: 2");

    await fireEvent.click(decreaseButton);

    screen.getByText("Contagem: 1");
  });
});
