Date : 21st July 2024
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
(9) Design Whatsapp/FB Messenger/Chat Application: WIP

"Please Type 'Hi' in the Chat Box if you have joined and Can See this Screen".







(6) Detailed Component Design



(1) Where should Videos be stored?

Requirements:
- Store a LARGE Amount of Data (In Thousands of PB)
- Have a Extremely fast lookup



Distributed File Storage:
- Apache Hadoop HDFS
- Youtube: Gluster FS


(2) Where should Thumbnails be Stored?

Why we should separate Thumbnail vs Video Storage?


There will be LOT MORE Thumbnails than Videos.
On Assumption, 1 Video can have upto 5 Thumbnails



For Thumbnails,
We need to have a VERY EFFICIENT Storage System that can serve a huge traffic


Consideration:

(1) Thumbnails are small files, roughly 5 KB (After Compression)
(2) Read Traffic for Thumbnails are MUCH Larger as compared to Videos.

(A) Use Case-1: View a Video
When you are viewing 1 video at a time,
but you will be viewing at page that has 20 thumbnails of other videos.


(B) Use Case-2: Search
When you search in search bar, 
Video is NOT Viewed till its clicked, but all thumbnails are viewed.


(C) Use Case - Home Page
When you are on home page, not watching any video
Still, you are watching 100s of thumbnails





DB:

Option-1:

- Storing Thumbnails on a Distributed File Storage

Considering a HUGE Scale, 
it will be a lookup for different locations of the File Storage to read these files
- This will lead to VERY HIGH Latency for overall lookup



(2) Use Case: VERY EFFICIENT in reading a small amount of data (5 KB)

DB: Google: BigTable



"Dogfooding"
- Facebook


BETA: 

Phases:

C1: Org
C2: All Company
C3: BETA Customers

10%: ASIA
30%: Europe
50%: NA

GA: General Availability






(3) Video Uploads:

Since Videos can be very large,
if while uploading a video, connection drops,
User should be able to resume from the same point (Packet Acknowledgement)


(4) Video Encoding:

Newly uploaded video are stored on server, and is added to the processing queue.
Processing queue encodes the video into multiple formats.
Once all the formats are available, the uploading_service will be notified and the video is
made available with all resolutions Options.




Image:
Component Level Diagram



CDN:

Content Delivery Network
- Give Search Results fron Server Nearest to your Location
- Faster Query
- Used as a Cache: Very Frequently Searched Data is put in CDN


Hot Thumbnails:
Thumbnails of Viral Videos/Popular Videos

Put Hot Thumbnails in CDN to have a quick lookup.


Video:
500 Mn Views

Thumbail View:
~= 2 Bn Views


2 Bn Read Calls --------> Thumbnail DB (BigTable) - Optimised?

Optimisation-1:

2 Bn Read Calls --------> Cache ------> Thumbnail DB (BigTable) 


Optimisation-2:

2 Bn Read Calls --------> CDN ------> Cache ------> Thumbnail DB (BigTable) 





Compression:

Uploaded Content (Video/Image) -------> Compression

Algorithm: Run Length Encoding (RLE)






(7) Metadata Sharding


Since we have HUGE Number of Videos Every Day and our load is EXTREMELY HIGH,
We need to Distribute our data onto multiple machines/servers so that we can perform read/write 
operations Efficiently.




(1) Sharding based on User_ID

- Storing all data for a particular user on one server


hash(User_ID) ----> DBP Server


Eg:

hash(1234) -> 1: DBP-1

- While Querying:

hash(1234) -> DBP-1 -> Have a lookup in DBP-1


Disadvantages:

(1) If a User Becomes Popular?
- There would be TOO MANY Calls on one server, 
which again needs to be partitioned


(2) Some Users do store a lot of videos as compared to other Users
- Skewed Distribution or Non-Uniform Distribution




Solution:

- Repartition
- Consistent Hashing




(2) Sharding based on Video_ID


- Our hash function will map each Video_ID to a random server
where we will store Videos Metadata


hash(Video_ID) ----> DBP Server


Eg:

hash(1234) ----> 1 : DBP-1

- While Querying:

hash(1234) -> DBP-1, Have a lookup in DBP-1


Issue?

Scenario:

To Find Videos of a User:
- Query All Shards
- Return a Set of Vidoes: RESPONSE


A Centralised/Aggregator Servivce will aggregate and rank these 
results before returning to User.

Problem Solved
- Querying all Shards


New Problem:
- Popular Videos:
Too Many Calls to be handled by 1 Server


- Non-Balanced/Skewed Partitions


To Improve further performace,
We put Hot Videos/Popular Vidoes in Cache in front of DB


Ans:

Youtube: User_ID + Video_ID




User_ID: User_UUID
Video_ID: Video_UUID










(8) Data - Deduplication


-------> Problem:

With a huge number of users uploading a MASSIVE Amount of Video Data,
Our Service will have to deal with lot of Duplicate Videos.


Duplicate Videos:

- Differ in Aspect Ratio (9:16, 16:9)
- Encoding (480p, 720p)
- Overlays or Additional Borders
- Excerpts/Shorts from a Large File which is already present in Youtube


Issue with Duplicate Videos?

(1) Data Storage:
Keeping multiple copies of same file is wasting of storage space

(2) Caching:
Duplicate Videos will lead to degraded caching because it would be inefficient by taking up space in DB

(3) Network Usage:
More Network Bandwidth would be required to have lookup for Duplicate Videos





For End User, the problems for Duplication would be:
- Duplicate Search Results
- Longer Video Startup Time
- Interrupted Streaming








------> Solution: De-Duplication- When?

(1) When a User is Uploading the Video: Inline Processing

(2) After Post-Processing of Video: Post Processing



Ans: 
Inline Processing





IMP:

When a user starts uploading a video, our service can run algorithms to find duplicacy.


ML Algorithms:
- Block Matching Algorithm
- Phase Correlation
















(9) Caching

- Which Cache (Why?)
- Size of Cache (80-20 Rule)
- Which Cache Eviction Policy? (Why)
- Handle Cache Invalidation (Cache Miss Case)



Cache:

We need a very highly scalable photo delivery system across the globe.
Our service should be able to push its content closest to the servers distributed globally
Hence, we use CDN.




-----> Which Cache

Youtube: Uses 3 Clusters of Redis


Google Drive: Similar to Hazelcast
Twitter: Uses 3 Clusters of Redis

Cache:
Cache the URLs that are frequently used

Eg: Redis, Memcache, Hazelcast


The Application Servers, before hitting the DB Storage ------> Quickly check in Cache



-------> Size of Cache



Following 80-20 Rule for Cache:
Cache 20% of my data


To Store 20% of these Requests:

0.2 * 48 TB/Day = 8 TB of Cache Memory/Day






------> Which Cache Eviction Policy? 


When the cache is full, and we want to replace a content with a newer content


LRU can be a good solution.
Discard the least recently used content first and store the new content






---------> How can each replica of cache be updated?

In Case of Cache Miss,
Request will go to Database


When this happens,
After Retrieving from Database, we can update the Cache and pass the new entry to all replicas.


- Each replica can update its cache by adding the new entry
- If a replica already has that entry, ignore it.







(11) Load Balancers

Where do we Add Load Balancers:

(1) Between Client and Application Servers
(2) Between Application Servers and Database Servers
(3) Between Application Servers and Cache Servers



------> Which Policy to use for Load Balancers?

(1) Use Round Robin:

Adv:

- Equally distributed load among servers
- If 1 server is not responding, LB will move to next available server

(2) Problem with Round Robin?
- Load amount is not taken care of for a server


Better Solution:

Predictive Analysis for Load Balancing/Smart Load Balancers

LB Solution can be periodically queries to know the health and load of DB Servers

Eg:

Netapp,
NginX







(11) CDN (Content Delivery System)

- A CDN is a set of distributed servers that deliver web content (mostly static) to a user
based upon their geographical location

- Popular Thumbnails can be pushed to CDN for quick lookup

- CDN Finds the nearest server to serve the response

- CDN Makes very heavy use of caching and can serve content out of memory (DB)

- Less Popular Content (Video) DOES NOT NEED to be in CDN










Search:



Client -> Web Server -> App Server -> Metadata Storage () -----> Returns List [Thumbnail + Videos]
(Search_Query)




Search_Query ----> Search Function -----> Aggregator Service ----> Lookup in Metadata Storage
								  <------




Video Metadata Storage

- video_uuid: STRING: PK
- Title: VARCHAR
- Description: VARCHAR
- Size: INT
- Thumbnail_Location: VARCHAR
- Video_Location: VARCHAR
- author: VARCHAR: user_uuid
- tags[]
- categories[]
- No of Likes: INT
- No of Comments: INT
- No of Views: LONG (To Avoid Int Overflow)

































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


























