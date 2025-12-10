"use client";

import { useState, useEffect } from "react";

type CaptchaProps = {
  onChange?: (value: number | null) => void; // Callback an Parent, falls nötig
};

export default function Captcha({ onChange }: CaptchaProps) {
  const [captchaOptions, setCaptchaOptions] = useState<number[]>([]);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [selectedCaptcha, setSelectedCaptcha] = useState<number | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);

  // Captcha generieren: 3 Buttons, +-5 des korrekten Ergebnisses
  function generateCaptcha() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const correct = a + b;

    const options: number[] = [correct];
    while (options.length < 3) {
      const option = correct + Math.floor(Math.random() * 11) - 5;
      if (!options.includes(option) && option > 0) options.push(option);
    }

    setCaptchaQuestion(`Wie viel ergibt: ${a} + ${b}?`);
    setCaptchaOptions(shuffleArray(options));
    setCorrectAnswer(correct);
    setSelectedCaptcha(null);
  }

  useEffect(() => {
    generateCaptcha();
  }, []);

  function shuffleArray(arr: number[]) {
    return arr.sort(() => Math.random() - 0.5);
  }

  function handleSelect(option: number) {
    setSelectedCaptcha(option);
    if (onChange) onChange(option);
  }

  function validate() {
    return selectedCaptcha === correctAnswer;
  }

  return (
    <div className="captcha">
      <label>{captchaQuestion}</label>
      <div className="captcha-options">
        {captchaOptions.map((opt) => (
          <button
            key={opt}
            type="button"
            className={selectedCaptcha === opt ? "active" : ""}
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export type { CaptchaProps };
