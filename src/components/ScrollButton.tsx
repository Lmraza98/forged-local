'use client'

export default function ScrollButton() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button 
      onClick={scrollToContact}
      className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
    >
      Get Started
    </button>
  )
} 