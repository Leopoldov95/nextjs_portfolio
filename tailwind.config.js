/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: { max: "1432px" },
      lg: { max: "1250px" },
      md: { max: "1070px" },
      md_s: { max: "970px" },
      sm: { max: "700px" },
      x_sm: { max: "660px" },
      xs: { max: "600px" },
    },
    extend: {
      colors: {
        colorPrimary: "var(--color-primary)",
        colorSecondary: "var(--color-secondary)",
        colorWhite: "var(--color-white)",
        colorDark: "var(--color-dark",
        colorGrey0: "var(--color-grey0)",
        colorGrey1: "var(--color-grey-1)",
        colorGrey2: "var(--color-grey-2)",
        colorGrey3: "var(--color-grey-3)",
        colorGrey4: "var(--color-grey-4)",
        colorGrey5: "var(--color-grey-5)",
        colorGrey6: "var(--color-grey-6)",
      },
      borderRadius: {
        brsm2: "14px",
      },
      boxShadow: {
        boxShadow1: "0 3px 15px rgba(0, 0, 0, 0.3)",
      },
      transitionDuration: {
        400: "400ms",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
