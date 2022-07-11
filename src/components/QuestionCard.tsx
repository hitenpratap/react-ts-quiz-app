import react from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

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
	<Wrapper>
		<p className="number">
			Question: {questionNumber + 1} / {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }}></p>
		<div>
			{answers.map((answer, index) => (
				<ButtonWrapper
					key={index + 1}
					correct={selectedAnswer?.correctAnswer === answer}
					userClicked={selectedAnswer?.answer === answer}
				>
					<button value={answer} disabled={!!selectedAnswer} onClick={callback}>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</ButtonWrapper>
			))}
		</div>
	</Wrapper>
);

export default QuestionCard;
