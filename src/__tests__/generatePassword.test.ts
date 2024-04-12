import { generatePassword } from "@src/utils/generatePassword";

describe("generatePassword", () => {
  it("should generate a password with at least 8 characters by default", () => {
    const password = generatePassword();
    expect(password.length).toBe(8);
  });

  it("should generate a password with atleast 8 character", () => {
    const password = generatePassword();
    expect(password.length).toBe(8);
  });

  it("should generate a password containing at least one uppercase letter", () => {
    const password = generatePassword();
    const hasUppercase = /[A-Z]/.test(password);
    expect(hasUppercase).toBe(true);
  });

  it("should generate a password containing at least one lowercase letter", () => {
    const password = generatePassword();
    const hasLowercase = /[a-z]/.test(password);
    expect(hasLowercase).toBe(true);
  });

  it("should generate a password containing at least one digit", () => {
    const password = generatePassword();
    const hasDigit = /\d/.test(password);
    expect(hasDigit).toBe(true);
  });

  it("should generate a password containing at least one special character", () => {
    const password = generatePassword();
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    expect(hasSpecialChar).toBe(true);
  });
});
