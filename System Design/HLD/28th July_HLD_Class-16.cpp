Date : 28th July 2024
Mentor: DEVANG SHARMA
Batch: May Batch (System Design) - Tutort Academy

Agenda: System Design - Case Studies

(1) System Design Interviews: A step by step guide: DONE
(2) Designing a URL Shortening service like TinyURL: DONE
(3) Designing Pastebin: DONE

(4) Designing Instagram: DONE
(5) Designing Facebook Feed: DONE
(6) Designing Twitter: DONE

(7) Designing Dropbox/Google Drive/OneDrive: DONE

(8) Design Netflix/Youtube/Hotstar: DONE
(9) Design Whatsapp/FB Messenger/Chat Application: DONE

"Please Type 'Hi' in the Chat Box if you have joined and Can See this Screen".




--------> CASE STUDY-8: DESIGNING WHATSAPP/Messenger/Telegram/Chat Application Services




(A) FB Messenger vs Whatsapp


Common:

- Chat Applications
- Last Seen
- Read Receipts
- Audio, Video Calls
- Group Chats





Chats at FB Messenger -> Stored in Facebook Server? - YES


Chats at Whatsapp -> Stored in Facebook Server? - NO




FB Messenger Chats?
- Backup: No


FB Messenger: Login -> See Chats




FB Messenger -----> Uninstall and Reinstall it -----> All Chats will be as it is
													-----> Chats are Stored at FACEBOOK End







Whatsapp:
Chats ----> Backup? -- YES



Whatsapp ------> Backup data: Last Month ------> Uninstall and Reinstall it 
											------> Chats would be from the BACKUP (last month)
											------> Chats are NOT Stored at FACEBOOK End






(B) Whatsapp chats are "End to End Encrypted"

Client-Side/Sender Side: Encrypted
Server-Side/Receiver Side: Encryption











(1) What is Whatsapp?

- A Chat Application which provides text-based instant messaging services to users.
- Can be accessed by Mobile, Website or Smart Watches
- Apart from text-based, it can be media (photo, video, GIFs), locations, contacts, stickers etc



(2) Requirements Clarification:

(A) Functional Requirements:

- Should Support 1:1 Chats
- Should Support Group Chats
- Should Have Video, Image and File Sharing Capabilities
- Should Indicate read receipt of messages
- Show the last seen of users
- Status/Story: 24 Hrs (Seleted Users)
- Calls: Video and Audio Calls



(B) Non-Functional Requirements:

- Should have VERY VERY Low Latency
- Should be Always Available
- There should not be any lag
- Should be VERY highly Scalable



WA: 3.8 Bn Users

World: 7.6 BN
Russia and China: Blocked: 2.4 Bn
UAE + Middle Eastern : VPN




Availability     >>>>>     Consistency



Strong Consistency:
All Nodes will be updated with most recent data at same time



Eventual Consistency:
All Nodes will be updated with most recent data eventually




Eventual Consistency in Whatsapp:

- Devices: A (Mobile), B (Website), C (Smart Watch)

A: Send/Receive Message
Devices B,C: Take some time to be in sync with Device A








Multiple Devices Sync:
https://engineering.fb.com/2021/07/14/security/whatsapp-multi-device/






(3) Capacity Estimation and Constraints (Back of the Envelope Estimation)


Total Users for WA: 3.8 Bn
Monthly Active Users = 2 Bn
Daily Active Users = 1 Bn


-------> Total Messages in a Day


DAU = 1 Bn
On an average, Each User Send 40 messages daily
Total Number of Messages per day = 40 Messages * 1 Bn = 40 Bn Messages/day





-------> Storage Estimation:

Assuming an average size of 100 KB per message,
In 1 Day, Storage Required
= 40 Billion Messages * 100 KB
= 4 TB / Day


To Store 5 Years of Chat History:
= 4 TB * 365 Days * 5 Years = 7.2 PB


We would also need users information, metadata, message_id, timestamp etc
- Not included compression and replication in calculation










-----------> Bandwidth Estimation:


4 TB / 86400 second ~= 50 MB / second

For Both Upload and Download data






-------> Final Numbers:


Total Messages = 40 Bn per Day
Storage for each day = 4 TB
Storage for 5 Years = 7.2 PB
Incoming Data = 50 MBps
Outgoing Data = 50 MBps










(4) High Level Diagram

Image: Diagram


At a high-level,
We will need a Chat Server that will be the central piece
orchestrating all the communication between users.


When a user wants to send a message to another user,
they will connect to chat server then passes that message to the other user
and stores in database.




Detailed/Step By Step Workflow:

(1) User-A Sends a message to User-B through the Chat Server
(2) The Server will received the message and sends an acknowledge to User-A (Single Tick)
(3) The Server stores the message in Database (temporarily) and sends the message to User-B
(4) User-B receives the message and sends acknowledgement to Server
(5) The Server notifies User-A that message has been delivered to User-B (Double Tick)
(6) Message is deleted from the Database after User-A is informed





Read Receipts:

- Single Tick: Sent
- Double Tick: Delivered
- Blue Tick: Seen



A: "Hi" - Online -> DB -> B: Offline














(5) Detailed Component Level Design

------ TCP:

- Reliable
- Acknowledgement Sent
- 3 Way Handshake





------ UDP:

- Not Reliable
- No Acknowledgement Sent




------ Websockets:

- Built on top of TCP Connections
- Reliable
- Acknowledgement Sent
- 3 Way Handshake







Whatsapp Tech Stack:

- Language: Erlang - Functional Programming
- Backend: Hack (PHP)
- Database: Mnesia (DB) (RDBMS, Bit not SQL DB) and Cassandra




[Image]: DONE






(6) Complete System Architecture



-------> Web Socket Handlers:

Lightweight Server:
- No Logic (Business/Data Logic) Resides at the Server
- Almost No Data Storage/Persistence



Heavyweight Server:
- Logic (Business/Data Logic) Resides at the Server
- Data Storage/Persistence





- WSH is just a lightweight server
- Each Machine has 65K Ports, Assuming 5K Ports for Internal Communication


Now, 60K Ports are ready to be used by 1 WSH


1 WSH = 60K Connections = 60K Active Users

- Total WSH Servers Required = Total Active Users/ 60,000

- These WSH will be distributed across different geolocations to reduce latency






Read Receipts: ON

Last Seen on 10:15 AM


(1) User was connected to Internet
(2) User opened the Whatsapp being connected on Internet: ANS








--------> Web Socket Manager


(1) We need to store information about which User is connected to which WSH
(2) This information is dynamic in nature (WSH Connection can be changes for Users)



Web Socket Manager:

User_ID                 WSH_ID               Port_No

1010101                 10234                65
1010102                 10234                70



(3) A Web Socket Handler will be connected to Web Socket Manager which is repository of 
information about which user is connected to which Web Socket Handler

(4) It sits on the top of Redis, because it stores 2 types of information:

- Which User is connected to which WSH
- What All Users are connected to a WSH


(5) When a connection between a user and a WSH breaks, 
and they connect to a new WSH, this information is updated in Redis via Web Socket Manager












--------> Messaging Service:


(1) A WSH while talking to Web Socket Manager will ALSO, IN PARALLEL,
talk to Messaging Service


(2) Messaging Service is repository of ALL MESSAGES in the system

(3) It will expose APIs to get messages by various filters like:

GET: /user_id
GET: /message_id
GET: /delivery_status

Etc


(4) This service sits on top of Cassandra.


We expect that the new users will keep on getting added, 
we wil have new conversations everyday
--------> Ever Increasing Data


Best DB/Use Case: Cassandra



(5) Also, we need to run finite number of queries on Messaging Service based upon various filters.
(user_id, message_id etc)


Note:

-----> Does Database need to store messages forever?

In FB Messenger: YES
In Whatsapp: NO, they are deleted after the Acknowledgement in sent to the Sender










-------> Scenario-1: Both Sender and Receiver are Online

U1: Sender: WSH1
U2: Receiver: WSH2




U1 -------> M1 ("Hey") ------> U2



When U1 decided to send a message to U2, it communicates this to WSH1
WSH1 will then talk to Web Socket Manager to find out which WSH is U2 connected to,
and the Web Socket Manager will respond with WSH2


WSH1 will make a parallel call to Messaging Service which will have the message M1
into Cassandra and WSH1 will be connected to WSH2


Once M1 is delivered to U2, WSH2 will send an "Acknowledgement" to Messaging Service,
and then Message M1 will be deleted from Cassandra


After receiving Acknowledgement, WSH2 will update WSH1, and WSH1 will update U1
that message has been delivered or seen (Double Tick/Blue Tick)




















-------> Scenario-2: Sender is Online and Receiver is Offline


U1: Sender: WSH1 : Online
U3: Receiver: Offline: Not Connected to Any WSH



U1 ------> M3 ("Hi") -------> U3


When U1 decided to send a message to U3, it communicates this to WSH1
WSH1 will then talk to Web Socket Manager to find out which WSH is U3 connected to,
and the Web Socket Manager will respond with NULL (No Active Connection)


WSH1 will make a parallel call to Messaging Service which will have the message M3
into Cassandra.

U1: Sender: WSH1 : Online
U3: Receiver: WSH3: Comes Online


When U3 will come Online and make connection with WSH3.
WSH3 will make parallel call with Web Socket Manager and the Messaging Service.
WSH3 will ask if there are any new messages for U3 from the messaging service.
Messaging Service will respond with M3.


Once M3 is delivered to Us, WSH3 will send "Acknowledgement" to Messaging Service,
and then Message M3 will be deleted from Cassandra

After receiving Acknowledgement, WSH3 will update WSH1
and WHS1 will update U1 that message has been delivered or seen (Double Tick/Blue Tick)
























-------> Scenario-3: Sender is Offline, Local Caching



Lets say U1 wants to send message to U2 with message_Id M2


U2: Receiver: WSH2 : Online
U1: Sender: Offline: Not Connected to Any WSH



In this case, Message Sent from U1 will be stored in a local storage on device.
As soon as a network connection is there, WSH will pull all the messages from local storage
and send them.



Offline -> Send Message: No Single Tick
Online -> Send Message: Single Tick









(7) Group Chats

Lets say U1 wants to send a message-M4 to G1.
Groups behave slightly different from Users.

WSH CANNOT keep track of Groups, it just tracks active users, its a lightweight server.


So when U1 wants to send a message to G1, WSH1 will talk to Messaging Service.
Messaging Service will communicate with Kafka.
M4 will be stored in Kafka with an instruction that it needs to be sent to G1.

Now, Kafka will interact with Group Messaging Service, 
This will send out all the Group Messages to all users in G1 except U1.

Group Service keeps track of all members in all groups.
(Same as Web Socket Manager in 1:1 Chats)


Group Messaging Service will connect with Group Service to find all the users in G1
and follow the same as a WSH and delivers the message to ALL Users Individually.







(8) Asset Delivery

Users have the option to communicate apart from text messages.
Options: ASSETS
- Images
- Files
- Videos etc


Video: 100 MB
Whatsapp: 21 MB



- Ideally, when Asset is sent out, it will be compressed and encrypted at the sender end

- Encrypted content will be sent to the Receiver

- Even while the content will be received in the encrypted form, and decrypted at receiver end.



Resolution:
 DPI

200 x 200 DPI

100 x 100 DPI







------> Scenario-4: User U1 is sending an image to U2


(1) U1 (Sender) will upload the image to a server (S3 Bucket) and get the image_ID
(2) Then it will send the image_ID to U2 (Receiver) and U2 can search and download the image
from the server.



As we know, WSH is a lightweight server, there is no heavy logic on WSH.
The Image will be compressed on the Sender End and Sent to "Asset Service" through Load Balancer.

Asset Service will store the content on "S3 Bucket".
Based on the kind of traffic S3 received for a particluar image/video/content, 
the Asset Service will load the content onto "CDN".


Once the image is loaded in S3, the asset service will provide image_ID to U2, 
U2 will communicate to U1 via WSH.











-----> Performance Optimisation:


In case of a Major Event (Political/Sports),
A lot of people end up sharing the same image and we might end up
storing the same image multiple times.



U1-> Image 123 -> S3
U2-> Image 123 -> S3
U3-> Image 123 -> S3
U4-> Image 123 -> S3


In S3, I will have 4 Replicas of Image 123.



To Solve this,
Before Uploading an Image to Asset service, 
U1 will send a hash of the image and if the hash is already there in the asset service,
content will not be uploaded again.



To avoid collision, Instead of Sending 1 Hash, we will send across multiple hashes calculated via
multiple algorithms.
If all hashes matches, there is fairly high chance that its the same content.









-----> User Service:

User Service Stores User-Related Information.
Like: 
- Name, User_id, profile_picture, preferences etc

- RDBMS - SQL DB





-----> Group Service:

Group Service maintains all group related information like which user belongs to which group,
user_ids, group_ids, Time creation of group, time when every user was added,
status, group icon, description etc


- SQL DB


- Geographically distributed to reduce latency.









(9) Analytics

Every Action (EVENT) performed by the user can be used for some sort of analysis.

Eg: If a person talks a lot about Sports, Then we can tag as "Sports Enthusiast".
These Events are send to an "Analytics Service" that send them to Kafka.


If the Event was sending an image/asset, the Analytics service will process the image
and tag like "sports", "football", "violence", "politics" etc and then send to Kafka.


Kafka would further send to "Spark Streaming Service" that analysis the content
and dumps it into "Hadoop Cluster" which can run a LOT of Queries.










(10) Last Seen Service

These Events are also sent to "Last Seen Service" which keeps track of the last seen
time of the user.

This information can be stored in Redis.
(User_id -> Last Seen)


If we want to store some more information and that too for billions of users, 
Redis will run out of the memory, Cassandra would be the better choice here.




When we say "Events", there can be 2 Types of Events:

(1) App Events:

Things like when a WSH is connected,Client maing connection to Whatsapp Server etc.
These Events will not be tracked by the last seen service.



(2) User Events:

Things like when the user opens or closes or does anything in the app.
These Events will be used to track the last seen service.









(11) Monitoring and Logging


All the components we have discussed are "Horizontally Scalable"
Spin up more instances as and when required.


We will be Monitoring CPU Utilisations of All Services,
Latency of All Web Services, Disk Utilisation of Kafka and Databases etc

Eg: Grafana, Kibana etc


Based on Monitoring and Alerts, 
We can write Scripts to automate some actions.

Eg: If Disk Utility reaches 80%, spin up another DB Instance etc

















SDE-1:
3 : DSA


SDE-2:
4-5 Rounds

2: DSA
1: HLD
1: LLD (Optional)
1: HM/ Leadership/ Management


SDE-3:

4-5 Rounds

2: DSA
1: HLD
1: LLD (Optional)
1: HM/ Leadership/ Management








































