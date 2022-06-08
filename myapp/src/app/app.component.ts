import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  selector: 'app-root',
  template:`<button (click)="getSomeData()">Test GET Request</button>
  <ul>
  <li *ngFor="let myData of namesArray">{{myData.first}} 
  {{myData.last}}</li>
  </ul>
  
<table>
 <tr>
 <td>Stree Address: </td>
 <td>&nbsp;&nbsp;</td>
 <td><input type='text' [(ngModel)]="streetAddress"></td>
 </tr>
 <tr>
 <td>City: </td>
 <td>&nbsp;&nbsp;</td>
 <td><input type='text' [(ngModel)]="city"></td>
 </tr>
 <tr>
 <td></td>
 <td></td>
 <td><input type="submit" (click)="submitInput()"/></td>
 </tr>
 </table>
 <h3>Please enter the customer informatino:</h3>
 <child [callParent]="parentFuncRef" [city]="operations"></child>
 {{dataFromChild}}

  `

})
export class AppComponent {
  title = 'myapp';
  namesArray!: Array<any>;
  _http:HttpClient;
  streetAddress!:string;
  @Input()
  city!: string;
  @Input() // Reference to parent function. Ref provided by parent.
  callParent!: Function;

  parentFuncRef!: Function;
  operations!: string;
  dataFromChild!: string;
  myContent!:string;
  myPastedContent!:string;

  // This function is called by the Angular framework after
  // the constructor executes.
  public ngOnInit() { 
  this.parentFuncRef = this.myCallBackFunction.bind(this);
  }
  // This function can be called by child.
  public myCallBackFunction(streetAddress:any, city:any) {
  this.dataFromChild = 
  "Street Address: " + streetAddress + " " +
  "City: " + city;
  }

  submitInput() {
  this.callParent(this.streetAddress, this.city);
  }
 // Since we are using a provider above we can receive 
 // an instance through an instructor.
 
 constructor(private http: HttpClient) {
  this._http = http;
  }
 


  getSomeData() {
    this._http.get<any>('./assets/test.json')
    // Get data and wait for result.
    .subscribe(result => {
    this.namesArray = result;
    }, 
    error =>{
    // Let user know about the error.
    alert(error);
    console.error(error)
    })
    }

    myMouseEnter() {
      console.log("Mouse entered!")
      }
    myKeyDown(event:KeyboardEvent) { 
        console.log(event)
        console.log(event.key)
        }
       
    myKeyUp(event:KeyboardEvent) {
          console.log(event)
          console.log(event.key)
        }
    myFocusEvent(description:any) { 
          console.log(description)
      }
             
      cutContent = '';
      cutEvent(content:any) { 
      this.cutContent = content;
      console.log(content)
      }
      pasteContent(myPastedContent:string) {
      console.log(this.cutContent);
      this.cutContent = '';
      }
      myContent2= '';
      copyevent(myPastedContent:string){
        console.log(this.myContent2);
        this.myContent2 = '';
      }

      myMouseHandler(event:any, description:any) { 
        console.log(description + " X: "
        + event.screenX.toString()
        + " Y:" + event.screenY.toString())
        }
        myMouseMoveHandler(event:any, description:any){

          console.log(description + " X: "
          + event.screenX.toString()
          + " Y:" + event.screenY.toString())
        }
       
}

