import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-home-slider',
    templateUrl: './home-slider.component.html',
    styleUrls: ['./home-slider.component.css']
})

export class HomeSliderComponent {
    enteredHeading = "";
    enteredLink = "";
    @Output() articleCreated = new EventEmitter();

    onAddText(){
        const article = {
            heading: this.enteredHeading,
            link: this.enteredLink
        };
        this.articleCreated.emit(article);
    }
}