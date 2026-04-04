import { render, screen } from '@testing-library/react'
import Section from './Section'

describe('Section Component', () => {
  it('should render children correctly', () => {
    render(
      <Section sectionName="test-section">
        <div>Test Content</div>
      </Section>
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should apply correct section name class', () => {
    const { container } = render(
      <Section sectionName="hero-section">
        <div>Content</div>
      </Section>
    )

    const section = container.querySelector('section')
    expect(section.className).toContain('hero-section')
  })

  it('should apply theme class when provided', () => {
    const { container } = render(
      <Section sectionName="test" theme="dark">
        <div>Content</div>
      </Section>
    )

    const section = container.querySelector('section')
    expect(section.className).toContain('dark')
  })

  it('should have section tag with id when provided', () => {
    render(
      <Section sectionName="test" id="unique-section">
        <div>Content</div>
      </Section>
    )

    const section = document.getElementById('unique-section')
    expect(section).toBeInTheDocument()
    expect(section.tagName).toBe('SECTION')
  })

  it('should apply default section class', () => {
    const { container } = render(
      <Section sectionName="test">
        <div>Content</div>
      </Section>
    )

    const section = container.querySelector('.section')
    expect(section).toBeInTheDocument()
  })

  it('should render without id when not provided', () => {
    const { container } = render(
      <Section sectionName="test">
        <div>Content</div>
      </Section>
    )

    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section.id).toBe('')
  })

  it('should handle multiple children', () => {
    render(
      <Section sectionName="test">
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Section>
    )

    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
    expect(screen.getByText('Child 3')).toBeInTheDocument()
  })

  it('should combine all classes correctly', () => {
    const { container } = render(
      <Section sectionName="hero" theme="light" id="main-hero">
        <div>Content</div>
      </Section>
    )

    const section = container.querySelector('section')
    expect(section.className).toContain('section')
    expect(section.className).toContain('hero')
    expect(section.className).toContain('light')
  })
})
