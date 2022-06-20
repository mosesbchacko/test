
import { render, screen } from '@testing-library/react'
import { LoanCalculatorForm } from './LoanCalculatorForm'

test("Check the loan amount heading", () => {
    render(<LoanCalculatorForm />)
  
    expect(screen.getByText("Loan Amount")).toBeInTheDocument()
  })