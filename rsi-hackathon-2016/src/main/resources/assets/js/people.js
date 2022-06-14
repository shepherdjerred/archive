function showPopup(name, text) {
    document.getElementById("popup").style.display = "block";
    document.querySelector("body > div > div.page-content.management > div.bio > h1").innerHTML = name;
    document.querySelector("body > div > div.page-content.management > div.bio > p").innerHTML = text;
    console.log("show");
}

document.getElementById("close").addEventListener("click", new function () {
    console.log("close");
    document.getElementById("popup").style.display = "none";
});

document.getElementById("kathy").addEventListener("click", showPopup(
    "Kathy Brittain White",
    "Dr. Kathy Brittain White is Founder and President of Rural Sourcing, Inc. Rural Sourcing, founded in 2003, was the 2005 Innovator Award winner given by the Southern Growth Policy Board for economic development and workforce development. She also established the Horizon Institute of Technology Foundation in 2003 to support economic and workforce development in the Delta. Prior to founding the company, White was executive vice-president and chief information officer at Cardinal Health, Inc., a $65 billion healthcare company. She held executive information technology positions with Baxter Healthcare and Allied-Signal now Honeywell. From 1981-1991, White was an associate professor of information technology in the Bryan School of Business, University of North Carolina at Greensboro. White currently serves on the board of directors of Mattel, Inc., Novell, Inc., and Certegy, Inc. She is also a technology advisor to Southern Capitol Ventures (a venture capital fund focused on emerging technology companies.) She was named in Forbes Top 25 American's Businesswomen in 2001; Top 100 CIO's, 2001, Information Week; top 10 CIO's in the United States, 1997 Information Week. White is a frequent speaker at national and international conferences on information technology trends, workforce development and rural economic development. White holds a Bachelors and an MBA from Arkansas State University and a doctorate in business from University of Memphis."));
document.getElementById("ken").addEventListener("click", showPopup(
    "Ken Yorgensen",
    "Ken Yorgensen joins Rural Sourcing with over twenty years of experience in information technology. Prior to joining Rural Sourcing, Mr. Yorgensen was Vice President, Enterprise Technology for Cardinal Health, Inc. His responsibilities included architecture, standards, data center operations, telecommunications, networking and administration of $53M budget and staff of 375. Mr. Yorgensen also held executive positions with Baxter Healthcare, Allegiance and Union Carbide. Mr. Yorgensen received his BS degree from Mercy College."));
document.getElementById("stacy").addEventListener("click", showPopup(
    "Stacy Navarro",
    "Stacy Navarro is responsible for all human resource activities but specifically focused on recruiting, retaining and rewarding information technology professionals.mPrior to Rural Sourcing, Ms. Navarro had more than ten years of professional experience in staffing, benefits, compensation, training and policy development at Baxter Healthcare, Allegiance Healthcare and Cardinal Health. Much of her human resource background has been in supporting information technology organizations and decentralized consulting groups. Ms. Navarro is recognized for her innovative staffing and recruiting solutions including key human resource leadership of the award-winning $100 million SAP project at Allegiance and the launch of the Virtual Internship Program which has been continued and expanded by Rural Sourcing. Ms. Navarro received her Associate’s degree in Liberal Arts from Hesston College and a Bachelor’s Degree in Interpersonal and Group Communications from Trinity University."));
document.getElementById("henry").addEventListener("click", showPopup(
    "Henry Torress",
    "Prior to joining Rural Sourcing, Henry Torres was an information technology executive specializing in areas of distribution, logistics, store operations and e-commerce. His career included executive positions with Wal-Mart, Neiman-Marcus, CSK Auto and Frederick’s of Hollywood. While at Wal-Mart, Torres worked in the Latin America division expanding their information technology capabilities in merchandising and operations. While at both CSK Auto and Frederick’s he held positions as Sr. Vice President, CIO. Additionally, he was instrumental in developing the e-commerce channel for Frederick’s and was part of an Internet start-up in Silicon Valley. Currently, Torres is also Senior Lecturer of Computer & Information Technology at Arkansas State University - College of Business. He is a member of the Association of Information Technology Professionals and the Institute of Industrial Engineers. In addition to his professional affiliations, Torres serves on the Board of Directors of several non-profits and is on the Board of Accelerate Arkansas, a statewide board assembled to identify the steps for new and better-paying jobs in a knowledge-based economy. He received a B.S. degree in Industrial Engineering from Texas Tech University and a Masters in Business Administration from Henderson State University."));
document.getElementById("pennie").addEventListener("click", showPopup(
    "Pennie R. Hill",
    "Pennie Hill is responsible for all financial activities of the company including involvement with outside accounting and financial providers. Ms. Hill joined Rural Sourcing in 2003 in the Jonesboro office as manager of accounting and finance becoming the third employee of the company. In that role, she established all of our initial financial and accounting activities. She was promoted in 2005 to Director of Finance and relocated to our Durham NC administrative office. She is also an Associate with Southern Capitol Ventures. Ms. Hill has a bachelor’s degree in Finance and Economics from Lyon College where she graduated with honors. She was named a TranSouth Scholar Athlete. She holds an MBA in Finance from Arkansas State University where she was awarded the Fred Stull Fellowship and graduated with honors. She is a member of the Association for Financial Professionals."));
document.getElementById("james").addEventListener("click", showPopup(
    "James (Buddy) Glenn",
    "James (Buddy) Glenn is responsible for high-quality, on-time delivery of client projects, the mentoring of project teams, and the implementation of Best-Practice process methodology in our Greenville, NC Development Center. Prior to Rural Sourcing, Mr. Glenn was a Senior Consultant with Keane, Inc., where he was responsible for full-lifecycle client management, and successfully implemented Project Management Offices. During his tenure at Keane, Inc., Buddy rolled out a platform migration to $3.5 million telecommunications and data network, managed outsourcing of a MIS Department for a Fortune 500 company, and successfully redesigned a legacy system into client server deployment. Previously, Mr. Glenn held management roles at Florida Power Corporation and Origin Technology in Business, a division of Phillips. Buddy holds a Bachelors of Science in Computer Science from the University of West Florida."));
document.getElementById("lindal").addEventListener("click", showPopup(
    "Lindal Cossey",
    "Lindal Cossey manages operations of our Jonesboro, Arkansas center, providing leadership and accountability from project initiation through successful completion. Lindal also contributes to business case development, competitive intelligence and industry-leading process design. Prior to joining Rural Sourcing, Lindal was a Principal Consultant with Clear Focus Consulting, a management and leadership consultancy working primarily with small businesses and not-for-profit groups in Southeast Missouri. Previously, Lindal served as Project and Program Manager with California Microwave, Inc., a Washington, D.C. based defense contractor developing airborne reconnaissance systems for the Department of Defense. Lindal also completed 21 years of service as an Army intelligence analyst with assignments in Europe, Central and South America, and Southwest Asia."));