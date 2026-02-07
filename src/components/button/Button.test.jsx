import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
})

describe('Button Component', () => {
  it('should render button with correct text', () => {
    render(<Button text="Click Me" href="/" theme="primary" />)

    const button = screen.getByText('Click Me')
    expect(button).toBeInTheDocument()
  })

  it('should render as a Link for regular URLs', () => {
    render(<Button text="Navigate" href="/about" theme="primary" />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/about')
  })

  it('should render as download link for file URLs', () => {
    render(<Button text="Download PDF" href="/file.pdf" theme="primary" />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/file.pdf')
    expect(link).toHaveAttribute('download')
  })

  it('should apply correct theme class', () => {
    const { container } = render(<Button text="Themed" href="/" theme="secondary" />)

    // Check if the buttonContainer has the theme class applied
    const buttonContainer = container.querySelector('[class*="buttonContainer"]')
    expect(buttonContainer.className).toContain('secondary')
  })

  it('should apply transparent class when transparent prop is true', () => {
    const { container } = render(<Button text="Transparent" href="/" theme="primary" transparent={true} />)

    const buttonContainer = container.querySelector('[class*="buttonContainer"]')
    expect(buttonContainer.className).toContain('transparentBG')
  })

  it('should open in new tab when openNewTab is true', () => {
    render(<Button text="External" href="https://example.com" theme="primary" openNewTab={true} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should handle mouse enter and leave events', () => {
    render(<Button text="Hover Me" href="/" theme="primary" />)

    const button = screen.getByRole('button')

    // Simulate mouse enter
    fireEvent.mouseEnter(button, { clientX: 50, clientY: 50 })

    // Check if wave animation span exists
    const wave = button.querySelector('[class*="wave"]')
    expect(wave).toBeInTheDocument()

    // Simulate mouse leave
    fireEvent.mouseLeave(button, { clientX: 60, clientY: 60 })
    expect(wave).toBeInTheDocument()
  })

  it('should detect various file extensions for download', () => {
    const fileExtensions = ['.pdf', '.jpg', '.png', '.zip', '.txt', '.csv', '.json']
    
    // Render once with all assertions to avoid cleanup issues
    fileExtensions.forEach(ext => {
      const { container, unmount } = render(<Button text="Download" href={`/file${ext}`} theme="primary" />)
      const link = container.querySelector('[download]')
      expect(link).toBeInTheDocument()
      unmount() // Clean up after each render
    })
  })

  it('should update wave position on mouse move', () => {
    const { container } = render(<Button text="Wave Effect" href="/" theme="primary" />)

    const button = screen.getByRole('button')

    // Mock getBoundingClientRect
    button.getBoundingClientRect = jest.fn(() => ({
      left: 0,
      top: 0,
      right: 100,
      bottom: 50,
    }))

    // Simulate mouse enter at specific coordinates
    fireEvent.mouseEnter(button, { clientX: 25, clientY: 30 })

    // Query wave element after the event is fired
    const wave = container.querySelector('[class*="wave"]')

    // Check if wave has style attributes
    expect(wave).toHaveStyle({ top: '30px', left: '25px' })
  })
})
