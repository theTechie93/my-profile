import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  myName: string;
  myJob: string;
  contactDetails: any;
  skills: any

  constructor() {
    this.myName = 'Pradeep Yenkuwale';
    this.myJob = 'Sr. Application Developer - Full Stack';
    this.contactDetails = {
      phone: '+91 9880935431',
      email: 'pradeep1yenkuwale@gmail.com; pradeep93official@gmail.com',
      // behance: 'https://www.behance.net/Abdo-Host',
      github: 'https://github.com/theTechie93',
      stackoverflow: 'https://stackoverflow.com/users/7633739/pradeep-yenkuwale',
      linkedin: 'https://www.linkedin.com/in/pradeep-yenkuwale-a256a6a5/',
      twitter: 'https://twitter.com/Ypradeep12'
    };
    this.skills = [
      {
        name: "JavaScript, Node.js, Angular, TypeScript, GraphQL."
      },
      {
        name: "REST APIs, Middleware, API Integrations, Third Party System Integration."
      },
      {
        name: "MongoDB, MySQL, SQL, IBM DB2, IBM Cloudant."
      },
      {
        name: "Python, NumPy, Dictionaries, Pandas, BatchScript, ShellScript."
      },
      {
        name:"HTML5, CSS, Bootstrap, Material UI."
      },
      {
        name:"Tools: Postman, Soap UI, VS Code, Spring Tool Suite, PyCharm, Eclipse."
      }

    ]
  }

  ngOnInit(): void {
  }

}
