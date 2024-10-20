# Revision of 1st phase
Revision of the deliverables presented in the 1st phase and the list of changes with an explanation.
## Table of content
* [Usecase Diagram](#usecase-diagram)
	* [Before Revision Diagram](#before-revision-diagram)
	* [After Revision Diagram](#after-revision-diagram)
* [DFD Level 0](#dfd-level-0)
	* [Before Revision DFD](#before-revision-dfd)	
	* [After Revision DFD](#after-revision-dfd)
## Usecase Diagram
### Before Revision Diagram
Registration
[![Untitled-document-page-0001.jpg](https://i.postimg.cc/Xv4Kt4FK/Untitled-document-page-0001.jpg)](https://postimg.cc/RWpnHrgq)

Job Announcement
[![Untitled-document-page-0002.jpg](https://i.postimg.cc/FsSjR7Vg/Untitled-document-page-0002.jpg)](https://postimg.cc/CzFZrMtz)

Announcement Post Management
[![Untitled-document-page-0003.jpg](https://i.postimg.cc/htq5sJDp/Untitled-document-page-0003.jpg)](https://postimg.cc/Czm7Lxfq)

Job Browsing (homepage, recommendations, and search)
[![Untitled-document-page-0004.jpg](https://i.postimg.cc/3JQ15Psw/Untitled-document-page-0004.jpg)](https://postimg.cc/c6Twf54q)

Job Application
[![Untitled-document-page-0005.jpg](https://i.postimg.cc/j5JHBXvN/Untitled-document-page-0005.jpg)](https://postimg.cc/0MPKw7T2)

Job interview
[![Untitled-document-page-0006.jpg](https://i.postimg.cc/8zKL530M/Untitled-document-page-0006.jpg)](https://postimg.cc/PCDCV6h5)

Payment
[![Untitled-document-page-0007.jpg](https://i.postimg.cc/6qyDkFgc/Untitled-document-page-0007.jpg)](https://postimg.cc/kRP18YnR)

Admin
[![Untitled-document-page-0008.jpg](https://i.postimg.cc/4d3McrfG/Untitled-document-page-0008.jpg)](https://postimg.cc/LqrNKQgQ)

Account Management
[![Untitled-document-page-0009.jpg](https://i.postimg.cc/cLB0BGSt/Untitled-document-page-0009.jpg)](https://postimg.cc/XrqRnhXn)

ChatBot and Support System
[![Untitled-document-page-0010.jpg](https://i.postimg.cc/zXkcdzyN/Untitled-document-page-0010.jpg)](https://postimg.cc/jLLc2r63)

### After Revision Diagram
[![111.png](https://i.postimg.cc/zBpTF1jb/111.png)](https://postimg.cc/r00dq37M)
#### Overall Editing
1.  Change some of processes’ name to be more proper
2.  Change and delete some relations and processes
3.  Combine all processes into one final use case diagram
    
#### Admin
1.  Delete “log in to administrative account”
2.  Delete “back up important data”
3.  “Manage content in the system” change to “Manage content”
4.  “access to various statistical data and information” change to “access statistical data”
5.  “collect the data and keep in the company’s data storage” change to “Keep data in the storage”
6.  “create a new admin account” change to “create a admin account”
7.  Add “Manage account”
#### Payment
1.  “Charge the service fee” change to “Charge the rest of the service fee”
2.  “Initiate Payment (Pay deposit)” change to “Initiate Payment”
#### Job announcement
1.  Delete “See pricing (deposit) condition’ (delete it because it can combine with “Create a job announcement post”)
2.  “See statistical post information (create date, time ,# of views)” change to “See statistical data Reaching user support”
3.  “Get in charge of the chat” change to “Take control of the chat”
#### Job Interview System
1.  “Join online Meeting for Job Interviews” change to “Join online Meeting”
2.  “Manage application (Accept/Reject)” change to “Manage application”
3.  “Manage interview result (Accept/Reject)” change to “Manage interview result”
#### Job application
1.  Delete “Send response email”
2.  “Apply jobs” change to “Apply for job”
3.  Delete the relation between “Apply job” and Recruitment unit
4.  Delete the relation between “Manage interview” and Applicant
5.  Change the relation of “Apply for jobs” and “Manage interview” to be extend relation
#### Payment
1.  Delete “Refund Processing” because the system will do the process automatically
2.  Combine “Charge the service fee”, “Pay via credit card”, and “initiate Payment” into “Make a deposit” that have extend relation with “Make final payment” because we want to simplify the the process
## DFD Level 0 
### Before Revision DFD
[![Dfd-brfore.jpg](https://i.postimg.cc/26GdFJKk/Dfd-brfore.jpg)](https://postimg.cc/TLyWTkxF)
### After Revision DFD
[![222.png](https://i.postimg.cc/C1vffshb/222.png)](https://postimg.cc/G8ypWYsp)
#### Applicant
1.  Add input “Selected job”. This input is added because the system needs to know which job the applicant is applying for.
2.  Add output “Applicant result”. This output is added because the system also needs to send the recruitment unit’s decision back to the applicant.
3.  Add input “CV/Resume”. This input is added to align with the use case that applicants can submit their CV or Resume when applying for a job.
4.  Add input “Deposit payment”. This input is added to align with the use case that the applicant must pay the deposit after applying for a job.
5.  Add input “Final payment”. This input is added because the applicant accepts the job then pays the other half to complete this job.
6.  Add output “Payment receipt”. This output is added because the applicant has successful final payment that is evidence of money transfer.
7.  Add output “Refund receipt”. This output is added in case that applicant cannot get a job. The applicant must get refund money from the system and get evidence of money transfer.
8.  Delete “Payment info”
#### Recruitment Unit
1.  Add input “Recruitment decision”. This input is the result that the recruitment unit accepts or rejects the applicant.
    
2.  Add input “Deposit payment”. This input is added to align with the use case that the recruitment unit must pay the deposit after announcing for a job.
3.  Add input “Final payment”. This input is added because the recruitment unit accepts the applicant then the recruitment unit pays the other half to complete this getting applicant.
4.  Add output “Payment receipt”. This output is added because the recruitment unit has successful final payment that is evidence of money transfer.
5.  Add output “Refund receipt”. This output is added in case that recruitment unit cannot get an applicant. The recruitment unit must get refund money from the system and get evidence of money transfer.
6.  Add output “Interview video recording”. This output is added because it has a record interview between the applicant and the recruitment unit.
7.  Delete “Payment info”
#### Admin
1.  Add output “Applicant’s info”. This output is added to the information of the applicants.  
2.  Add output “Recruitment unit’s info”. This output is added to the information of the recruitment unit.
3.  Add output “Job announcement”. This output is added because the admin can see the job announcement.


> Written with [StackEdit](https://stackedit.io/).
