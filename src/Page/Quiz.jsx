import AppLayout from "../components/layout/AppLayout";
import QuizHeader from "../components/specific/QuizHeader";
import QuizSection from "../components/specific/QuizSection";
import ScoreBoard from "../components/specific/ScoreBoard";

const Quiz = () => {
  return (
    <AppLayout>
    <div>
      <QuizHeader />
      <QuizSection />
      <ScoreBoard />
    </div>
    </AppLayout>
  );
};

export default Quiz;
