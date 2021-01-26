export default function unsetQuestionsDeeply(question) {
  // eslint-disable-next-line no-param-reassign
  question.answer = null;
  if (question.child) {
    question.child.forEach((el) => {
      unsetQuestionsDeeply(el);
    });
  }
}
