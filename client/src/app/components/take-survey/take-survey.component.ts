import { Component, OnInit, ɵConsole } from '@angular/core';



import { SurveyService } from 'src/app/services/survey.service';
import { Question } from 'src/app/models/question';
import { Survey} from 'src/app/models/survey';
import { Choice} from 'src/app/models/choice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {

  surveys: Array<Survey>=[]
  choices: Array<any>=[]
  surveyName : string;
  count: number;
  question: string;
  

  constructor(private surveyService : SurveyService, private router: Router, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.surveyService.fetchAllSurveys()
  //   .subscribe((res:Array<Survey>)=> {
  //     console.log(res);
  //     this.surveys = res;
      
  //   })
    
  // }

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('text'));
      this.surveyName = params.get("text");
      console.log(this.surveyName);
    })
    this.surveyService.fetchAllOptions(this.surveyName).subscribe((res: any) => {
      
      console.log(res)
      this.question = res.text;
      console.log(this.question);
      this.choices = res.choice;
      console.log(this.choices);
      })

}

incrementCount(choice_text:string){
   


}



}
