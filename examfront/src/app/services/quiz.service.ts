import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import configUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http: HttpClient) { }

  public quizzes() {
    return this._http.get(`${configUrl}/quiz/`);
  }
  //add quiz
  public addQuiz(quiz: any) {
    return this._http.post(`${configUrl}/quiz/`, quiz);
  }

  //delete quiz
  public deleteQuiz(qId: any) {
    return this._http.delete(`${configUrl}/quiz/${qId}`);
  }
  //get the single quiz
  public getQuiz(qId) {
    return this._http.get(`${configUrl}/quiz/${qId}`);
  }
  //update quiz
  public updateQuiz(quiz: any) {
    return this._http.put(`${configUrl}/quiz/`, quiz);
  }
  //get quizzes of category
  public getQuizzesOfCategory(cid: any) {
    return this._http.get(`${configUrl}/quiz/category/${cid}`);
  }
  //qet active quizzes
  public getActiveQuizzes() {
    return this._http.get(`${configUrl}/quiz/active`);
  }
  //get active quizzes of category
  public getActiveQuizzesOfCategory(cid: any) {
    return this._http.get(`${configUrl}/quiz/category/active/${cid}`);
  }
}

