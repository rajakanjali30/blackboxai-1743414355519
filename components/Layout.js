import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme, toggleMobileMenu } from '../store/slices/uiSlice'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const { theme, mobileMenuOpen } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Modern web application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header 
        theme={theme} 
        onThemeToggle={() => dispatch(toggleTheme())}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => dispatch(toggleMobileMenu())}
      />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}