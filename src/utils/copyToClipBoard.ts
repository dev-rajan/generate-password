export const copyToClipboard = (text: string, setMessage: any) => {
  navigator.clipboard.writeText(text);
  setMessage("Password copied to clipboard!");
  setTimeout(() => {
    setMessage("");
  }, 3000);
};
