// import logo from '../../assets/Bootstrap_logo.svg.png'; // with import
import logo from "../../assets/logo.svg.svg";
import HeaderBody from "../../elements/HeaderBody/HeaderBody";
import HeaderTitle from "../../elements/HeaderTitle/HeaderTitle";
import Button from "../../elements/Button/Button";
import { useState } from "react";

const Header = () => {
  const article = {
    title: {
      id: "Permintaan Produk",
      en: "Product Request",
    },
    description: {
      id: "Di bawah ini adalah formulir yang dibuat untuk menambahkan produk. Setiap pengguna boleh mengasih saran atau masukan produk melalui menu tambah produk ini dengan mengisi form ini. Semua saran atau permintaan penambahan produk akan kami seleksi secara menyeluruh, terima kasih. 😊",
      en: "Below is a form created for adding products. Every user is welcome to provide suggestions or input on products through this add product menu by filling out this form. All suggestions or product addition requests will be thoroughly reviewed, thank you. 😊",
    },
  };

  const [title, setTitle] = useState(article.title.en);
  const [desc, setDesc] = useState(article.description.en);

  const changeLanguage = () => {
    setTitle(title === article.title.en ? article.title.id : article.title.en);
    setDesc(
      desc === article.description.en
        ? article.description.id
        : article.description.en
    );
  };

  return (
    <div className="container text-center mt-5">
      <img style={{ height: 200, width: "200px" }} src={logo} alt="Hero Logo" />
      <div className="container mt-4">
        <HeaderTitle label={title} />
        <HeaderBody label={desc} />
      </div>
      <Button
        className="btn btn-primary"
        label="Ganti Bahasa"
        onClick={() => changeLanguage()}
      />
    </div>
  );
};

export default Header;