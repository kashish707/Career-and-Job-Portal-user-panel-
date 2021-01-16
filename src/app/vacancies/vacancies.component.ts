import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import  AOS from 'aos';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
  // providers:[ApplyService]
})
export class VacanciesComponent implements OnInit {
  li:any; 
  lis=[]; 
   isLoading: boolean = false;
  constructor(private http : HttpClient) { }


  ngOnInit(): void { 
    AOS.init();
     this.isLoading = true;
    this.http.get('https://jobsearchportal.azurewebsites.net/vacancy/ListAPI/')   
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      // if(Response){   
      //   hideloader(); 
      // } 
      console.log(Response) 
      this.li=Response; 
      this.lis = this.li.Data; 
        this.isLoading = false;
    }); 
    // function hideloader(){ 
    //   document.getElementById('loading').style.display = 'none';} 
  }
}
