import { Component, OnInit } from '@angular/core';
import { BehanceService } from '../../services/behance.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  experiences: any[];
  portfolio: any;
  p = 1;

  constructor(private behance: BehanceService) {
    this.experiences = [

      {
        title: 'Project Engineer',
        company: 'Solize India Technologies Pvt ltd, Bengaluru.',
        fromDate: {
          year: '2017',
          month: 'Sep'
        },
        toDate: 'Jan 2021',
        // tslint:disable-next-line:max-line-length
        description: [
          'Interaction with client and understand the client requirements.',
          'Design the functionality and implement the tools.',
          'Add Features to existing Applications, implement new features as per the client requirements.',
          'End to end basic testing of implemented features and tools release for consumer usage.          ',
          'Desktop Applications using Python.'
        ]
      },
      {
        title: 'Software Developer - Intern',
        company: 'Solize India Technologies Pvt ltd, Bengaluru.',
        fromDate: {
          year: '2017',
          month: 'Jan'
        },
        toDate: 'Aug 2017',
        // tslint:disable-next-line:max-line-length
        description: [
          'Application Development and Database Management.',
          'Interacting with the users of application and gathering the requirement from the users in the organization.',
          'Testing and deploying the application to the production environment.'
        ]
      },
      {
        title: 'Software Engineer - Full Stack Developer',
        company: 'Irisidea Tech Solutions Pvt Ltd, Bengaluru',
        fromDate: {
          year: '2021',
          month: 'Feb'
        },
        toDate: 'May 2022',
        // tslint:disable-next-line:max-line-length
        description: [
          'Daily Interaction with client on requirements and status updates.',
          'Design document and workflow diagrams for requested features and changes.',
          'Multi system/platform integration to fullfil the consumer need.',
          'Building NPM packages, publishing and using It in different applications.',
          'Building Re-usable microservices and system functionality.'
        ]
      },
      {
        title: 'Senior Software Developer - Full Stack',
        company: 'IBM India Pvt Ltd, Bengaluru',
        fromDate: {
          year: '2022',
          month: 'June'
        },
        toDate: 'Present',
        // tslint:disable-next-line:max-line-length
        description: [
          'Interaction with Application architect on requirement and system design.',
          'Working with team on tasks assignment and segregation of modules',
          'Deploying Applications, resolving vulnerabilities of the applications in cloud.',
          'Code Review for for the changes done by team and suggesting code changes for coding standards and logical changes.',
          'Resolving application vulnarabilities and keeping application containers upto date as per the organization security guidelines.',
          'Building Re-usable system.'
        ]
      }
    ];
    this.get_portfolio();
  }

  get_portfolio() {
    this.behance.getPortfolio().subscribe((response) => {
      this.portfolio = (response) ? response['projects'] : response;
    });
  }

  ngOnInit(): void {
  }

}
