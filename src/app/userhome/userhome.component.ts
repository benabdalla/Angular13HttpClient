import { Component, OnInit } from '@angular/core';
import { ApiuserService } from '../apiuser.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
 user:any;
 isloading:boolean=true;
 texterr:string="";
 page: number = 1;
 count: number = 0;
 tableSize: number = 5;
 tableSizes: any = [3, 6, 9, 12];

  constructor(private listuser:ApiuserService) { }

  ngOnInit(): void {
     this.initData();
     this.fetchPosts();
  }
initData(){
  return this.listuser.getListuser().toPromise().then((rest?)=>{
console.log(rest);
this.user=rest

console.log(this.user);
console.log(this.user==undefined)
  }).catch(()=>{
    this.texterr="request   not   found   ===>";


  }).finally(()=>{
this.isloading=false;

  }

  );

}

fetchPosts(): void {
  this.listuser.getListuser().subscribe(
    (response) => {
      this.user = response;
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}
onTableDataChange(event: any) {
  this.page = event;
  this.fetchPosts();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.fetchPosts();
}


}
