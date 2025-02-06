export default function Navigation() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <span>Tracker</span>
      </div>
      <nav>
        <ul className="flex items-center justify-between gap-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between gap-4">
        <button>Log IN</button>
        <button>Sign In</button>
      </div>
    </header>
  );
}
