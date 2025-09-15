export default function Footer() {
  return (
    <footer className="">
      <ul className="">
        <li>
          <a
            className=""
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
            <p className="">link</p>
          </a>
        </li>
      </ul>
      <p className="">
        © {new Date().getFullYear()} 
      </p>
    </footer>
  )
}
