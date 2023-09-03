"use client";

import React, { useState } from "react";
import Image from "next/image";

import styles from "./page.module.scss";

import iconStar from "../../public/images/icon-star.svg";
import illustrationThankYou from "../../public/images/illustration-thank-you.svg";

const Home = () => {
  const [isStartStateVisible, setIsStartStateVisible] = useState(true);
  const [isEndStateVisible, setIsEndStateVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEndStateVisible(!isEndStateVisible);
    setIsStartStateVisible(!isStartStateVisible);
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedRating(e.target.value);
  };

  const submitForm = handleSubmit;

  return (
    <main
      className={
        isStartStateVisible
          ? styles.mainContainer
          : `${styles.mainContainer} ${styles.center}`
      }
    >
      <div
        className={isStartStateVisible ? styles.iconStarContainer : styles.hide}
      >
        <Image src={iconStar} className={styles.iconStar} alt={""} />
      </div>
      <div
        className={
          isEndStateVisible ? styles.illustrationThankYouContainer : styles.hide
        }
      >
        <Image
          src={illustrationThankYou}
          className={styles.illustrationThankYou}
          alt={""}
        />
      </div>
      <div className={isEndStateVisible ? styles.submittedRating : styles.hide}>
        You selected {selectedRating} out of 5
      </div>
      <h1>{isStartStateVisible ? "How did we do?" : "Thank You!"}</h1>
      <p>
        {isStartStateVisible
          ? `Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!`
          : `We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!`}
      </p>
      <form
        onSubmit={submitForm}
        className={isEndStateVisible ? styles.hide : ""}
      >
        <div
          className={isStartStateVisible ? styles.rateContainer : styles.hide}
        >
          <input
            type="radio"
            name="rating"
            id="opt1"
            value="1"
            checked={selectedRating === "1"}
            onChange={handleChange}
          />
          <label htmlFor="opt1">
            <span>1</span>
          </label>
          <input
            type="radio"
            name="rating"
            id="opt2"
            value="2"
            checked={selectedRating === "2"}
            onChange={handleChange}
          />
          <label htmlFor="opt2">
            <span>2</span>
          </label>
          <input
            type="radio"
            name="rating"
            id="opt3"
            value="3"
            checked={selectedRating === "3"}
            onChange={handleChange}
          />
          <label htmlFor="opt3">
            <span>3</span>
          </label>
          <input
            type="radio"
            name="rating"
            id="opt4"
            value="4"
            checked={selectedRating === "4"}
            onChange={handleChange}
          />
          <label htmlFor="opt4">
            <span>4</span>
          </label>
          <input
            type="radio"
            name="rating"
            id="opt5"
            value="5"
            checked={selectedRating === "5"}
            onChange={handleChange}
          />
          <label htmlFor="opt5">
            <span>5</span>
          </label>
        </div>
        <button
          className={isStartStateVisible ? styles.submitButton : styles.hide}
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Home;
