class Question {
  constructor(id, text, type) {
    this.id = id;
    this.text = text;
    this.type = type;
  }

  score(answer) {
    return 0;
  }
}

export class CategoricalQuestion extends Question {
  constructor(id, text, options, scoreMap) {
    super(id, text, "categorical");
    this.options = options;
    this.scoreMap = scoreMap;
  }

  score(answer) {
    return this.scoreMap[answer] ?? 0;
  }
}

export class NumericQuestion extends Question {
  constructor(id, text, scoreFn) {
    super(id, text, "number");
    this.scoreFn = scoreFn;
  }

  score(answer) {
    return this.scoreFn(answer);
  }
}
