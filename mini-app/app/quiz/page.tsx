import Quiz from "@/components/quiz/quiz";

export default function QuizPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="mb-6 text-3xl font-bold">Crypto & Blockchain Basics Quiz</h1>
      <Quiz />
    </main>
  );
}
