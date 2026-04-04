import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'
import { SectionProvider } from '@/src/context/SectionContext'

// Mock NavBarItem component
jest.mock('./NavBarItem', () => {
  return function NavBarItem({ href, text, handleClick }) {
    return (
      <li>
        <a href={href} onClick={handleClick}>
          {text}
        </a>
      </li>
    )
  }
})

describe('NavBar Component', () => {
  const mockHandleClick = jest.fn()

  beforeEach(() => {
    mockHandleClick.mockClear()
  })

  it('should render navigation element', () => {
    const { container } = render(
      <SectionProvider>
        <NavBar open={false} handleClick={mockHandleClick} />
      </SectionProvider>
    )

    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()
  })

  it('should render all navigation links', () => {
    render(
      <SectionProvider>
        <NavBar open={false} handleClick={mockHandleClick} />
      </SectionProvider>
    )

    expect(screen.getByText('about us')).toBeInTheDocument()
    expect(screen.getByText('portfolio')).toBeInTheDocument()
    expect(screen.getByText('services')).toBeInTheDocument()
    expect(screen.getByText('contact us')).toBeInTheDocument()
  })

  it('should render 4 navigation items', () => {
    render(
      <SectionProvider>
        <NavBar open={false} handleClick={mockHandleClick} />
      </SectionProvider>
    )

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(4)
  })

  it('should have correct href attributes', () => {
    render(
      <SectionProvider>
        <NavBar open={false} handleClick={mockHandleClick} />
      </SectionProvider>
    )

    const aboutLink = screen.getByText('about us').closest('a')
    const portfolioLink = screen.getByText('portfolio').closest('a')
    const servicesLink = screen.getByText('services').closest('a')
    const contactLink = screen.getByText('contact us').closest('a')

    expect(aboutLink).toHaveAttribute('href', '/about')
    expect(portfolioLink).toHaveAttribute('href', '/portfolio')
    expect(servicesLink).toHaveAttribute('href', '/services')
    expect(contactLink).toHaveAttribute('href', '/contact')
  })

  it('should apply open class when open prop is true', () => {
    const { container } = render(
      <SectionProvider>
        <NavBar open={true} handleClick={mockHandleClick} />
      </SectionProvider>
    )

    const nav = container.querySelector('nav')
    expect(nav.className).toContain('open')
  })

  it('should not apply open class when open prop is false', () => {
    const { container } = render(
      <SectionProvider>
        <NavBar open={false} handleClick={mockHandleClick} />
      </SectionProvider>
    )

    const nav = container.querySelector('nav')
    expect(nav.className).not.toContain('open')
  })

  it('should render an unordered list', () => {
    const { container } = render(
      <SectionProvider>
        <NavBar open={false} handleClick={mockHandleClick} />
      </SectionProvider>
    )

    const ul = container.querySelector('ul')
    expect(ul).toBeInTheDocument()
  })

  it('should pass handleClick to all NavBarItems', () => {
    render(
      <SectionProvider>
        <NavBar open={false} handleClick={mockHandleClick} />
      </SectionProvider>
    )

    // Since we mocked NavBarItem to create links with onClick, we can test click functionality
    const link = screen.getByText('about us').closest('a')
    link.click()

    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })
})
