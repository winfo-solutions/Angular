import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormGroup, FormControl } from '@angular/forms';
import {Table}from './table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'ang1';
  xid : Number;
  xtitle : String;
  xauthor : String;

  obj:Table[];

  auth = false;
  tableValidation=false;

  submitted = false;
  onSubmit() { this.submitted = true; }

  
  constructor(private appservice : AppService) {}
  submitInfo()
  {
    console.log("Button is clicked")
    console.log(" Id is ", this.xid);
    var body = {
      "id" : this.xid,
      "title" : this.xtitle,
      "author" : this.xauthor
    }

    console.log("body is ", body);
    this.appservice.submitData(body).subscribe((Response:any) => {

      console.log("Response is ", Response.json());
      
    }
    )
  }
  deleteInfo(){
    console.log("Button is clicked");
    console.log(" Id is ", this.xid);
    var body = {
      "id" : this.xid
    }
    console.log("body is ", body);
    this.appservice.deleteData(body.id).subscribe((Response:any) => {

      console.log("Response is ", Response.json());
    }
    )
  }

  getInfo(){
    this.tableValidation=true;
    console.log("Get Button is clicked");
    this.appservice.getData().subscribe(response=>this.getResponse(response))
  
  }
  getResponse(response)
  {
    this.obj=response;
    this.auth=true;
  }
  
  settings = {
    actions: {
      delete : false,
      edit : false,
      add : false
    },
    columns: {
      id: {
        title: 'id'
      },
      title: {
        title: 'title'
      },
      author: {
        title: 'author'
      }
    }
  };


   



}


