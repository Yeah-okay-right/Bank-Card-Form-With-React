# Card Form Project

This project is a credit/debit card form built using **React**. It allows users to input their card number, CCV2, expiration month, and year. The card information is displayed in real-time as the user types.

## Features

- **Real-time card information display**: As users type in the form, the card details are dynamically displayed.
- **Input validation**: Only numbers are allowed in the input fields, and maximum lengths are enforced (16 digits for the card number, 3 digits for CCV2, 2 digits for the month and year).
- **Auto-focus shifting**: After completing the card number and CCV2 fields, the focus automatically moves to the next input.
- **Success notification**: Upon form submission, a success message is displayed using `react-hot-toast`.

## Additional Details

- **CardForm.js**: The card form component, which includes inputs for the card number, CCV2, expiration month, and year. It manages input validation and auto-focus logic using React hooks.
- **CardDisplay.js**: A component that displays the card information, including the card number, CCV2, and expiration date.
- **react-hot-toast**: Used to display a success notification after form submission.
