"use client";

import { useEffect, useState } from "react";

interface Question {
  enunciado: string;
  alternativas: string[];
  correctAnswer: number;
}

interface Simulado {
  titulo: string;
  questoes: Question[];
}

export default function SimuladoPage({ params }: { params: { id: string } }) {
  const [simulado, setSimulado] = useState<Simulado | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function loadSimulado() {
      const res = await fetch(`/api/simulado/${params.id}`);
      const data: Simulado = await res.json();

      const cleanedQuestions: Question[] = data.questoes.map((q: any) => ({
        ...q,
        correctAnswer:
          typeof q.correctAnswer === "string"
            ? q.correctAnswer.charCodeAt(0) - 65
            : q.correctAnswer,
      }));

      setSimulado(data);
      setQuestions(cleanedQuestions);
    }

    loadSimulado();
  }, [params.id]);

  if (!simulado) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{simulado.titulo}</h1>

      {questions.map((q, i) => (
        <div key={i}>
          <p>{q.enunciado}</p>

          <ul>
            {q.alternativas.map((alt, idx) => (
              <li key={idx}>{alt}</li>
            ))}
          </ul>

          <p>Resposta correta: {q.correctAnswer}</p>
        </div>
      ))}
    </div>
  );
}