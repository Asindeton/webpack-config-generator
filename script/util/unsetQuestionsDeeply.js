export default function unsetQuestionsDeeply(question, editor) {
  // eslint-disable-next-line no-param-reassign
  question.answer = null;
  if (editor) {
    editor.valueMatrix.setValue(question.sendingValue, question.placeholder || 'false', question.requireInput);
  }
  if (question.child) {
    question.child.forEach((el) => {
      unsetQuestionsDeeply(el, editor);
    });
  }
}
