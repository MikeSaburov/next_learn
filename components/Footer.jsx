const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-4 mt-20">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {currentYear} Аренда Недвижимостию Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
