import { Component, OnInit } from '@angular/core';
import {SurveyService} from 'src/app/services/survey.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/models/survey';
import { TakeSurveyComponent } from '../take-survey/take-survey.component';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-view-surveys',
  templateUrl: './view-surveys.component.html',
  styleUrls: ['./view-surveys.component.css']
})
export class ViewSurveysComponent implements OnInit {
count:any
a=0
  surveys:Array<Survey>=[]
  surveyName: string;
  questions: Array<Question>=[]

  constructor(private surveyService : SurveyService, private router: Router, private route: ActivatedRoute) { }

  



ngOnInit(): void {
  this.surveyService.fetchAllSurveys()
  .subscribe((res:Array<Survey>)=> {
    console.log(res);
    this.surveys = res;
  })
  
}

takeSurvey(choices:any){
 
//   let count =  []
//  this.a++;
//   var surveyObj = {"survey1":choices.survey,"text1":this.a};
//   console.log(surveyObj)
//   this.surveyService.addcountSurvey(surveyObj)
//             .subscribe((res)=> {
//                   console.log(res);
//             })
  console.log("choices :",choices);

  this.router.navigate(["takeSurvey",{text:choices.survey}]);
}



}
   
    

  

  




