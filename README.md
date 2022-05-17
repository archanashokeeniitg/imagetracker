
CMPE-282 Sec 48 - Cloud Services
Archana Shokeen (015237378)
Project Report
San Jose State University




































CMPE-282 Sec 48 - Cloud Services
SMART GALLERY

Links:
Github
https://github.com/archanashokeeniitg/imagetracker


PPT
https://docs.google.com/presentation/d/1sNMXM6ThMpIqXe-DcAv8ykeAV7njcD_qcPGj3nbpoFM/edit?usp=sharing


Report
https://docs.google.com/document/d/1qQUmr-1m72o6mxhKGXXDNE7J2az-I-VK97VFzXYX-2c/edit?usp=sharing


Plan
https://docs.google.com/document/d/1dQMrFlSXEB6H98-bt5GtysX663gNY0GiWR_TUHRPKBo/edit?usp=sharing




	


Architecture Diagram
![arch](https://user-images.githubusercontent.com/66199202/168779863-9da1590e-5db9-477e-b8b6-d3a405222698.png)

Introduction

Smart Image is an image gallery that stores your pictures in a cloud based application. With an AWS backend for storage in the cloud, your images can be instantaneously retrieved without any worries of image loss.  It provides features like disaster resistance, robustness, fully scalable application.

![arch](https://user-images.githubusercontent.com/66199202/168779876-c45de343-0e53-4491-a07b-fa87857fb0f6.png)


Technologies & Functionalities

Smart Image uses multiple new technologies to ensure that the users have better control and access to their images. From the architectural diagram above, the application is written in React and hosted on AWS Amplify using graphql. The schema has templates for the image object and its information which are stored in both AWS S3 bucket and DynamoDB respectively.

Authentication is essential and a core area of our application development. AWS Cognito provides authentication using username and password, in addition to email and SMS notifications for registration so that only authorized users can access their application. Images uploaded to the bucket are segregated by username using IAM users.Services like download and delete is provided in the application so that images can also be downloaded locally or deleted from the S3 bucket.

Smart Labeling using Amazon Rekognition is implemented as the functionality of the project. Since we aim to build a platform like Google Photos for image storage, the labels will be used to search and sort the images. The labels will be linked to the react app using graphql and will be stored in the DynamoDB database. Thus, when a user uploads an image, they can also add labels which can be used to identify similar images in the gallery, which are improved in retrieval performance using  Cloudfront CDN, built into Amplify and Route53.

Finally, the application is hosted on Amplify which is complemented by Route53 for custom domain, so that anyone with the URL can access the application.

During the development process, code was hosted on GitHub for CI/CD purposes with regular commits. In the beginning, we cloned from a central repository branch and developed our components, and then merged them back into a central repository branch which we hosted on AWS Amplify.

Feature List
AWS Amplify Hosting
DynamoDB Tables
Appsync API with GraphQL
AWS Rekognition
Smart Labeling
Amplify Authentication with Cognito
Cloudfront CDN 
Autoscaling
Multi-AZ Redundancy
S3 Lifecycle Policy

Public URL
The application can be reached at the following link: https://dev.df6s286sea67w.amplifyapp.com/



Testing Credentials
SignUp and log in as a user:
username -test1
password - test@123

Sample Demo Screenshots

![arch](https://user-images.githubusercontent.com/66199202/168779876-c45de343-0e53-4491-a07b-fa87857fb0f6.png)
Landing page/Login page


Sign up page


Verification page


Home page
![arch](https://user-images.githubusercontent.com/66199202/168780464-207495f6-5a6f-4979-9574-80c6491916c9.png)

Upload page









Download (right-bottom button) or Delete (left-bottom button)  image with button

![arch](https://user-images.githubusercontent.com/66199202/168780472-5d6b1f8c-a320-4fd8-835d-a9a1afd52576.png)
Delete Functionality


Download Functionality

Click on the download button and you can download the image .

![3](https://user-images.githubusercontent.com/66199202/168780535-6877c066-4c90-4eb8-9152-43b5af9920ae.png)

AWS configuration screenshots

Hosting on AWS Amplify

![](https://user-images.githubusercontent.com/66199202/168780542-17207571-336a-41ed-88f1-b0750cf83cdf.png)



Monitoring 
CloudWatch And SNS to monitor unhealthy state
![](https://user-images.githubusercontent.com/66199202/168780547-8594a510-5484-4b77-ad1d-6e16e9b5bdf0.png)
    
DR Measures (MultiAZ)
Cross Region Replication for S3 Bucket



S3 TA / Versioning / Events
![](https://user-images.githubusercontent.com/66199202/168780549-96286dba-50a9-4763-95d0-495c6488d8f9.png)

AutoScaling






CI/CD with GitHub Integration
![](https://user-images.githubusercontent.com/66199202/168780552-3777b0d0-328a-4aee-8aed-b7e9dc9f5efa.png)

Domain management with AWS Amplify and R53 includes built-in CloudFront for CDN

![](https://user-images.githubusercontent.com/66199202/168780554-62e3d4f0-fded-4a84-aad1-d08b84b89722.png)

![](https://user-images.githubusercontent.com/66199202/168780557-f9933d6e-410f-4840-9abe-f0758e9b4262.png)
S3 buckets to store backend configurations and users’ images



AWS Cognito to handle user authorization





AWS DynamoDB to store users’ data
![](https://user-images.githubusercontent.com/66199202/168780560-54dc2def-f630-4807-bd31-9c787951a1cc.png)

AWS CloudFormation to manage stack of resources and policies


Lambda functions generated by Amplify


AppSync queries generated by Amplify with GraphQL
![](https://user-images.githubusercontent.com/66199202/168780564-930638c2-d4ff-4a6f-bbbf-29f4979aa1a0.png)


References

A. (2022). GitHub - archanashokeeniitg/imagetracker. GitHub. https://github.com/archanashokeeniitg/imagetracker

Getting started - AWS Amplify Docs. (2022). Aws.Com. https://docs.amplify.aws/start/?sc_icampaign=start&sc_ichannel=docs-home/q/integration/react


A. (2020). GitHub - archanashokeeniitg/image-library-appsync. GitHub. https://github.com/archanashokeeniitg/image-library-appsync




https://docs.amplify.aws/start/?sc_icampaign=start&sc_ichannel=docs-home/q/integration/react

https://docs.amplify.aws/start/getting-started/installation/q/integration/react/

https://github.com/dabit3/amplify-photo-sharing-workshop

https://docs.google.com/document/d/1_whh2ciUOJvpXwsEgLciUSCwYyCuaGnzxklP2aKL9bQ/edit#heading=h.wr3g01v25
Rdz

https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0

https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBjYWtlc3xlbnwwfHwwfHw%3D&w=1000&q=80


