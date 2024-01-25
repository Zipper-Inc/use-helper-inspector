import { ZipperIconSidebar } from './icons'
import { ZipperIcon } from './icons'
import { navigationLinks, blogPosts } from './data'

export function App() {
  return (
    <Container>
      <Header />
      <LatestPostsHeader />

      <div data-theme="light" className="chakra-container css-1ag3fd2">
        <div data-theme="light" className="css-1k7b95w">
          <ul data-theme="light" className="css-sbhmhv">
            <HeroBlogLinkListItem />
            {blogPosts.map((post, index) => (
              <BlogLinkListItem {...post} key={index} />
            ))}
          </ul>
          <SidebarCallToAction />
        </div>
      </div>
      {Footer}
    </Container>
  )
}
const Container = (props) => (
  <main data-theme="light" className="css-jpxs0y">
    <div data-theme="light" className="css-y74e8c" />
    <main data-theme="light" className="css-1k1qz1y">
      {props.children}
    </main>
  </main>
)
const Header = () => {
  return (
    <header data-theme="light" className="chakra-container css-1a3qksv">
      <a
        data-theme="light"
        className="chakra-link css-spn4bz"
        href="/home"
        aria-label="home"
      >
        <ZipperIcon />
      </a>

      <nav data-theme="light" className="chakra-stack css-14vm7fg">
        {navigationLinks.map((link, index) => (
          <a
            key={index}
            data-theme={link.dataTheme}
            className={link.className}
            href={link.href}
            target={link.target}
            rel={link.rel}
          >
            {link.text}
          </a>
        ))}
      </nav>

      <div data-theme="light" className="css-259i0c">
        <button
          data-theme="light"
          type="button"
          className="chakra-button css-1gw5yrx"
          aria-label="menu"
        ></button>
      </div>
    </header>
  )
}
const LatestPostsHeader = () => {
  return (
    <header
      data-theme="light"
      className="chakra-container css-viz3eq"
      dir="ltr"
    >
      <h1 data-theme="light" className="chakra-heading css-w6i8j8">
        Latest Posts
      </h1>
    </header>
  )
}
const Footer = () => {
  return (
    <footer data-theme="light" className="chakra-stack css-1yxzzu5">
      <section data-theme="light" className="chakra-stack css-cnqalw">
        <div data-theme="light" className="chakra-container css-vn5aes">
          <div data-theme="light" className="chakra-stack css-1r6ucjt">
            <svg
              fill="#1174CB"
              width={40}
              height={40}
              viewBox="0 0 834 834"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 104.5V209h834V0H0v104.5z" />
              <path d="M254.3 416.3C186 473.6 130.1 520.8 130.1 521.2c-.1.5 73 .8 162.4.8h162.4l121.8-102.1c67-56.2 123.1-103.4 124.8-105l3-2.9-163 .1h-163L254.3 416.3z"></path>
              <path d="M0 729.5V834h834V625H0v104.5z" />
            </svg>
          </div>

          <div
            data-theme="light"
            className="chakra-stack css-sksuht"
            aria-label="Quick links"
          >
            <nav data-theme="light" className="chakra-stack css-i6aqaf">
              <a
                data-theme="light"
                className="chakra-link chakra-text css-12yo9m"
                href="/blog"
              >
                Blog
              </a>
              <a
                data-theme="light"
                className="chakra-link chakra-text css-12yo9m"
                href="/home"
              >
                Features
              </a>
              <a
                data-theme="light"
                className="chakra-link chakra-text css-12yo9m"
                href="/about"
              >
                About
              </a>

              <a
                data-theme="light"
                target="_blank"
                rel="noopener"
                className="chakra-link chakra-link css-19w0xoq"
                href="/docs"
              >
                Docs
              </a>
            </nav>
            <nav data-theme="light" className="chakra-stack css-i6aqaf">
              <a
                data-theme="light"
                className="chakra-link chakra-text css-12yo9m"
                href="/about#careers"
              >
                Careers
              </a>
              <a
                data-theme="light"
                className="chakra-link chakra-text css-12yo9m"
                href="/about#contact"
              >
                Contact
              </a>
              <a
                data-theme="light"
                target="_blank"
                rel="noopener"
                className="chakra-link chakra-link css-19w0xoq"
                href="/terms"
              >
                Terms
              </a>
              <a
                data-theme="light"
                target="_blank"
                rel="noopener"
                className="chakra-link chakra-link css-19w0xoq"
                href="/privacy"
              >
                Privacy
              </a>
            </nav>
          </div>

          <div data-theme="light" className="chakra-stack css-1e6zse8">
            <div data-theme="light" className="css-1hqykcm">
              <a
                data-theme="light"
                target="_blank"
                rel="noopener"
                className="chakra-link chakra-button css-1g75qyp"
                href="/auth/signin"
              >
                Sign in
              </a>

              <a
                data-theme="light"
                target="_blank"
                rel="noopener"
                className="chakra-link chakra-button css-1f3uiu"
                href="/auth/signup"
              >
                Join the beta
              </a>
            </div>

            <span data-theme="light" className="chakra-text css-1rx2kws">
              © 2023 Zipper, Inc. All rights reserved.
            </span>
          </div>
        </div>
      </section>
    </footer>
  )
}

const SidebarCallToAction = () => {
  return (
    <span data-theme="light" className="css-o6marm">
      <ZipperIconSidebar />

      <p data-theme="light" className="chakra-text css-yw817a">
        Turn simple functions into robust apps without complex code.
      </p>

      <a
        data-theme="light"
        target="_blank"
        rel="noopener noreferrer"
        className="chakra-link chakra-button css-1kubl5e"
        href="https://zipper.dev/auth/signin"
      >
        Get Started for Free
      </a>

      <a
        data-theme="light"
        target="_blank"
        rel="noopener"
        className="chakra-link chakra-text css-397mcj"
        href="/docs"
      >
        Learn more about Zipper
      </a>
    </span>
  )
}

const HeroBlogLinkListItem = () => {
  return (
    <li data-theme="light" className="post-item css-1j2a2ms">
      <span data-theme="light" className="css-l4byuy" />

      <div data-theme="light" className="css-dycifs">
        <time
          className="nx-text-sm dark:nx-text-gray-400 nx-text-gray-400"
          dateTime="2023-11-20T00:00:00.000Z"
        >
          Mon Nov 20 2023
        </time>

        <a
          data-theme="light"
          className="chakra-heading css-705hej"
          href="/blog/raycast-extension"
        >
          Introducing the Zipper extension for Raycast
        </a>

        <p
          data-theme="light"
          className="chakra-text dark:nx-text-gray-400 nx-text-xl nx-text-gray-600 css-i3jkqk"
        >
          Launch and run Zipper applets directly from your desktop using
          Raycast.
        </p>
      </div>

      <a
        data-theme="light"
        className="chakra-button css-b69n30"
        href="/blog/raycast-extension"
      >
        Read More
      </a>

      <span data-theme="light" className="css-1w15pbx" />
    </li>
  )
}
function BlogLinkListItem(props: {
  date: string
  dateTime: string
  title: string
  description: string
  link: string
}) {
  return (
    <li data-theme="light" className="post-item css-1exw413">
      <div data-theme="light" className="css-dycifs">
        <time
          className="nx-text-sm dark:nx-text-gray-400 nx-text-gray-400"
          dateTime={props.dateTime}
        >
          {props.date}
        </time>
        <a
          data-theme="light"
          className="chakra-heading css-1agnk28"
          href={props.link}
        >
          {props.title}
        </a>
        <p
          data-theme="light"
          className="chakra-text dark:nx-text-gray-400 nx-text-xl nx-text-gray-600 css-i3jkqk"
        >
          {props.description}
        </p>
      </div>
      <a
        data-theme="light"
        className="chakra-button css-1gm0f8"
        href={props.link}
      >
        Read More
      </a>
      <span data-theme="light" className="css-1x2imw1" />
    </li>
  )
}
