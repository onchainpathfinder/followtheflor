import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Newsletter from '@/components/layout/Newsletter'

export const metadata = {
  title: 'Newsletter — followtheflor',
  description: 'Crypto compliance, Malta hidden gems, and running — one email, no filler. Join 1,500+ curious minds.',
}

export default function NewsletterPage() {
  return (
    <main className="page">
      <Nav />
      <Newsletter />
      <Footer />
    </main>
  )
}
