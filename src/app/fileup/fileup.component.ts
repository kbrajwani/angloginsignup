import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fileup',
  templateUrl: './fileup.component.html',
  styleUrls: ['./fileup.component.css']
})
export class FileupComponent implements OnInit {

  constructor(private http:HttpClient) { }
selectedFile:File=null;

  ngOnInit() {
  }

  onFileSelected(value){
    this.selectedFile=<File>value.target.files[0];
    
    console.log(value);
      }
      onUpload(){
        const fd=new FormData();
        fd.append('name','jinal shah');
        fd.append('image',this.selectedFile,this.selectedFile.name);
    console.log(fd.getAll(name));
    console.log(fd);
        this.http.post('http://localhost:3000/demo1',fd)
        .subscribe(
          res=>{
            console.log(res);
          }
        );
      }

}
