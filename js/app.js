var myApp = angular.module('myApp', []);

myApp.controller('ListController', ['$scope', function($scope) {
  $scope.students = JSON.parse("[{\"pic\":\"radhika.jpg\",\"name\":\"Radhika Andhavarapu\",\"brief\":\"IIT Kharagpur - Full Stack + Android Developer\",\"details\":\"I have graduated from IIT  Kharagpur in 2011. I have learnt Android Development at Gyan Data Pvt Ltd. I realized that the back end for mobile apps as well as websites is the same. So, I started learning Spring framework in Java in order to have the ability to build an entire product on my own. I wanted to speed up the learning process for full stack development. This is when I got to know about Code Astra. I have learnt Full Stack Development in about 3 months with the ability to build any product on my own.\",\"skills\":[{\"name\":\"Ruby\",\"score\":5},{\"name\":\"Ruby on Rails\",\"score\":4},{\"name\":\"JavaScript\",\"score\":3},{\"name\":\"Mobile Dev\",\"score\":4}],\"links\":{\"resume\":\"http://res.cloudinary.com/hcc7j6j6t/image/upload/v1425099755/documents/CodeAstra-FullStack-Radhika.pdf\",\"website\":\"http://dhiraka.github.io/\",\"github\":\"https://github.com/dhiraka\",\"linkedin\":\"https://www.linkedin.com/profile/view?id=33839461\",\"facebook\":\"https://www.facebook.com/radhika.andhavarapu\",\"twitter\":\"https://twitter.com/dhiraka\"}},{\"pic\":\"anvesh.jpg\",\"name\":\"Anvesh Reddy\",\"brief\":\"IIT Madras - Full Stack Web Developer - Filmmaker\",\"details\":\"I am a hard-working enthusiast. Right from my childhood I have given my best and excelled at anything I pursued. I hold a BTech degree in electrical engineering from IIT Madras. My passion in web development germinated from  my appreciation for UX design and I dived deeper into technologies to be able to craft all aspects of a web product. I have invested last few years into filmmaking, a passion I hold close to my heart. I have understood the creative, technical and organisational aspects of whole process of filmmaking. Because of my broad range of interests \\u0026 hobbies, I have an unique perspective and broader approach to the people \\u0026 problems around. Product development with latest technologies is what I would love my career to revolve around.\",\"skills\":[{\"name\":\"Ruby\",\"score\":4},{\"name\":\"Ruby on Rails\",\"score\":4},{\"name\":\"JavaScript\",\"score\":3}],\"links\":{\"resume\":\"http://res.cloudinary.com/hcc7j6j6t/image/upload/v1424874291/documents/CodeAstra-FullStack-Anvesh.pdf\",\"website\":\"http://www.anveshv.com/\",\"github\":\"https://github.com/Anvesh24\",\"facebook\":\"https://www.facebook.com/anveshv1\"}},{\"pic\":\"rohit.jpg\",\"name\":\"Rohit Reddy D\",\"brief\":\"IIT Madras - Product Dev - Techie - Entrepreneurial\",\"details\":\"I am an engineer by education, entrepreneurial by passion and a full stack developer by profession. I love to ideate, brainstorm, conceive and build/code products that solve problems with a very high emphasis on User Experience. Full stack development  equips me with all the resources to understand a feature and build it in its entirety. I rely on heuristics to constantly measure the impact of my work. I graduated from IIT Madras. Built India's 1st Flapping Wing aircraft. Headed India's first and only student run tech-lab (20000sq. ft, 600 students, 6 clubs, 20Lakhs(INR), 2 Limca records). Distinguished performance in Masters research work, published my work in \\\"Diamond and other materials\\\" Journal. Opted out of placements, started a web services company, served 40 customers and over 70 projects in a span of 2 years. Dived into Full Stack web development, with Ruby on Rails as the framework of my choice. Looking forward to working in Product dev teams, contributing to core product, leading/managing the product dev and product lifecycle.\",\"skills\":[{\"name\":\"Ruby\",\"score\":5},{\"name\":\"Rails\",\"score\":4},{\"name\":\"JavaScript\",\"score\":3},{\"name\":\"Product Management\",\"score\":5}],\"links\":{\"resume\":\"http://res.cloudinary.com/hcc7j6j6t/image/upload/v1424871595/documents/CodeAstra-FullStack-Rohit.pdf\",\"website\":\"http://rohitdg.github.io/\",\"github\":\"https://github.com/rohitdg\",\"linkedin\":\"http://linkedin.com/in/rohitreddydega\",\"facebook\":\"https://www.facebook.com/rohit.reddy.90\"}},{\"pic\":\"ravi.jpg\",\"name\":\"Ravikanth Andhavarapu\",\"brief\":\"IIT Madras - Full Stack Developer with Project Management Experience\",\"details\":\"Here are five things I can offer which I think are useful for you:\\u003col\\u003e\\u003cli\\u003eI am a graduate from IIT Madras.\\u003c/li\\u003e\\u003cli\\u003eI can code. Please check out a list of my projects in my resume.\\u003c/li\\u003e\\u003cli\\u003eI can communicate well and inspire people. I had a unique opportunity of creating and leading a team of over 100 people for two years.\\u003c/li\\u003e\\u003cli\\u003eI handle stress really well. I have been through a 3,500 hour training which had this as one of the benefits.\\u003c/li\\u003e\\u003cli\\u003eI can pay attention for long periods of time to any activity of my choice. The same training helps me with this too.\\u003c/li\\u003e\\u003c/ol\\u003eFor more specifics and details let us have an interview.\",\"skills\":[{\"name\":\"HTML5\",\"score\":4},{\"name\":\"CSS3\",\"score\":4},{\"name\":\"JavaScript\",\"score\":4},{\"name\":\"Ruby\",\"score\":5},{\"name\":\"Ruby on Rails\",\"score\":5}],\"links\":{\"resume\":\"http://res.cloudinary.com/hcc7j6j6t/image/upload/v1424872343/documents/CodeAstra-FullStack-Ravi.pdf\",\"website\":\"http://helloravi.github.io/\",\"github\":\"https://github.com/helloravi\"}},{\"pic\":\"srikanth.jpg\",\"name\":\"Srikanth P\",\"brief\":\"IIT Madras - Full Stack Web Developer\",\"details\":\"Graduated from IIT Madras with a dual degree in Chemical Engineering. I am a full stack web developer. I work on Ruby on Rails framework. I have built two products till date along with learning in CodeAstra. Understanding the product requirement and writing code and the development process  excites me most. My patience and perseverance have been my biggest asset in understanding web development from scratch to deployment stage.\",\"skills\":[{\"name\":\"Ruby\",\"score\":5},{\"name\":\"Ruby on Rails\",\"score\":5},{\"name\":\"JavaScript\",\"score\":4}],\"links\":{\"resume\":\"http://res.cloudinary.com/hcc7j6j6t/image/upload/v1424046846/documents/CodeAstra-FullStack-Srikanth.pdf\",\"website\":\"http://psrikanth88.github.io/\",\"github\":\"https://github.com/psrikanth88\"}},{\"pic\":\"sandeep.jpg\",\"name\":\"Sandeep Chowdary V\",\"brief\":\"IIT Madras - Full Stack Developer\",\"details\":\"I graduated from IIT Madras in 2009 with a bachelor's degree in electrical engineering . During the first few years after graduating from IIT, I worked as a mathematics teacher/consultant. I was always intrigued by logic either in the form of puzzles or  core mathematics or programming. Lately, I am fascinated with the ways and reach of technology. Having spent intense training hours hacking in the Code Astra bootcamp, I would like to take up challenging projects in full-stack web development.\",\"skills\":[{\"name\":\"Ruby\",\"score\":4},{\"name\":\"Ruby on Rails\",\"score\":4},{\"name\":\"JavaScript\",\"score\":3}],\"links\":{\"resume\":\"http://res.cloudinary.com/hcc7j6j6t/image/upload/v1424874110/documents/CodeAstra-FullStack-Sandeep.pdf\",\"website\":\"http://vsc5656iit.github.io/\",\"github\":\"https://github.com/vsc5656iit\",\"facebook\":\"https://www.facebook.com/sandeep.chowdary.31542\"}},{\"pic\":\"poorani.jpg\",\"name\":\"Poorani\",\"brief\":\"Full Stack - UI/UX Enthusiast - Testing Maniac\",\"details\":\"I have graduated as an Electronics and Communication engineer from Amrita Vishwa Vidyapeetham. Inspite of the job oppurtunities from companies, I have joined Code Astra, India's first coding bootcamp, to learn web development, because as a developer I would have the ability to create imaginative and beautiful webapps that are technically impressive. During the intense training sessions we had in the camp, I have learned to push myself in every intellectual aspect, may it be in making my thought process more sophisticated, or in getting involved in creative discussions with my fellow batchmates.  I had an overview of the entire web development process and looking for a technically challenging job in product development, automated testing or front-end development.\",\"skills\":[{\"name\":\"HTML5\",\"score\":4},{\"name\":\"CSS3\",\"score\":4},{\"name\":\"Automated Testing\",\"score\":4},{\"name\":\"Ruby\",\"score\":4},{\"name\":\"Ruby on Rails\",\"score\":3},{\"name\":\"JavaScript\",\"score\":3}],\"links\":{\"resume\":\"http://res.cloudinary.com/hcc7j6j6t/image/upload/v1424872059/documents/CodeAstra-FullStack-Poorani.pdf\",\"website\":\"http://poorani11.github.io/\",\"github\":\"https://github.com/poorani11\"}},{\"pic\":\"bhavya.jpg\",\"name\":\"Bhavya Sri Nutakki\",\"brief\":\"Frontend Developer - QA Engineer - BDD Freak\",\"details\":\"I have completed my graduation in Information Technology. I am enthusiastic and I thrive to learn new things. Art and crafts being my hobby, am inclined towards designing and thus started to learn web designing in Code Astra. Its then I have indulged myself with Web Development and learnt full stack development.\",\"skills\":[{\"name\":\"HTML5\",\"score\":5},{\"name\":\"CSS3\",\"score\":4},{\"name\":\"JavaScript\",\"score\":3},{\"name\":\"Automated Testing\",\"score\":5},{\"name\":\"HCI\",\"score\":4},{\"name\":\"Ruby on Rails\",\"score\":3}],\"links\":{\"resume\":\"http://res.cloudinary.com/hcc7j6j6t/image/upload/v1424873375/documents/CodeAstra-UI-UX-QA-Bhavya.pdf\",\"website\":\"http://bhavya91.github.io/\",\"github\":\"https://github.com/bhavya91\",\"linkedin\":\"https://www.linkedin.com/in/bhavyanutakki\"}},{\"pic\":\"jyothi.jpg\",\"name\":\"Jyothikumar Janyavula\",\"brief\":\"MBA - Tech Enthusiast - UI, UX and Testing Whiz\",\"details\":\"I hold a B. Tech degree in Electronics and a postgraduate degree in MBA. My career goal is to be a valuable member of an exciting team, constantly learning and applying new technologies. I am very confident and take up challenges at work and in life, because they are exciting in nature and teach a lot. I am looking forward to a career in software engineering/development, more specifically in the web development space. I love crafting beautiful looking website by using front end tools and also adding a lot of interactivity with Javascript. I would love to see my work being useful, valued and enjoyed by users/customers. I was one of the 15 students selected for the first batch of India's first coding bootcamp. I started with absolutely ZERO knowledge of programming and over a span of 4 months have grasped an overview of Full Stack development and am confident of front end development and automated testing to be specific.\",\"skills\":[{\"name\":\"HTML5\",\"score\":5},{\"name\":\"CSS3\",\"score\":5},{\"name\":\"JavaScript\",\"score\":3},{\"name\":\"Automated Testing\",\"score\":4},{\"name\":\"HCI\",\"score\":4},{\"name\":\"Ruby on Rails\",\"score\":2}],\"links\":{\"resume\":\"http://res.cloudinary.com/hcc7j6j6t/image/upload/v1424873893/documents/CodeAstra-UI-UX-QA-Jyothi.pdf\",\"website\":\"http://jyothikumar1990.github.io/\",\"github\":\"https://github.com/jyothikumar1990\",\"linkedin\":\"https://www.linkedin.com/profile/view?id=395832385\",\"facebook\":\"https://www.facebook.com/jyothikumar.janyavula\"}},{\"pic\":\"chirag.jpg\",\"name\":\"Chirag\",\"brief\":\"CS Undergrad - Aspiring Entrepreneur\",\"details\":\"I am a very passionate, creative and hard working full stack developer with over five months of boot camp experience in Ruby on Rails, Interaction Design and Agile Development. With over 1000 hours of development experience, I clock 12+ work hours and often exceed the expectations of my peers and clients. Pursuing Computer Science, I have a solid foundation of Object Oriented principles and can covert making coffee to code. With numerous art trophies under my belt, I can design interfaces beautiful to the eye powered by solid back end code. Looking forward for a challenging career in web development and security.\",\"skills\":[{\"name\":\"Ruby\",\"score\":4},{\"name\":\"Ruby on Rails\",\"score\":5},{\"name\":\"JavaScript\",\"score\":5},{\"name\":\"Design\",\"score\":4}],\"links\":{\"resume\":\"http://res.cloudinary.com/hcc7j6j6t/image/upload/v1424047948/documents/CodeAstra-FullStack-Intern-Chirag.pdf\",\"website\":\"http://chi6rag.net/\",\"github\":\"https://www.github.com/chi6rag\",\"twitter\":\"https://www.twitter.com/chi6rag\"}}]");
}]);