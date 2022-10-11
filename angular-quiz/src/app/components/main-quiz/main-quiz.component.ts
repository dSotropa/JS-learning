import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-quiz',
  templateUrl: './main-quiz.component.html',
  styleUrls: ['./main-quiz.component.scss'],
})
export class MainQuizComponent implements OnInit, OnDestroy {
  quizList = [
    {
      id: 0,
      question: 'What did Milo cross the street?',
      answers: [
        { value: 1, label: 'Rapsuns 1' },
        { value: 2, label: 'Rapsuns 2' },
        { value: 3, label: 'Rapsuns 3' },
        { value: 4, label: 'Rapsuns 4' },
      ],
      correctAnswer: 2,
    },
    {
      id: 1,
      question: 'What did Milo cross the street ****?',
      answers: [
        { value: 1344, label: 'Rapsuns 1' },
        { value: 24455, label: 'Rapsuns 2' },
        { value: 334, label: 'Rapsuns 3' },
        { value: 4333, label: 'Rapsuns 4' },
      ],
      correctAnswer: 334,
    },
    {
      id: 2,
      question: 'What did Milo cross the street? 212234234234',
      answers: [
        { value: 1111, label: 'Rapsuns 1' },
        { value: 2, label: 'Rapsuns 2' },
        { value: 3, label: 'Rapsuns 3' },
        { value: 4344, label: 'Rapsuns 4' },
      ],
      correctAnswer: 1111,
    },
  ];

  // asa ar trebui sa arata raspunsul venit din html
  answers: any = {
    0: 3,
    1: 334,
    2: 1111,
  };

  correctAnswers = 0;

  constructor() {} // prima data

  ngOnInit(): void {} // dupa

  ngOnDestroy(): void {}

  amDatClick(value: number) {
    console.log(value);
  }

  checkAnswers() {
    this.correctAnswers = 0;
    this.quizList.forEach((quiz) => {
      let correctAnswer = quiz.correctAnswer;
      let questionId = quiz.id;

      if (correctAnswer === this.answers[questionId]) {
        this.correctAnswers++;
      }
    });

    // for (let i = 0; i < this.quizList.length; i++) {
    //   let correctAnswer = this.quizList[i].correctAnswer;
    //   let questionId = this.quizList[i].id;

    //   if (correctAnswer === this.answers[questionId]) {
    //     this.correctAnswers++;
    //   }
    // }
  }
}
