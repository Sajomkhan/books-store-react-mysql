const Nave = () => {
  // const navLink = ["home", "books", "add book", "update book"]
  const navLink = [
    { nav: "home", link: "/" },
    { nav: "books", link: "/books" },
    { nav: "add book", link: "/add" },
    { nav: "update book", link: "/update" },
  ];

  return (
    <div className="nav">
      <ul>
        {navLink.map((item) => (
          <li key={item.nav}>
            <a href={item.link}>{item.nav}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nave;
