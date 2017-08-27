import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  
  questions: any[];

  constructor(service: QuestionService, private logger: LoggerService) {
    this.logger.log('First Message');
    this.questions = service.getQuestions();
    this.logger.log('Second Message');
  }

}
