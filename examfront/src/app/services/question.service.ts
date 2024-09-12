import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import configUrl from './helper';
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private _http: HttpClient) { }
  public getQuestionsOfQuiz(qid: any) {
    return this._http.get(`${configUrl}/question/quiz/all/${qid}`);
  }
  public getQuestionsOfQuizForTest(qid: any) {
    return this._http.get(`${configUrl}/question/quiz/${qid}`);
  }
  //add question
  public addQuestion(question: any) {
    return this._http.post(`${configUrl}/question/`, question);
  }

  //delete question
  public deleteQuestion(questionId: any) {
    return this._http.delete(`${configUrl}/question/${questionId}`);
  }
  //eval quiz
  public evalQuiz(questions: any) {
    return this._http.post(`${configUrl}/question/eval-quiz`, questions);
  }
}

