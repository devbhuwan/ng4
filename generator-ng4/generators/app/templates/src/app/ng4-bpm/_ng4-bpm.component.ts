import {Component, OnInit} from '@angular/core';

@Component({
  selector: '<%= componentPrefix %>-<%= projectName %>-component',
  templateUrl: './<%= projectName %>.component.html',
  styleUrls: ['./<%= projectName %>.component.scss']
})
export class <%= projectNameCamelCase %>Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
