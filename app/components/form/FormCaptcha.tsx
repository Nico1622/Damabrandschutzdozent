"use client";

import { useState, useEffect } from "react";

type CaptchaProps = {
  onValidate: (valid: boolean) => void;
};

export default function Captcha({ onValidate }: CaptchaProps) {
  const [captchaOptions, setCaptchaOptions] = useState<number[]>([]);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [selectedCaptcha, setSelectedCaptcha] = useState<number | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  // Generiere ein neues Captcha
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
    setCaptchaOptions(options.sort(() => Math.random() - 0.5));
    setCorrectAnswer(correct);
    setSelectedCaptcha(null);
    onValidate(false); // Reset
  }

  useEffect(() => {
    generateCaptcha();
  }, []);

  function handleSelect(option: number) {
    setSelectedCaptcha(option);
    onValidate(option === correctAnswer); // Parent erfährt, ob korrekt
  }

  return (
    <div className="captcha">
      <label>{captchaQuestion}</label>
      <div className="captcha-options">
        {captchaOptions.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`${selectedCaptcha === opt ? "active" : ""} no-btn`}
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
