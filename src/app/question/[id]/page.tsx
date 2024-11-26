import { Question } from '@/app/api/types';
import questionnaire from '../../api/questionnaire.json';
import ScreenClient from '@/app/components/screenClient/ScreenClient';

interface Params {
  id: string;
}

export async function generateStaticParams() {
  const params = questionnaire.questions.map((question) => ({
    params: { id: question.id.toString() },
  }));
  return params;
}

export default async function QuestionPage({ params }: { params: Params }) {
  const { id } = await params;

  const question = questionnaire.questions.find(
    (q) => q.id.toString() === id
  ) as Question;

  if (!question) {
    return <div>No question found</div>;
  }

  return <ScreenClient question={question} />;
}
