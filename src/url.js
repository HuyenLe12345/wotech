export const base_url = "https://wotech-server-2.onrender.com";
export const isValidURL = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};
