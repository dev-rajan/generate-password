import { copyToClipboard } from "@src/utils/copyToClipBoard";

// Mocking navigator.clipboard.writeText
jest
  .spyOn(navigator.clipboard, "writeText")
  .mockImplementation(() => Promise.resolve());

describe("copyToClipboard", () => {
  it("should copy text to clipboard and set message", async () => {
    const setMessage = jest.fn();
    const text = "Test password";

    await copyToClipboard(text, setMessage);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
    expect(setMessage).toHaveBeenCalledWith("Password copied to clipboard!");
  });

  it("should clear message after 3 seconds", async () => {
    jest.useFakeTimers();
    const setMessage = jest.fn();
    const text = "Test password";

    await copyToClipboard(text, setMessage);

    jest.advanceTimersByTime(3000);

    expect(setMessage).toHaveBeenLastCalledWith("");
  });
});
