import react from "react";
import { AnswerObject } from "../App";

type QuestionProps = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	selectedAnswer: AnswerObject | undefined;
	questionNumber: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<QuestionProps> = ({
	question,
	answers,
	callback,
	selectedAnswer,
	questionNumber,
	totalQuestions,
}) => (
	<div>
		<p className="number">
			Question: {questionNumber + 1} / {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }}></p>
		<div>
			{answers.map((answer, index) => (
				<div key={index + 1}>
					<button value={answer} disabled={!!selectedAnswer} onClick={callback}>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</div>
			))}
		</div>
	</div>
);

export default QuestionCard;
