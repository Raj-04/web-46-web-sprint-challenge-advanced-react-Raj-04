import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render (<CheckoutForm />)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
    expect(header).toBeTruthy()
    expect(header).toHaveTextContent(/checkout form/i)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const address = screen.getByLabelText(/Address/i)
    const city = screen.getByLabelText(/City/i)
    const state = screen.getByLabelText(/State/i)
    const zip = screen.getByLabelText(/Zip/i)
    const submitButton = document.querySelector('button')

    userEvent.type(firstName, 'Raj')
    userEvent.type(lastName, 'Patel')
    userEvent.type(address, '1151 Fords Pointe Circle')
    userEvent.type(city, 'Savannah')
    userEvent.type(state, 'GA')
    userEvent.type(zip, '31419')
    userEvent.click(submitButton)

    const successMessage = document.querySelector("[data-testid = 'successMessage']")

    expect(successMessage).toHaveTextContent(/Raj Patel/)
    expect(successMessage).toHaveTextContent(/1151 Fords Pointe Circle/)
    expect(successMessage).toHaveTextContent(/Savannah/)
    expect(successMessage).toHaveTextContent(/GA/)
    expect(successMessage).toHaveTextContent(/31419/)
});
