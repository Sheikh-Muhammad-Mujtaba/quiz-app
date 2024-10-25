import Switch from "@/components/DarkModeButton";
import QuizApp from "@/components/quiz-app";

export default function Home() {
  return (
    <div className="relative z-10">
      <div className="flex flex-row justify-between p-2 relative z-10 items-center">
        <h1 className="font-bold text-center sm:text-4xl ml-4">Quiz App</h1>
        <div className="-z-0">
      <Switch />
      </div>
      </div>
      <QuizApp />
    </div>
  );
}