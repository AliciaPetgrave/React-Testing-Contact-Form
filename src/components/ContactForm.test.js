import React from 'react'
import {render} from '@testing-library/react'
import ContactForm from "./ContactForm"

test('labels are rendered', () => {
    const { getByLabelText } = render(<ContactForm />);
    getByLabelText(/first Name/i);
    getByLabelText(/last Name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
})