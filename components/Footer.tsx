import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Sports Network</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Sports</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sports/cricket" className="text-muted-foreground hover:text-foreground">
                  Cricket
                </Link>
              </li>
              <li>
                <Link href="/sports/rugby" className="text-muted-foreground hover:text-foreground">
                  Rugby
                </Link>
              </li>
              <li>
                <Link href="/sports/soccer" className="text-muted-foreground hover:text-foreground">
                  Soccer
                </Link>
              </li>
              <li>
                <Link href="/sports" className="text-muted-foreground hover:text-foreground">
                  View All
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/schools/register" className="text-muted-foreground hover:text-foreground">
                  Register School
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com" className="text-muted-foreground hover:text-foreground">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Sports Network. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
