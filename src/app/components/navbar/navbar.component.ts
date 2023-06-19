import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
    enteredValue = '';
    defaultText = "Default Text";
    onAddText(){
        this.defaultText = this.enteredValue;
    }
}