import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeDetail } from 'src/app/shared/employee-detail.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service:EmployeeDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(el:EmployeeDetail){
    this.service.formData = Object.assign({},el);
    //Object.assign(this.service.formData,el);

  }

  onDelete(code: number){
    if(confirm('Are you sure to delete this Record ?')) {
    this.service.deleteEmployeeDetail(code)
    .subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully', 'Payment Detail Register')
      },
    err => {
      console.log(err);
    });
    }
  }

}
