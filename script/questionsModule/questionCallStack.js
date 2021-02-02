export default class QuestionCallStack {
  constructor(questionBlock,
    questions, entryQuestion, afterQuestion, isCalledFromNext) {
    this.questionArray = questions;
    this.currIndex = 0;
    this.questionBlock = questionBlock;
    this.entryQuestion = entryQuestion;
    this.afterQuestion = afterQuestion;
    this.isCalledFromNext = isCalledFromNext;
    if (this.isCalledFromNext) {
      this.currIndex = this.questionArray.length - 1;
      if (this.questionArray[this.currIndex].answer !== 'false'
          && this.questionArray[this.currIndex].child) {
        this.createSubCallStack(true);
      } else this.exec();
    }
  }

  exec() {
    this.createQuestion(this.questionArray[this.currIndex]);
  }

  createQuestion(question) {
    const previousQuestion = this.questionArray[this.currIndex - 1] || null;
    let previousExists = false;
    if (previousQuestion || this.entryQuestion) previousExists = true;
    this.questionBlock.createQuestion(question,
      previousExists,
      this.getNextQuestion(false),
      this.getPreviousQuestion());
  }

  createSubCallStack(isCalledFromNext) {
    const innerCallStack = new QuestionCallStack(this.questionBlock,
      this.questionArray[this.currIndex].child,
      this.createQuestion.bind(this, this.questionArray[this.currIndex]),
      this.getNextQuestion(true), isCalledFromNext);
    if (!isCalledFromNext) innerCallStack.exec();
  }

  getNextQuestion(isCalledFromChild) {
    return () => {
      if (this.questionArray[this.currIndex].answer !== 'false'
        && this.questionArray[this.currIndex].child && !isCalledFromChild) {
        this.createSubCallStack();
      } else if (this.currIndex === this.questionArray.length - 1) {
        this.afterQuestion();
      } else {
        this.currIndex += 1;
        this.createQuestion(this.questionArray[this.currIndex]);
      }
    };
  }

  getPreviousQuestion() {
    return () => {
      if (this.currIndex === 0) {
        this.entryQuestion();
      } else {
        this.currIndex += -1;
        if (this.questionArray[this.currIndex].answer !== 'false'
          && this.questionArray[this.currIndex].child) {
          this.createSubCallStack(true);
        } else {
          this.createQuestion(this.questionArray[this.currIndex]);
        }
      }
    };
  }
}
