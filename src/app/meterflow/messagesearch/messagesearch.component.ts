import{Component,OnInit}from'@angular/core';
import{SearchInput}from'./search-input';
import{formatDate}from"@angular/common";
import{MeterflowService}from'../meterflow.service';
declare var $ :any;

import{Meterflow}from'../meterflow';
@Component({
	selector:'app-messagesearch',
	templateUrl:'./messagesearch.component.html',
	styleUrls:['./messagesearch.component.css'
]})

export class MessagesearchComponent implements OnInit {
	searchInput=new SearchInput();
	public result:[];
	public show = false;
	public nodata = false;
	public startDate:Date;
	public endDate:Date;
	

	dtOptions:any={};

	constructor(public meterflowService: MeterflowService) {
		this.searchInput.include="ALL";
		this.startDate=new Date();
		this.startDate.setMonth(this.startDate.getMonth() - 1);
		this.startDate.setHours(0);
        this.startDate.setMinutes(0)
        this.endDate=new Date();
        this.endDate.setHours(23);
        this.endDate.setMinutes(59)
		this.searchInput.startDate = formatDate(this.startDate, 'yyyy-MM-ddTHH:mm', 'en-US');
		this.searchInput.endDate = formatDate(this.endDate, 'yyyy-MM-ddTHH:mm', 'en-US');
		this.result =[];
		
   }

  ngOnInit(): void {
  	 this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu : [5, 10, 25],
      processing: true,
      scrollX: true,
      autoWidth: true
    };
    $('#spinner').hide();
    $(".dataTables_scrollBody").width($(".dataTables_scrollHead").width());
  }
	messageSearch(form:SearchInput) {
	console.log('messageSearch called');
	$('#spinner').show();
	 this.result =[];
	 this.nodata=false;
	 this.getMessageSearchFilesAll(form);
	//$('#spinner').hide();
	}
	
	reset() {
	console.log('reset called');
	$('#spinner').hide();
	}
	

	getMessageSearchFilesAll(form:SearchInput){
	this.meterflowService.getMessageSearchFilesAll(form).subscribe((data: any)=>{
 	  console.log(data);
 	  if(data.results.length){
 	  console.log('setting data');
       	  this.result=data.results;
       	  this.show =true;
       }else{
        console.log('no data');
        this.show =false;
        this.nodata=true;
       }
       $('#spinner').hide();
      $("#searchResultsTab")[0].click()
    }) 
    
    $(".dataTables_scrollBody").width($(".dataTables_scrollHead").width()); 
    $('#messageSearchTable').DataTable().columns.adjust().draw();
	}
}
