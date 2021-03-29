import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Jade",
      company: "Naver",
      theme: "dark",
      title: "Software Engineer",
      email: "jyovojy@gmail.com",
      message: "go for it",
      fileName: "yoon",
      fileURL: null,
    },
    {
      id: "2",
      name: "Jeongin Yang",
      company: "JYP",
      theme: "light",
      title: "Artist",
      email: "yji@gmail.com",
      message: "du du du",
      fileName: "yang",
      fileURL: null,
    },
    {
      id: "3",
      name: "Seungmin Kim",
      company: "JYP",
      theme: "colorful",
      title: "Artist",
      email: "ksm@gmail.com",
      message: "go for it",
      fileName: "kim",
      fileURL: null,
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
