import { Component ,OnInit} from '@angular/core'; 
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// import { NgForm } from '@angular/forms';

  
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})

export class ApplyComponent implements OnInit {
  id: any;
  
    // li:any; 
  // lis = []; 
  // isLoading: boolean = false;
  constructor(private http : HttpClient,private route:ActivatedRoute, private _auth: AuthService) { }

  ngOnInit(): void{
    // this.isLoading = true;
    //  this.http.get('https://jobsearchportal.azurewebsites.net/vacancy/VacancyDisplay/')   
    // .subscribe(Response => { 
    //   console.log(Response) 
    //   this.li=Response; 
    //   this.lis = this.li.Data; 
    //   this.isLoading = false;
    // }); 
    this.id = (this.route.snapshot.params['id']);// for storing id in var which getting through routes
    this.getOne();//on loading the page this method will automatically call
  }

  getOne() {
    this._auth.getOne(this.id)
      .subscribe(
        data => {
          console.log(data);
      }
        // res => console.log(res),
        // err => console.log(err)
      )
}


  applyData: any = {}
  apply() {
    this._auth.apply(this.applyData)//passing user data to apply method in services
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}