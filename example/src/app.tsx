import { useHelpBorder, useHelpMode } from '../../dist'
import { blogPosts, navigationLinks } from './data'
import { ZipperIcon, ZipperIconSidebar } from './icons'

export function App() {
  return (
    <Container>
      <Header />
      <LatestPostsHeader />

      <div
        data-theme="light"
        className="chakra-container css-1ag3fd2 css-1k7b95w"
      >
        <ul data-theme="light" className="css-sbhmhv">
          <HeroBlogLinkListItem />
          {blogPosts.map((post) => (
            <BlogLinkListItem {...post} key={post.title} />
          ))}
        </ul>
        <SidebarCallToAction />
      </div>

      <Footer />
      <HelpFLoatButton />
    </Container>
  )
}

const HelpFLoatButton = () => {
  const { toggleHelpMode } = useHelpMode()
  return (
    <div className="relative z-10">
      <div className="fixed bottom-4 left-4">
        <button
          onClick={toggleHelpMode}
          type="button"
          className="chakra-button chakra-menu__menu-button css-i8yawa"
          aria-label="Options"
          id="menu-button-:R1jmknl6H1:"
          aria-expanded="false"
          aria-haspopup="menu"
          aria-controls="menu-list-:R1jmknl6H1:"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            fontSize={64}
            viewBox="0 0 256 256"
            color="#9b26b6"
            aria-hidden="true"
            focusable="false"
            style={{ color: '#9b26b6' }}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
              opacity="0.2"
            />
            <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
          </svg>
        </button>
        <FloatInspectorCard />
      </div>
    </div>
  )
}

const FloatInspectorCard = () => {
  const {
    helpModeEnabled,
    hoveredElement,
    elementDescription,
    inspectableComponents,
  } = useHelpMode()
  if (!helpModeEnabled) return null

  return (
    <div className="absolute bottom-[70%] left-[70%] bg-white shadow-md p-4 min-w-64">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-purple-600 text-sm flex-1">Inspect UI</h2>
      </div>
      <p className="text-black font-bold text-md mb-2">
        {hoveredElement ? inspectableComponents[hoveredElement]?.name : ''}
      </p>
      <p className="text-gray-600 text-sm">
        {elementDescription
          ? elementDescription
          : 'Hover over the interface to learn more about what it does.'}
      </p>
    </div>
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
  const helpBorder = useHelpBorder()
  return (
    <header
      data-theme="light"
      className="chakra-container css-1a3qksv"
      onMouseEnter={helpBorder.onMouseEnter('nav')}
      onMouseLeave={helpBorder.onMouseLeave()}
      style={{
        border: helpBorder.style('nav').border,
      }}
    >
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
  const helpBorder = useHelpBorder()
  return (
    <footer
      data-theme="light"
      className="chakra-stack css-1yxzzu5"
      onMouseEnter={helpBorder.onMouseEnter('footer')}
      onMouseLeave={helpBorder.onMouseLeave()}
      style={{
        border: helpBorder.style('footer').border,
      }}
    >
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
  const { onMouseEnter, onMouseLeave, style } = useHelpBorder()
  return (
    <li
      data-theme="light"
      className="post-item css-1j2a2ms"
      onMouseEnter={onMouseEnter('blog-post')}
      onMouseLeave={onMouseLeave()}
      style={{
        border: style('blog-post').border,
      }}
    >
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
  const { onMouseEnter, onMouseLeave, style } = useHelpBorder()
  return (
    <li
      data-theme="light"
      className="post-item css-1exw413"
      onMouseLeave={onMouseLeave()}
      onMouseEnter={onMouseEnter('blog-post')}
      style={{
        border: style('blog-post').border,
      }}
    >
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
