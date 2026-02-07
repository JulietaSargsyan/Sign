import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'
import { SectionProvider } from '@/src/context/SectionContext'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, onClick, passHref, ...props }) => {
    // passHref is a Next.js prop, don't spread it to the DOM
    return (
      <a href={href} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }
})

// Mock LogoSvgComponent
jest.mock('../LogoSvgComponent', () => {
  return function LogoSvgComponent({ className }) {
    return <svg className={className} data-testid="logo-svg">Logo</svg>
  }
})

describe('Header Component', () => {
  const mockHandleClick = jest.fn()

  beforeEach(() => {
    mockHandleClick.mockClear()
  })

  it('should render the header with logo', () => {
    render(
      <SectionProvider>
        <Header handleClick={mockHandleClick} />
      </SectionProvider>
    )

    const logo = screen.getByTestId('logo-svg')
    expect(logo).toBeInTheDocument()
  })

  it('should render a link to the home page', () => {
    render(
      <SectionProvider>
        <Header handleClick={mockHandleClick} />
      </SectionProvider>
    )

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })

  it('should call handleClick when logo is clicked', () => {
    render(
      <SectionProvider>
        <Header handleClick={mockHandleClick} />
      </SectionProvider>
    )

    const link = screen.getByRole('link')
    fireEvent.click(link)

    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })
})
